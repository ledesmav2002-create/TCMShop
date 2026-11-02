
/*
  CATÁLOGO TCM SHOP
  Orden:
  Stickers → Mousepads → Chomba TCM → Teclados
  → Combos → Mouses → Auriculares → Accesorios
*/

const PRODUCTS = [

  // ==========================================
  // STICKERS
  // ==========================================

  {
    id: 21,
    nombre: "Sticker Logo TCM Sin Fondo",
    categoria: "Accesorios",
    descripcion: "Sticker con el logo de The Collision Major sin fondo.",
    precio: 1300,
    imagen: "imagenes/1.png",
    etiqueta: "TCM"
  },
  {
    id: 22,
    nombre: "Sticker Logo TCM con Letras",
    categoria: "Accesorios",
    descripcion: "Sticker con el logo y las letras de The Collision Major.",
    precio: 1300,
    imagen: "imagenes/logotcmletras1.png",
    etiqueta: "TCM"
  },
  {
    id: 23,
    nombre: "Sticker Apicultores Esports",
    categoria: "Accesorios",
    descripcion: "Sticker con el logo de Apicultores Esports.",
    precio: 1300,
    imagen: "imagenes/logoapi.png",
    etiqueta: "ESPORTS"
  },
  {
    id: 24,
    nombre: "Sticker Zapadores Esports",
    categoria: "Accesorios",
    descripcion: "Sticker con el logo de Zapadores Esports.",
    precio: 1300,
    imagen: "imagenes/logoze.png",
    etiqueta: "ESPORTS"
  },

  // ==========================================
  // MOUSEPADS
  // ==========================================

  {
    id: 25,
    nombre: "Mousepad Relieve TCM 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad2.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 26,
    nombre: "Mousepad TCM 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad1.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 27,
    nombre: "Mousepad Ashe 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad3.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 28,
    nombre: "Mousepad Galaxia 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer de 60 x 30 cm.",
    precio: 22900,
    imagen: "imagenes/mouspad4.jpeg",
    etiqueta: "MOUSEPAD"
  },

  // ==========================================
  // PRÓXIMO LANZAMIENTO: CHOMBA TCM
  // ==========================================

  // Espacio reservado para la chomba TCM.

  // ==========================================
  // TECLADOS
  // ==========================================

  {
    id: 8,
    nombre: "Teclado Redragon Kumara 2 K552 Rainbow Blanco",
    categoria: "Teclados",
    descripcion: "Teclado Redragon con iluminación Rainbow.",
    precio: 56900,
    imagen: "imagenes/kumarablanco.jpg",
    etiqueta: "RAINBOW"
  },
  {
    id: 11,
    nombre: "Teclado Redragon Dragonborn K630 Negro",
    categoria: "Teclados",
    descripcion: "Teclado compacto Redragon para tu setup.",
    precio: 49900,
    imagen: "imagenes/dragonbornnegro.jpg",
    etiqueta: "COMPACTO"
  },
  {
    id: 18,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Negro ESP",
    categoria: "Teclados",
    descripcion: "Teclado compacto inalámbrico RGB con distribución española.",
    precio: 64900,
    imagen: "imagenes/fizznegro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 19,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Blanco/Gris",
    categoria: "Teclados",
    descripcion: "Teclado compacto inalámbrico RGB blanco y gris, distribución española.",
    precio: 64900,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 20,
    nombre: "Teclado Redragon Fizz K617 Magnético Negro",
    categoria: "Teclados",
    descripcion: "Teclado Redragon Fizz Magnetic.",
    precio: 69900,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "MAGNÉTICO"
  },

  // ==========================================
  // COMBOS
  // ==========================================

  {
    id: 1,
    nombre: "Combo Teclado y Mouse Redragon S146",
    categoria: "Combos",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "imagenes/combo146.jpg",
    etiqueta: "COMBO"
  },
  {
    id: 31,
    nombre: "Combo Teclado y Mouse Redragon S136",
    categoria: "Combos",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "imagenes/combo146.jpg",
    etiqueta: "COMBO"
  },

  // ==========================================
  // MOUSES
  // ==========================================

  {
    id: 2,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Negro",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon para gaming.",
    precio: 59900,
    imagen: "imagenes/mouseking1kb.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 14,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Blanco",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon en color blanco.",
    precio: 61900,
    imagen: "imagenes/mouseking1k.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 32,
    nombre: "Mouse Inalámbrico Logitech G305 Negro",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Logitech G305 en color negro.",
    precio: 0,
    imagen: "imagenes/logitech-g305-negro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 33,
    nombre: "Mouse Inalámbrico Logitech G305 Blanco",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Logitech G305 en color blanco.",
    precio: 0,
    imagen: "imagenes/logitech-g305-blanco.jpg",
    etiqueta: "WIRELESS"
  },

  // ==========================================
  // AURICULARES
  // ==========================================

  {
    id: 5,
    nombre: "Auricular Redragon Zeus X H510 RGB Negro",
    categoria: "Auriculares",
    descripcion: "Auricular gamer Redragon Zeus X con iluminación RGB.",
    precio: 106500,
    imagen: "imagenes/zeusnegro.jpg",
    etiqueta: "RGB"
  },
  {
    id: 6,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Azul",
    categoria: "Auriculares",
    descripcion: "Auricular inalámbrico Redragon IRE Pro.",
    precio: 80700,
    imagen: "imagenes/ireproazul.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 7,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Negro",
    categoria: "Auriculares",
    descripcion: "Auricular inalámbrico Redragon IRE Pro.",
    precio: 80700,
    imagen: "imagenes/irepronegro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 17,
    nombre: "Auricular Redragon Hylas Negro RGB",
    categoria: "Auriculares",
    descripcion: "Auricular gamer Redragon con iluminación RGB.",
    precio: 44900,
    imagen: "imagenes/hylasnegro.jpg",
    etiqueta: "RGB"
  },

  // ==========================================
  // ACCESORIOS
  // ==========================================

  {
    id: 34,
    nombre: "Cámara Web Redragon Hitman GW800-1",
    categoria: "Accesorios",
    descripcion: "Cámara web Redragon Hitman para streaming, videollamadas y contenido.",
    precio: 0,
    imagen: "imagenes/redragon-hitman-gw800-1.jpg",
    etiqueta: "WEBCAM"
  }

];
