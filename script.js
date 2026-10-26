
const WHATSAPP_NUMBER = "5493416862971";
const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const emptyState = document.getElementById("empty-state");
let activeCategory = "Todos";

let galleryImages = [];
let galleryIndex = 0;

function whatsappLink(product) {
  const message = `Hola TCM Shop, me interesa este producto: ${product.nombre}. Precio publicado: ${money.format(product.precio)}. ¿Hay stock disponible?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function getProductImages(product) {
  const images = Array.isArray(product.imagenes)
    ? product.imagenes
    : [];

  return [...new Set([product.imagen, ...images].filter(Boolean))];
}

function productCard(p) {
  const images = getProductImages(p);
  const firstImage = images[0];

  const image = firstImage
    ? `<img class="product-photo"
         src="${escapeHtml(firstImage)}"
         alt="${escapeHtml(p.nombre)}"
         loading="lazy"
         data-gallery-product="${p.id}"
         onerror="this.style.display='none'">`
    : `<div class="placeholder-icon" aria-hidden="true">✳</div>`;

  return `<article class="product-card">
    <div class="product-image">
      ${p.etiqueta ? `<span class="product-badge">${escapeHtml(p.etiqueta)}</span>` : ""}
      ${image}
      ${firstImage ? `<button class="zoom-button" type="button"
        data-gallery-product="${p.id}" aria-label="Ampliar fotos de ${escapeHtml(p.nombre)}">⤢</button>` : ""}
    </div>
    <div class="product-info">
      <p class="product-category">${escapeHtml(p.categoria)}</p>
      <h3>${escapeHtml(p.nombre)}</h3>
      <p class="product-description">${escapeHtml(p.descripcion || "")}</p>
      <div class="price">${money.format(p.precio)}<small>Precio en pesos argentinos</small></div>
      <a class="buy-button" href="${whatsappLink(p)}" target="_blank" rel="noopener"
        aria-label="Consultar ${escapeHtml(p.nombre)} por WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.42ZM12.1 21.77h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.46 4.45-9.9 9.92-9.9a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.91 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
        CONSULTAR POR WHATSAPP
      </a>
    </div>
  </article>`;
}

function ensureGallery() {
  if (document.getElementById("product-gallery")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="gallery-modal" id="product-gallery" aria-hidden="true">
      <button class="gallery-close" type="button" aria-label="Cerrar galería">×</button>
      <button class="gallery-arrow gallery-prev" type="button" aria-label="Foto anterior">❮</button>
      <div class="gallery-content">
        <img id="gallery-main-image" src="" alt="">
        <p id="gallery-counter"></p>
        <div id="gallery-thumbnails"></div>
      </div>
      <button class="gallery-arrow gallery-next" type="button" aria-label="Foto siguiente">❯</button>
    </div>
  `);

  const modal = document.getElementById("product-gallery");

  modal.addEventListener("click", event => {
    if (event.target === modal || event.target.closest(".gallery-close")) {
      closeGallery();
    }
  });

  modal.querySelector(".gallery-prev").addEventListener("click", () => changeGallery(-1));
  modal.querySelector(".gallery-next").addEventListener("click", () => changeGallery(1));

  document.addEventListener("keydown", event => {
    if (modal.getAttribute("aria-hidden") === "true") return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") changeGallery(-1);
    if (event.key === "ArrowRight") changeGallery(1);
  });
}

function openGallery(productId) {
  const product = PRODUCTS.find(p => String(p.id) === String(productId));
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
  counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;

  thumbnails.innerHTML = galleryImages.map((src, index) => `
    <button type="button" class="gallery-thumb ${index === galleryIndex ? "selected" : ""}"
      data-gallery-index="${index}" aria-label="Ver foto ${index + 1}">
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
  galleryIndex = (galleryIndex + direction + galleryImages.length) % galleryImages.length;
  showGalleryImage();
}

function closeGallery() {
  const modal = document.getElementById("product-gallery");
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("gallery-open");
}

grid.addEventListener("click", event => {
  const trigger = event.target.closest("[data-gallery-product]");
  if (trigger) openGallery(trigger.dataset.galleryProduct);
});

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");

  const filtered = PRODUCTS.filter(p => {
    const categoryMatch = activeCategory === "Todos" || p.categoria === activeCategory;
    const searchMatch = `${p.nombre} ${p.categoria} ${p.descripcion}`
      .toLocaleLowerCase("es").includes(query);
    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(productCard).join("");
  emptyState.hidden = filtered.length > 0;
}

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(b =>
    b.classList.toggle("active", b === button)
  );
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
