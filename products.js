
/*
  CATÁLOGO TCM SHOP
  Precios calculados con un 20% sobre el costo.
  Para agregar fotos, subilas al repositorio y colocá
  la ruta del archivo en la propiedad "imagen".
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
    descripcion: "Auriculares gamer Redragon en color blanco.",
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
  }
];
