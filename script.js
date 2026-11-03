
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

  // Orden de las categorías
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

  // Crear controles adicionales
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

  // Ordenamiento.
  // Los productos sin precio quedan al final.
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
