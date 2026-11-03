
// ==========================================
// TCM SHOP - FUNCIONAMIENTO DEL CATÁLOGO
// ==========================================

const WHATSAPP_NUMBER = "5493416862971";

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const emptyState = document.getElementById("empty-state");
const filtersContainer = document.getElementById("filters");

let activeCategory = "Todos";
let activeBrand = "Todas";
let activeAvailability = "todos";
let sortOrder = "default";

let galleryImages = [];
let galleryIndex = 0;

// ==========================================
// SEGURIDAD HTML
// ==========================================

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

// ==========================================
// IMÁGENES
// ==========================================

function getProductImages(product) {
  const images = Array.isArray(product.imagenes)
    ? product.imagenes
    : [];

  return [...new Set([product.imagen, ...images].filter(Boolean))];
}

// ==========================================
// WHATSAPP
// ==========================================

function whatsappLink(product) {
  const priceText = Number(product.precio) > 0
    ? money.format(product.precio)
    : "Consultar precio";

  let message;

  if (product.disponibilidad === "pedido") {
    message =
      `Hola TCM Shop, me interesa este producto: ${product.nombre}. ` +
      `Precio: ${priceText}. ` +
      "¿Podrían confirmarme disponibilidad, precio actualizado y plazo de entrega?";
  } else {
    message =
      `Hola TCM Shop, me interesa este producto: ${product.nombre}. ` +
      `Precio: ${priceText}. ` +
      "¿Hay stock disponible?";
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ==========================================
// FILTROS POR CATEGORÍA, MARCA Y DISPONIBILIDAD
// ==========================================

function renderFilterControls() {

  const categoryOrder = [
    "Stickers",
    "Mousepads",
    "Indumentaria",
    "Teclados",
    "Combos",
    "Mouse",
    "Auriculares",
    "Joysticks",
    "Webcam",
    "Micrófonos",
    "Simuladores",
    "Accesorios"
  ];

  const existingCategories = [
    ...new Set(PRODUCTS.map(p => p.categoria).filter(Boolean))
  ];

  const categories = [
    "Todos",
    ...categoryOrder.filter(c => existingCategories.includes(c)),
    ...existingCategories.filter(c => !categoryOrder.includes(c))
  ];

  filtersContainer.innerHTML = categories.map(category => `
    <button
      class="filter ${category === activeCategory ? "active" : ""}"
      type="button"
      data-category="${escapeHtml(category)}">
      ${escapeHtml(category === "Mouse" ? "Mouses" : category)}
    </button>
  `).join("");

  let extra = document.getElementById("catalog-extra-filters");

  if (!extra) {
    extra = document.createElement("div");
    extra.id = "catalog-extra-filters";
    extra.className = "catalog-extra-filters";

    filtersContainer.insertAdjacentElement("afterend", extra);
  }

  const brandOrder = [
    "Redragon",
    "Logitech",
    "Corsair",
    "HyperX",
    "TCM"
  ];

  const existingBrands = [
    ...new Set(PRODUCTS.map(p => p.marca).filter(Boolean))
  ];

  const brands = [
    "Todas",
    ...brandOrder.filter(b => existingBrands.includes(b)),
    ...existingBrands.filter(b => !brandOrder.includes(b))
  ];

  extra.innerHTML = `
    <label class="catalog-select-label">
      Marca
      <select id="brand-filter" class="catalog-select">
        ${brands.map(brand => `
          <option value="${escapeHtml(brand)}"
            ${brand === activeBrand ? "selected" : ""}>
            ${escapeHtml(brand)}
          </option>
        `).join("")}
      </select>
    </label>

    <label class="catalog-select-label">
      Disponibilidad
      <select id="availability-filter" class="catalog-select">
        <option value="todos">Todos</option>
        <option value="stock">En stock</option>
        <option value="pedido">A pedido</option>
      </select>
    </label>

    <label class="catalog-select-label">
      Ordenar por
      <select id="sort-products" class="catalog-select">
        <option value="default">Destacados</option>
        <option value="asc">Precio: menor a mayor</option>
        <option value="desc">Precio: mayor a menor</option>
        <option value="az">Nombre: A-Z</option>
        <option value="za">Nombre: Z-A</option>
      </select>
    </label>
  `;

  document.getElementById("brand-filter").value = activeBrand;
  document.getElementById("availability-filter").value = activeAvailability;
  document.getElementById("sort-products").value = sortOrder;

  document.getElementById("brand-filter").addEventListener("change", event => {
    activeBrand = event.target.value;
    renderProducts();
  });

  document.getElementById("availability-filter").addEventListener("change", event => {
    activeAvailability = event.target.value;
    renderProducts();
  });

  document.getElementById("sort-products").addEventListener("change", event => {
    sortOrder = event.target.value;
    renderProducts();
  });
}

// ==========================================
// TARJETAS DE PRODUCTOS
// ==========================================

function productCard(product) {
  const images = getProductImages(product);
  const firstImage = images[0];

  const image = firstImage
    ? `
      <img
        class="product-photo"
        src="${escapeHtml(firstImage)}"
        alt="${escapeHtml(product.nombre)}"
        loading="lazy"
        data-gallery-product="${product.id}"
        onerror="this.style.display='none'">
    `
    : `<div class="placeholder-icon" aria-hidden="true">✳</div>`;

  const price = Number(product.precio) > 0
    ? `
      ${money.format(product.precio)}
      <small>Precio en pesos argentinos</small>
    `
    : `
      Consultar precio
      <small>Consultá el valor actualizado por WhatsApp</small>
    `;

  const isOrder = product.disponibilidad === "pedido";

  const availabilityLabel = isOrder ? "A PEDIDO" : "EN STOCK";
  const availabilityClass = isOrder
    ? "availability-order"
    : "availability-stock";

  return `
    <article class="product-card">

      <div class="product-image">

        ${product.etiqueta
          ? `<span class="product-badge">${escapeHtml(product.etiqueta)}</span>`
          : ""
        }

        <span class="availability-tag ${availabilityClass}">
          ${availabilityLabel}
        </span>

        ${image}

        ${firstImage ? `
          <button
            class="zoom-button"
            type="button"
            data-gallery-product="${product.id}"
            aria-label="Ampliar fotos de ${escapeHtml(product.nombre)}">
            ⤢
          </button>
        ` : ""}

      </div>

      <div class="product-info">

        <p class="product-category">
          ${escapeHtml(product.categoria)}
          ${product.marca ? " · " + escapeHtml(product.marca) : ""}
        </p>

        <h3>${escapeHtml(product.nombre)}</h3>

        <p class="product-description">
          ${escapeHtml(product.descripcion || "")}
        </p>

        <div class="price">
          ${price}
        </div>

        <button
          class="cart-add-button"
          type="button"
          data-cart-add="${product.id}">
          🛒 AGREGAR AL CARRITO
        </button>

        <a
          class="buy-button"
          href="${whatsappLink(product)}"
          target="_blank"
          rel="noopener"
          aria-label="Consultar ${escapeHtml(product.nombre)} por WhatsApp">

          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.42ZM12.1 21.77h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.91 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
          </svg>

          CONSULTAR POR WHATSAPP

        </a>

      </div>
    </article>
  `;
}

// ==========================================
// MOSTRAR Y FILTRAR PRODUCTOS
// ==========================================

function renderProducts() {

  const query = searchInput.value
    .trim()
    .toLocaleLowerCase("es");

  let filtered = PRODUCTS.filter(product => {

    const categoryMatch =
      activeCategory === "Todos" ||
      product.categoria === activeCategory;

    const brandMatch =
      activeBrand === "Todas" ||
      product.marca === activeBrand;

    const availabilityMatch =
      activeAvailability === "todos" ||
      (product.disponibilidad || "stock") === activeAvailability;

    const searchText = `
      ${product.nombre}
      ${product.categoria}
      ${product.descripcion || ""}
      ${product.marca || ""}
    `.toLocaleLowerCase("es");

    const searchMatch = searchText.includes(query);

    return (
      categoryMatch &&
      brandMatch &&
      availabilityMatch &&
      searchMatch
    );
  });

  if (sortOrder === "asc") {
    filtered.sort((a, b) => {
      const priceA = Number(a.precio) > 0 ? Number(a.precio) : Infinity;
      const priceB = Number(b.precio) > 0 ? Number(b.precio) : Infinity;
      return priceA - priceB;
    });
  }

  if (sortOrder === "desc") {
    filtered.sort((a, b) => {
      const priceA = Number(a.precio) > 0 ? Number(a.precio) : -Infinity;
      const priceB = Number(b.precio) > 0 ? Number(b.precio) : -Infinity;
      return priceB - priceA;
    });
  }

  if (sortOrder === "az") {
    filtered.sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es")
    );
  }

  if (sortOrder === "za") {
    filtered.sort((a, b) =>
      b.nombre.localeCompare(a.nombre, "es")
    );
  }

  grid.innerHTML = filtered.map(productCard).join("");

  emptyState.hidden = filtered.length > 0;

  if (filtered.length === 0) {
    emptyState.textContent =
      "No encontramos productos con esos filtros.";
  }
}

// ==========================================
// CLICS EN FILTROS DE CATEGORÍA
// ==========================================

filtersContainer.addEventListener("click", event => {

  const button = event.target.closest("button[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  filtersContainer.querySelectorAll("button[data-category]").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderProducts();
});

// ==========================================
// BUSCADOR
// ==========================================

searchInput.addEventListener("input", renderProducts);

// ==========================================
// GALERÍA DE IMÁGENES
// ==========================================

function ensureGallery() {

  if (document.getElementById("product-gallery")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="gallery-modal" id="product-gallery" aria-hidden="true">

      <button class="gallery-close" type="button" aria-label="Cerrar galería">
        ×
      </button>

      <button class="gallery-arrow gallery-prev" type="button" aria-label="Foto anterior">
        ❮
      </button>

      <div class="gallery-content">

        <img id="gallery-main-image" src="" alt="">

        <p id="gallery-counter"></p>

        <div id="gallery-thumbnails"></div>

      </div>

      <button class="gallery-arrow gallery-next" type="button" aria-label="Foto siguiente">
        ❯
      </button>

    </div>
  `);

  const modal = document.getElementById("product-gallery");

  modal.addEventListener("click", event => {

    if (
      event.target === modal ||
      event.target.closest(".gallery-close")
    ) {
      closeGallery();
    }

  });

  modal.querySelector(".gallery-prev").addEventListener("click", () => {
    changeGallery(-1);
  });

  modal.querySelector(".gallery-next").addEventListener("click", () => {
    changeGallery(1);
  });

  document.addEventListener("keydown", event => {

    if (modal.getAttribute("aria-hidden") === "true") return;

    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") changeGallery(-1);
    if (event.key === "ArrowRight") changeGallery(1);

  });
}

function openGallery(productId) {

  const product = PRODUCTS.find(p =>
    String(p.id) === String(productId)
  );

  if (!product) return;

  galleryImages = getProductImages(product);

  if (!galleryImages.length) return;

  galleryIndex = 0;

  ensureGallery();

  const modal = document.getElementById("product-gallery");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("gallery-open");

  showGalleryImage();
}

function showGalleryImage() {

  const mainImage = document.getElementById("gallery-main-image");
  const counter = document.getElementById("gallery-counter");
  const thumbnails = document.getElementById("gallery-thumbnails");

  mainImage.src = galleryImages[galleryIndex];

  mainImage.alt = `Foto ${galleryIndex + 1} del producto`;

  counter.textContent =
    `${galleryIndex + 1} / ${galleryImages.length}`;

  thumbnails.innerHTML = galleryImages.map((src, index) => `
    <button
      type="button"
      class="gallery-thumb ${index === galleryIndex ? "selected" : ""}"
      data-gallery-index="${index}"
      aria-label="Ver foto ${index + 1}">

      <img src="${escapeHtml(src)}" alt="">

    </button>
  `).join("");

  thumbnails.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

      galleryIndex = Number(button.dataset.galleryIndex);

      showGalleryImage();

    });

  });

  const multiple = galleryImages.length > 1;

  document.querySelector(".gallery-prev").hidden = !multiple;
  document.querySelector(".gallery-next").hidden = !multiple;

  thumbnails.hidden = !multiple;
  counter.hidden = !multiple;
}

function changeGallery(direction) {

  if (galleryImages.length < 2) return;

  galleryIndex =
    (galleryIndex + direction + galleryImages.length) %
    galleryImages.length;

  showGalleryImage();
}

function closeGallery() {

  const modal = document.getElementById("product-gallery");

  if (!modal) return;

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("gallery-open");
}

// ==========================================
// CLICS EN FOTOS DE PRODUCTOS
// ==========================================

grid.addEventListener("click", event => {

  const trigger = event.target.closest("[data-gallery-product]");

  if (!trigger) return;

  openGallery(trigger.dataset.galleryProduct);

});

// ==========================================
// CARRITO DE COMPRAS TCM SHOP
// ==========================================

const CART_STORAGE_KEY = "tcmshop_cart_v1";

let cart = [];

// Recuperar carrito guardado en el navegador

try {
  const savedCart = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY) || "[]"
  );

  if (Array.isArray(savedCart)) {
    cart = savedCart
      .filter(item =>
        PRODUCTS.some(product => product.id === Number(item.id)) &&
        Number.isInteger(Number(item.quantity)) &&
        Number(item.quantity) > 0
      )
      .map(item => ({
        id: Number(item.id),
        quantity: Number(item.quantity)
      }));
  }
} catch (error) {
  cart = [];
}

// Elementos del carrito

const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartCount = document.getElementById("cart-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartPendingNote = document.getElementById("cart-pending-note");
const checkoutButton = document.getElementById("checkout-cart");

// Guardar carrito

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("No se pudo guardar el carrito.", error);
  }
}

// Buscar producto

function getCartProduct(id) {
  return PRODUCTS.find(product => product.id === Number(id));
}

// Cantidad total de unidades

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Calcular subtotal de productos con precio confirmado

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getCartProduct(item.id);

    if (!product || Number(product.precio) <= 0) {
      return total;
    }

    return total + Number(product.precio) * item.quantity;
  }, 0);
}

// Dibujar carrito

function renderCart() {

  const totalQuantity = getCartQuantity();
  const subtotal = getCartSubtotal();

  cartCount.textContent = totalQuantity;
  cartSubtotal.textContent = money.format(subtotal);

  cartEmpty.hidden = cart.length > 0;
  cartItemsContainer.hidden = cart.length === 0;

  const hasPendingProducts = cart.some(item => {
    const product = getCartProduct(item.id);
    return product && Number(product.precio) <= 0;
  });

  cartPendingNote.hidden = !hasPendingProducts;

  checkoutButton.disabled = cart.length === 0;

  cartItemsContainer.innerHTML = cart.map(item => {

    const product = getCartProduct(item.id);

    if (!product) return "";

    const price = Number(product.precio);
    const isPending = price <= 0;

    return `
      <article class="cart-item">

        <img
          class="cart-item-image"
          src="${escapeHtml(product.imagen || "")}"
          alt="${escapeHtml(product.nombre)}"
          onerror="this.style.visibility='hidden'">

        <div class="cart-item-info">

          <h3>${escapeHtml(product.nombre)}</h3>

          ${
            isPending
              ? `<span class="cart-item-pending">PRECIO A CONFIRMAR</span>`
              : `<div class="cart-item-price">${money.format(price * item.quantity)}</div>`
          }

          <div class="cart-item-controls">

            <button
              class="cart-quantity-button"
              type="button"
              data-cart-action="decrease"
              data-id="${product.id}">
              −
            </button>

            <span class="cart-quantity">${item.quantity}</span>

            <button
              class="cart-quantity-button"
              type="button"
              data-cart-action="increase"
              data-id="${product.id}">
              +
            </button>

            <button
              class="cart-remove"
              type="button"
              data-cart-action="remove"
              data-id="${product.id}">
              Eliminar
            </button>

          </div>

        </div>

      </article>
    `;

  }).join("");
}

// Agregar producto

function addToCart(id) {

  const product = getCartProduct(id);

  if (!product) return;

  const existing = cart.find(item => item.id === Number(id));

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: Number(id),
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  const button = grid.querySelector(`[data-cart-add="${id}"]`);

  if (button) {

    const originalText = button.innerHTML;

    button.innerHTML = "✓ AGREGADO AL CARRITO";
    button.classList.add("added");

    setTimeout(() => {

      if (button.isConnected) {
        button.innerHTML = originalText;
        button.classList.remove("added");
      }

    }, 1200);
  }
}

// Modificar cantidades o eliminar productos

function updateCart(id, action) {

  const item = cart.find(item => item.id === Number(id));

  if (!item) return;

  if (action === "increase") {
    item.quantity++;
  }

  if (action === "decrease") {

    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(item => item.id !== Number(id));
    }
  }

  if (action === "remove") {
    cart = cart.filter(item => item.id !== Number(id));
  }

  saveCart();
  renderCart();
}

// Abrir carrito

function openCart() {

  cartOverlay.classList.add("open");
  cartOverlay.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

// Cerrar carrito

function closeCart() {

  cartOverlay.classList.remove("open");
  cartOverlay.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

// Agregar productos desde el catálogo

grid.addEventListener("click", event => {

  const button = event.target.closest("[data-cart-add]");

  if (!button) return;

  addToCart(button.dataset.cartAdd);

});

// Modificar productos desde el carrito

cartItemsContainer.addEventListener("click", event => {

  const button = event.target.closest("[data-cart-action]");

  if (!button) return;

  updateCart(
    button.dataset.id,
    button.dataset.cartAction
  );

});

// Botón abrir carrito

document.getElementById("open-cart").addEventListener("click", openCart);

// Botón cerrar carrito

document.getElementById("close-cart").addEventListener("click", closeCart);

// Cerrar al hacer clic fuera del panel

cartOverlay.addEventListener("click", event => {

  if (event.target === cartOverlay) {
    closeCart();
  }

});

// Cerrar con Escape

document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    cartOverlay.classList.contains("open")
  ) {
    closeCart();
  }

});

// Vaciar carrito

document.getElementById("clear-cart").addEventListener("click", () => {

  if (!cart.length) return;

  if (confirm("¿Querés vaciar todo el carrito?")) {

    cart = [];

    saveCart();
    renderCart();

  }

});

// ==========================================
// FINALIZAR PEDIDO POR WHATSAPP
// ==========================================

checkoutButton.addEventListener("click", () => {

  if (!cart.length) return;

  const subtotal = getCartSubtotal();

  let message =
    "¡Hola TCM Shop! Quiero realizar el siguiente pedido:\n\n";

  cart.forEach(item => {

    const product = getCartProduct(item.id);

    if (!product) return;

    const price = Number(product.precio);

    message += `• ${product.nombre}\n`;
    message += `  Cantidad: ${item.quantity}\n`;

    if (price > 0) {

      message += `  Precio unitario: ${money.format(price)}\n`;
      message += `  Subtotal: ${money.format(price * item.quantity)}\n`;

    } else {

      message += `  Precio: A confirmar\n`;
      message += `  Disponibilidad: A pedido\n`;

    }

    message += "\n";

  });

  message +=
    `TOTAL CON PRECIOS CONFIRMADOS: ${money.format(subtotal)}\n\n`;

  message +=
    "El envío se calcula aparte.\n";

  message +=
    "¿Podrían confirmarme disponibilidad, precios pendientes y costo de envío?";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener");

});

// Dibujar carrito al iniciar

renderCart();

// ==========================================
// AÑO DEL FOOTER
// ==========================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ==========================================
// INICIAR CATÁLOGO
// ==========================================

renderFilterControls();
renderProducts();
