
/*
  CATÁLOGO TCM SHOP
  Para agregar fotos, subilas a la carpeta imagenes
  del repositorio y colocá la ruta en la propiedad "imagen".
*/
const PRODUCTS = [
  {
    id: 1,
    nombre: "Combo Teclado y Mouse Redragon S146",
    categoria: "Combos",
    descripcion: "Combo gamer Redragon para equipar tu setup.",
    precio: 80407,
    imagen: "/imagenes/combo146.jpg",
    etiqueta: "COMBO"
  },
  {
    id: 2,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Negro",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon para gaming.",
    precio: 54052,
    imagen: "imagenes/mouseking1kb.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 3,
    nombre: "Mouse Redragon Cobra M711 Blanco",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color blanco.",
    precio: 26170,
    imagen: "imagenes/mousecobrablanco.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 4,
    nombre: "Auricular Redragon Cronus Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer Redragon.",
    precio: 33535,
    imagen: "imagenes/cronusnegro.jpg",
    etiqueta: "AUDIO"
  },
  {
    id: 5,
    nombre: "Auricular Redragon Zeus X H510 RGB Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer con iluminación RGB.",
    precio: 101946,
    imagen: "imagenes/zeusnegro.jpg",
    etiqueta: "RGB"
  },
  {
    id: 6,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Azul",
    categoria: "Auriculares",
    descripcion: "Auriculares inalámbricos Redragon en color azul.",
    precio: 74492,
    imagen: "imagenes/ireproazul.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 7,
    nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Negro",
    categoria: "Auriculares",
    descripcion: "Auriculares inalámbricos Redragon en color negro.",
    precio: 74418,
    imagen: "imagenes/irepronegro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 8,
    nombre: "Teclado Redragon Kumara 2 K552 Rainbow Blanco",
    categoria: "Teclados",
    descripcion: "Teclado Redragon con iluminación Rainbow.",
    precio: 55391,
    imagen: "imagenes/kumarablanco.jpg",
    etiqueta: "RAINBOW"
  },
  {
    id: 9,
    nombre: "Teclado Redragon Kumara 2 K552 Rainbow Negro",
    categoria: "Teclados",
    descripcion: "Teclado Redragon con iluminación Rainbow.",
    precio: 53958,
    imagen: "imagenes/kumara negro.jpg",
    etiqueta: "RAINBOW"
  },
  {
    id: 10,
    nombre: "Teclado Redragon Kumara K552 RBN Magnético Negro",
    categoria: "Teclados",
    descripcion: "Teclado gamer Redragon magnético.",
    precio: 75199,
    imagen: "imagenes/kumaramagnegro (1).jpg",
    etiqueta: "GAMING"
  },
  {
    id: 11,
    nombre: "Teclado Redragon Dragonborn K630 Negro",
    categoria: "Teclados",
    descripcion: "Teclado compacto Redragon para tu setup.",
    precio: 43338,
    imagen: "imagenes/dragonbornnegro.jpg",
    etiqueta: "COMPACTO"
  },
  {
    id: 12,
    nombre: "Mouse Redragon K1ng Negro",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color negro.",
    precio: 26040,
    imagen: "imagenes/kingcablenegro.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 13,
    nombre: "Mouse Redragon K1ng Blanco",
    categoria: "Mouse",
    descripcion: "Mouse gamer Redragon en color blanco.",
    precio: 26040,
    imagen: "imagenes/kinkcableblanco.jpg",
    etiqueta: "GAMING"
  },
  {
    id: 14,
    nombre: "Mouse Redragon King M916 Pro Inalámbrico Blanco",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon en color blanco.",
    precio: 59520,
    imagen: "/imagenes/mouseking1k.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 15,
    nombre: "Mouse Redragon ST4R Pro Inalámbrico Celeste",
    categoria: "Mouse",
    descripcion: "Mouse inalámbrico Redragon en color celeste.",
    precio: 54870,
    imagen: "imagenes/starproceleste.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 16,
    nombre: "Auricular Redragon Cronus Blanco",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer Redragon.",
    precio: 38130,
    imagen: "imagenes/cronusblanco.jpg",
    etiqueta: "AUDIO"
  },
  {
    id: 17,
    nombre: "Auricular Redragon Hylas Negro RGB",
    categoria: "Auriculares",
    descripcion: "Auriculares gamer con iluminación RGB.",
    precio: 40920,
    imagen: "imagenes/hylasnegro.jpg",
    etiqueta: "RGB"
  },
  {
    id: 18,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Negro ESP",
    categoria: "Teclados",
    descripcion: "Teclado compacto inalámbrico RGB con distribución española.",
    precio: 62310,
    imagen: "imagenes/fizznegro.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 19,
    nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Blanco/Gris ESP",
    categoria: "Teclados",
    descripcion: "Teclado compacto inalámbrico RGB blanco y gris, distribución española.",
    precio: 62310,
    imagen: "imagenes/fizzgris.jpg",
    etiqueta: "WIRELESS"
  },
  {
    id: 20,
    nombre: "Teclado Redragon Volcano Pro Inalámbrico LCD",
    categoria: "Teclados",
    descripcion: "Teclado Redragon inalámbrico con pantalla LCD.",
    precio: 50220,
    imagen: "imagenes/volcanonegro (1).jpg",
    etiqueta: "LCD"
  },
  {
    id: 21,
    nombre: "Sticker Logo TCM Sin Fondo",
    categoria: "Stickers",
    descripcion: "Sticker con el logo de The Collision Major sin fondo.",
    precio: 2000,
    imagen: "imagenes/1.png",
    etiqueta: "TCM"
  },
  {
    id: 22,
    nombre: "Sticker Logo TCM con Letras",
    categoria: "Stickers",
    descripcion: "Sticker con el logo y las letras de The Collision Major.",
    precio: 2000,
    imagen: "imagenes/tcmlogoletras.png",
    etiqueta: "TCM"
  },
  {
    id: 23,
    nombre: "Sticker Apicultores Esports",
    categoria: "Stickers",
    descripcion: "Sticker con el logo de Apicultores Esports.",
    precio: 2000,
    imagen: "imagenes/logoapi.png",
    etiqueta: "ESPORTS"
  },
  {
    id: 24,
    nombre: "Sticker Zapadores Esports",
    categoria: "Stickers",
    descripcion: "Sticker con el logo de Zapadores Esports.",
    precio: 2000,
    imagen: "imagenes/logozapa.png",
    etiqueta: "ESPORTS"
  },
  {
    id: 25,
    nombre: "Mousepad 1",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer. Editá la descripción cuando quieras.",
    precio: 0,
    imagen: "imagenes/mousepad1.jpg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 26,
    nombre: "Mousepad 2",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer. Editá la descripción cuando quieras.",
    precio: 0,
    imagen: "imagenes/mousepad2.jpg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 27,
    nombre: "Mousepad 3",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer. Editá la descripción cuando quieras.",
    precio: 0,
    imagen: "imagenes/mousepad3.jpg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 28,
    nombre: "Mousepad 4",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer. Editá la descripción cuando quieras.",
    precio: 0,
    imagen: "imagenes/mousepad4.jpg",
    etiqueta: "MOUSEPAD"
  },
  {
    id: 29,
    nombre: "Mousepad 5",
    categoria: "Mousepads",
    descripcion: "Mousepad gamer. Editá la descripción cuando quieras.",
    precio: 0,
    imagen: "imagenes/mousepad5.jpg",
    etiqueta: "MOUSEPAD"
  }
];
