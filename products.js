
/*
  CATÁLOGO TCM SHOP
  Orden:
  Stickers → Mousepads → Chomba TCM → Teclados
  → Combos → Mouses → Auriculares
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
    descripcion: "Mousepad gamer.",
    precio: 22900,
    imagen: "imagenes/mouspad2.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 26,
    nombre: "Mousepad TCM 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer.",
    precio: 22900,
    imagen: "imagenes/mouspad1.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 27,
    nombre: "Mousepad Ashe 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer.",
    precio: 22900,
    imagen: "imagenes/mouspad3.jpeg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 28,
    nombre: "Mousepad Galaxia 60x30",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer.",
    precio: 22900,
    imagen: "imagenes/mouspad4.jpeg",
    etiqueta: "MOUSEPAD"
  },


  // ==========================================
  // PRÓXIMO LANZAMIENTO: CHOMBA TCM
  // ==========================================

  // Espacio reservado para agregar la chomba TCM.
  // Cuando tengas la foto y el precio, agregaremos:
  //
  // {
  //   id: 30,
  //   nombre: "Chomba The Collision Major",
  //   categoria: "Indumentaria",
  //   descripcion: "Indumentaria oficial de The Collision Major.",
  //   precio: 0,
  //   imagen: "imagenes/chomba-tcm.jpg",
  //   etiqueta: "TCM"
  // },


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
  // },
  // {
   // id: 9,
   // nombre: "Teclado Redragon Kumara 2 K552 Rainbow Negro",
   // categoria: "Teclados",
   // descripcion: "Teclado Redragon con iluminación Rainbow.",
   // precio: 56900,
   // imagen: "imagenes/kumara negro.jpg",
   // etiqueta: "RAINBOW"
  // },
  // {
   // id: 10,
   // nombre: "Teclado Redragon Kumara K552 RBN Magnético Negro",
   // categoria: "Teclados",
   // descripcion: "Teclado gamer Redragon magnético.",
   // precio: 81000,
   // imagen: "imagenes/kumaramag.png",
   // etiqueta: "GAMING"
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
    id: 19,
    nombre: "Teclado  Redragon Fizz k617 Magnético Negro",
    categoria: "Teclados",
    descripcion: "https://redragon.es/products/best-seller/fizz-magnetic/",
    precio: 69900,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "WIRELESS"
  },
  //{
  //  id: 20,
  // nombre: "Teclado Redragon Volcano Pro Inalámbrico LCD",
  //  categoria: "Teclados",
  //  descripcion: "Teclado Redragon inalámbrico con pantalla LCD.",
  //  precio: 52300,
  //  imagen: "imagenes/volcanon.jpg",
  //  etiqueta: "LCD"
 // },


  // ==========================================
  // COMBOS
  // ==========================================

  {
    id: 1,
    nombre: "Combo Teclado y Mouse Redragon S146",
    categoria: "Combos",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "/imagenes/combo146.jpg",
    etiqueta: "COMBO"
  },
  {
    id: 31,
    nombre: "Combo Teclado y Mouse Redragon S136",
    categoria: "Combos",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 83900,
    imagen: "/imagenes/combo146.jpg",
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
    id: 3,
    nombre: "Mouse Redragon Cobra M711 Blanco",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color blanco.",
    precio: 34900,
    imagen: "imagenes/mousecobrablanco.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 12,
    nombre: "Mouse Redragon K1ng Negro",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color negro.",
    precio: 27900,
    imagen: "imagenes/kingcablenegro.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 13,
    nombre: "Mouse Redragon K1ng Blanco",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color blanco.",
    precio: 27900,
    imagen: "imagenes/kinkcableblanco.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 14,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Blanco",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon en color blanco.",
    precio: 61900,
    imagen: "/imagenes/mouseking1k.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 15,
    nombre: "Mouse Redragon ST4R Pro Inalámbrico Celeste",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon en color celeste.",
    precio: 56900,
    imagen: "imagenes/starproceleste.jpg",
    etiqueta: "WIRELESS"
  },


  // ==========================================
  // AURICULARES
  // ==========================================

  {
    id: 4,
    nombre: "Auricular Redragon Cronus Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer Redragon.",
    precio: 39900,
    imagen: "imagenes/cronusnegro.jpg",
    etiqueta: "AUDIO"
  },
  {
    id: 5,
    nombre: "Auricular Redragon Zeus X H510 RGB Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer con iluminación RGB.",
    precio: 106500,
    imagen: "imagenes/zeusnegro.jpg",
    etiqueta: "RGB"
  },
  {
    id: 6,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Azul",
    categoria: "Auriculares",
    descripcion: "Auriculares inalámbricos Redragon en color azul.",
    precio: 80700,
    imagen: "imagenes/ireproazul.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 7,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares inalámbricos Redragon en color negro.",
    precio: 80700,
    imagen: "imagenes/irepronegro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 16,
    nombre: "Auricular Redragon Cronus Blanco",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer Redragon.",
    precio: 39900,
    imagen: "imagenes/cronusblanco.jpg",
    etiqueta: "AUDIO"
  },
  {
    id: 17,
    nombre: "Auricular Redragon Hylas Negro RGB",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer con iluminación RGB.",
    precio: 44900,
    imagen: "imagenes/hylasnegro.jpg",
    etiqueta: "RGB"
  }

];
