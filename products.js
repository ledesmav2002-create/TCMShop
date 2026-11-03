
/*
  CATÁLOGO TCM SHOP
  Los productos actuales se conservan.
  Los productos con precio 0 muestran "Consultar precio".
  Los productos de Elit figuran como A PEDIDO.
*/

const PRODUCTS = [
  // ===================== STICKERS =====================
  {
    id: 21,
    nombre: "Sticker Logo TCM Sin Fondo",
    categoria: "Accesorios",
    marca: "TCM",
    descripcion: "Sticker con el logo de The Collision Major sin fondo.",
    precio: 1300,
    imagen: "imagenes/1.png",
    etiqueta: "TCM",
    disponibilidad: "stock"
  },
  {
    id: 22,
    nombre: "Sticker Logo TCM con Letras",
    categoria: "Accesorios",
    marca: "TCM",
    descripcion: "Sticker con el logo y las letras de The Collision Major.",
    precio: 1300,
    imagen: "imagenes/logotcmletras1.png",
    etiqueta: "TCM",
    disponibilidad: "stock"
  },
  {
    id: 23,
    nombre: "Sticker Apicultores Esports",
    categoria: "Accesorios",
    marca: "TCM",
    descripcion: "Sticker con el logo de Apicultores Esports.",
    precio: 1300,
    imagen: "imagenes/logoapi.png",
    etiqueta: "ESPORTS",
    disponibilidad: "stock"
  },
  {
    id: 24,
    nombre: "Sticker Zapadores Esports",
    categoria: "Accesorios",
    marca: "TCM",
    descripcion: "Sticker con el logo de Zapadores Esports.",
    precio: 1300,
    imagen: "imagenes/logoze.png",
    etiqueta: "ESPORTS",
    disponibilidad: "stock"
  },

  // ===================== MOUSEPADS =====================
  {
    id: 25,
    nombre: "Mousepad Relieve TCM 60x30",
    categoria: "Mousepads",
    marca: "TCM",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad2.jpeg",
    etiqueta: "MOUSEPAD",
    disponibilidad: "stock"
  },
  {
    id: 26,
    nombre: "Mousepad TCM 60x30",
    categoria: "Mousepads",
    marca: "TCM",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad1.jpeg",
    etiqueta: "MOUSEPAD",
    disponibilidad: "stock"
  },
  {
    id: 27,
    nombre: "Mousepad Ashe 60x30",
    categoria: "Mousepads",
    marca: "TCM",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad3.jpeg",
    etiqueta: "MOUSEPAD",
    disponibilidad: "stock"
  },
  {
    id: 28,
    nombre: "Mousepad Galaxia 60x30",
    categoria: "Mousepads",
    marca: "TCM",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad4.jpeg",
    etiqueta: "MOUSEPAD",
    disponibilidad: "stock"
  },

  // ===================== TECLADOS =====================
  {
    id: 8,
    nombre: "Teclado Redragon Kumara 2 K552 Rainbow Blanco",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Teclado Redragon con iluminación Rainbow.",
    precio: 56900,
    imagen: "imagenes/kumarablanco.jpg",
    etiqueta: "RAINBOW",
    disponibilidad: "stock"
  },
  {
    id: 11,
    nombre: "Teclado Redragon Dragonborn K630 Negro",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Teclado compacto Redragon para tu setup.",
    precio: 49900,
    imagen: "imagenes/dragonbornnegro.jpg",
    etiqueta: "COMPACTO",
    disponibilidad: "stock"
  },
  {
    id: 18,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Negro ESP",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Teclado compacto inalámbrico RGB con distribución española.",
    precio: 64900,
    imagen: "imagenes/fizznegro.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 19,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Blanco/Gris",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Teclado compacto inalámbrico RGB blanco y gris, distribución española.",
    precio: 64900,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 20,
    nombre: "Teclado Redragon Fizz K617 Magnético Negro",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Teclado Redragon Fizz Magnetic.",
    precio: 69900,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "MAGNÉTICO",
    disponibilidad: "stock"
  },

  // ===================== COMBOS =====================
  {
    id: 1,
    nombre: "Combo Teclado y Mouse Redragon S146",
    categoria: "Combos",
    marca: "Redragon",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "imagenes/combo146.jpg",
    etiqueta: "COMBO",
    disponibilidad: "stock"
  },
  {
    id: 31,
    nombre: "Combo Teclado y Mouse Redragon S136",
    categoria: "Combos",
    marca: "Redragon",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "imagenes/combo146.jpg",
    etiqueta: "COMBO",
    disponibilidad: "stock"
  },

  // ===================== MOUSES =====================
  {
    id: 2,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Negro",
    categoria: "Mouse",
    marca: "Redragon",
    descripcion: "Mouse inalámbrico Redragon para gaming.",
    precio: 59900,
    imagen: "imagenes/mouseking1kb.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 14,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Blanco",
    categoria: "Mouse",
    marca: "Redragon",
    descripcion: "Mouse inalámbrico Redragon en color blanco.",
    precio: 61900,
    imagen: "imagenes/mouseking1k.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 32,
    nombre: "Mouse Inalámbrico Logitech G305 Negro",
    categoria: "Mouse",
    marca: "Logitech",
    descripcion: "Mouse inalámbrico Logitech G305 en color negro.",
    precio: 0,
    imagen: "imagenes/logitech-g305-negro.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 33,
    nombre: "Mouse Inalámbrico Logitech G305 Blanco",
    categoria: "Mouse",
    marca: "Logitech",
    descripcion: "Mouse inalámbrico Logitech G305 en color blanco.",
    precio: 0,
    imagen: "imagenes/logitech-g305-blanco.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },

  // ===================== AURICULARES =====================
  {
    id: 5,
    nombre: "Auricular Redragon Zeus X H510 RGB Negro",
    categoria: "Auriculares",
    marca: "Redragon",
    descripcion: "Auricular gamer Redragon Zeus X con iluminación RGB.",
    precio: 106500,
    imagen: "imagenes/zeusnegro.jpg",
    etiqueta: "RGB",
    disponibilidad: "stock"
  },
  {
    id: 35,
    nombre: "Auricular Redragon Zeus X H510 RGB Blanco",
    categoria: "Auriculares",
    marca: "Redragon",
    descripcion: "Auricular gamer Redragon Zeus X con iluminación RGB.",
    precio: 106500,
    imagen: "imagenes/zeusnegro.jpg",
    etiqueta: "RGB",
    disponibilidad: "stock"
  },
  {
    id: 6,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Azul",
    categoria: "Auriculares",
    marca: "Redragon",
    descripcion: "Auricular inalámbrico Redragon IRE Pro.",
    precio: 80700,
    imagen: "imagenes/ireproazul.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 7,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Negro",
    categoria: "Auriculares",
    marca: "Redragon",
    descripcion: "Auricular inalámbrico Redragon IRE Pro.",
    precio: 80700,
    imagen: "imagenes/irepronegro.jpg",
    etiqueta: "WIRELESS",
    disponibilidad: "stock"
  },
  {
    id: 17,
    nombre: "Auricular Redragon Hylas Negro RGB",
    categoria: "Auriculares",
    marca: "Redragon",
    descripcion: "Auricular gamer Redragon con iluminación RGB.",
    precio: 44900,
    imagen: "imagenes/hylasnegro.jpg",
    etiqueta: "RGB",
    disponibilidad: "stock"
  },

  // ===================== ACCESORIOS =====================
  {
    id: 34,
    nombre: "Cámara Web Redragon Hitman GW800-1",
    categoria: "Accesorios",
    marca: "Redragon",
    descripcion: "Cámara web Redragon Hitman para streaming, videollamadas y contenido.",
    precio: 0,
    imagen: "imagenes/redragon-hitman-gw800-1.jpg",
    etiqueta: "WEBCAM",
    disponibilidad: "stock"
  },

  // ===================== CATÁLOGO A PEDIDO - ELIT =====================
  // Todos estos productos quedan con precio a consultar.
  // Confirmar disponibilidad y plazo con el proveedor antes de cobrar.

  {
    id: 101,
    nombre: "Teclado Redragon Ucal K673 Magnético",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-ucal-k673.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20663-teclado-redragon-ucal-k673-magnetico"
  },
  {
    id: 102,
    nombre: "Teclado Redragon Eisa Pro K686 Negro",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-eisa-pro-k686-negro.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20198-teclado-redragon-eisa-pro-k686-negro"
  },
  {
    id: 103,
    nombre: "Joystick Redragon WargRIP G831 PS5",
    categoria: "Joysticks",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-warg-rip-g831.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20667-joystick-redragon-warg-rip-g831-ps5"
  },
  {
    id: 104,
    nombre: "Mouse Redragon King M724 Negro",
    categoria: "Mouse",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-king-m724.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20658-mouse-redragon-king-m724-negro"
  },
  {
    id: 105,
    nombre: "Teclado Redragon Eisa K686 Magnético",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-eisa-k686.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20684-teclado-redragon-eisa-k686-magnetico"
  },
  {
    id: 106,
    nombre: "Cámara Web Redragon GW911 4K",
    categoria: "Webcam",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-gw911-4k.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20665-camara-web-redragon-gw911-4k"
  },
  {
    id: 107,
    nombre: "Mouse Inalámbrico Redragon K1ng Ultra M999",
    categoria: "Mouse",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-m999.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20668-mouse-inalambrico-redragon-k1ng-ultra-m999"
  },
  {
    id: 108,
    nombre: "Teclado Redragon Ucal LCD Pro K724 RGB",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-ucal-k724.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20886-teclado-inalambrico-redragon-ucal-lcd-pro-k724-rgb"
  },
  {
    id: 109,
    nombre: "Teclado Redragon Eisa LCD K719 Negro",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-eisa-k719.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20884-teclado-inalambrico-redragon-eisa-lcd-k719-negro"
  },
  {
    id: 110,
    nombre: "Joystick Inalámbrico Redragon Harrow G808 PRO V1",
    categoria: "Joysticks",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-harrow-g808-pro.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20159-joystick-inalambrico-redragon-harrow-g808-pro-v1"
  },
  {
    id: 111,
    nombre: "Teclado Redragon Eisa Pro K686 Blanco-Azul",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-eisa-pro-k686-blanco-azul.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20199-teclado-redragon-eisa-pro-k686-blanco-azul"
  },
  {
    id: 112,
    nombre: "Teclado Redragon Trundle",
    categoria: "Teclados",
    marca: "Redragon",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-redragon-trundle.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20197-teclado-redragon-trundle"
  },

  // ===================== LOGITECH =====================
  {
    id: 113,
    nombre: "Mouse Logitech G502 Lightspeed Negro",
    categoria: "Mouse",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-g502.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/8952-mouse-inalambrico-logitech-g502-lightspeed-negro"
  },
  {
    id: 114,
    nombre: "Teclado Logitech PRO X60 Blanco",
    categoria: "Teclados",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-pro-x60.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/17979-teclado-logitech-pro-x60-blanco"
  },
  {
    id: 115,
    nombre: "Auricular Inalámbrico Logitech G522 Blanco",
    categoria: "Auriculares",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-g522.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/18985-auricular-inalambrico-logitech-g522-blanco"
  },
  {
    id: 116,
    nombre: "Auricular Logitech G335 Blanco",
    categoria: "Auriculares",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-g335.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/15118-auricular-logitech-g335-blanco"
  },
  {
    id: 117,
    nombre: "Auricular Inalámbrico Logitech A20 X Blanco",
    categoria: "Auriculares",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-a20x.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/19627-auricular-inalambrico-logitech-a20-x-blanco"
  },
  {
    id: 118,
    nombre: "Volante Logitech G923 Negro",
    categoria: "Simuladores",
    marca: "Logitech",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-logitech-g923.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/10731-volante-logitech-g923-negro"
  },

  // ===================== CORSAIR =====================
  {
    id: 119,
    nombre: "Teclado Corsair K70 CORE RGB USB Gris EN",
    categoria: "Teclados",
    marca: "Corsair",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-corsair-k70-core.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/20037-teclado-gamer-mecanico-corsair-k70-core-rgb-usb-gris-en"
  },
  {
    id: 120,
    nombre: "Mouse Corsair DARKSTAR RGB MMO Wireless",
    categoria: "Mouse",
    marca: "Corsair",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-corsair-darkstar.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/19411-mouse-gamer-corsair-darkstar-rgb-mmo-wireless"
  },
  {
    id: 121,
    nombre: "Mouse Corsair SABRE v2 PRO ULTRALIGHT Wireless Negro",
    categoria: "Mouse",
    marca: "Corsair",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-corsair-sabre-v2-pro-negro.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/19418-mouse-gamer-corsair-sabre-v2-pro-ultralight-wireless-negro"
  },
  {
    id: 122,
    nombre: "Mouse Corsair SABRE v2 PRO ULTRALIGHT Wireless Blanco",
    categoria: "Mouse",
    marca: "Corsair",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega. Enlace de la variante blanca pendiente de confirmar.",
    precio: 0,
    imagen: "imagenes/pedido-corsair-sabre-v2-pro-blanco.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit"
  },
  {
    id: 123,
    nombre: "Teclado Corsair K65 PLUS Wireless 75%",
    categoria: "Teclados",
    marca: "Corsair",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-corsair-k65-plus.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/19388-teclado-gamer-mecanico-corsair-rgb-75-k65-plus-wireless"
  },

  // ===================== HYPERX =====================
  {
    id: 124,
    nombre: "Micrófono HyperX QuadCast 2S USB RGB",
    categoria: "Micrófonos",
    marca: "HyperX",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-hyperx-quadcast-2s.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/18212-microfono-quad-cast-2s-usb-rgb"
  },
  {
    id: 125,
    nombre: "Micrófono HyperX QuadCast 2 Black",
    categoria: "Micrófonos",
    marca: "HyperX",
    descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.",
    precio: 0,
    imagen: "imagenes/pedido-hyperx-quadcast-2.jpg",
    etiqueta: "A PEDIDO",
    disponibilidad: "pedido",
    proveedor: "Elit",
    urlProveedor: "https://www.elit.com.ar/producto/17845-microfono-hyper-x-quad-cast-2-black"
  }
];
