
/*
  CATÁLOGO TCM SHOP
  - Se conserva el stock y sus imágenes originales.
  - Los productos a pedido se ordenan por tipo de producto.
  - No se muestran enlaces de proveedores.
  - Los productos a pedido muestran precio a consultar.
*/

const PRODUCTS = [

  // =========================
  // STICKERS
  // =========================
  { id: 21, nombre: "Sticker Logo TCM Sin Fondo", categoria: "Accesorios", marca: "TCM", descripcion: "Sticker con el logo de The Collision Major sin fondo.", precio: 1300, imagen: "imagenes/1.png", etiqueta: "TCM", disponibilidad: "stock" },
  { id: 22, nombre: "Sticker Logo TCM con Letras", categoria: "Accesorios", marca: "TCM", descripcion: "Sticker con el logo y las letras de The Collision Major.", precio: 1300, imagen: "imagenes/logotcmletras1.png", etiqueta: "TCM", disponibilidad: "stock" },
  { id: 23, nombre: "Sticker Apicultores Esports", categoria: "Accesorios", marca: "TCM", descripcion: "Sticker con el logo de Apicultores Esports.", precio: 1300, imagen: "imagenes/logoapi.png", etiqueta: "ESPORTS", disponibilidad: "stock" },
  { id: 24, nombre: "Sticker Zapadores Esports", categoria: "Accesorios", marca: "TCM", descripcion: "Sticker con el logo de Zapadores Esports.", precio: 1300, imagen: "imagenes/logoze.png", etiqueta: "ESPORTS", disponibilidad: "stock" },

  // =========================
  // MOUSEPADS EN STOCK
  // =========================
  { id: 25, nombre: "Mousepad Relieve TCM 60x30", categoria: "Mousepads", marca: "TCM", descripcion: "Mousepad gamer de 60 x 30 cm.", precio: 24720, imagen: "imagenes/mouspad2.jpeg", imagenes: ["imagenes/mouspadrelievetcm2.png", "imagenes/mouspadrelievetcm3.png"], etiqueta: "MOUSEPAD", disponibilidad: "stock" },
  { id: 26, nombre: "Mousepad TCM 60x30", categoria: "Mousepads", marca: "TCM", descripcion: "Mousepad gamer de 60 x 30 cm.", precio: 24720, imagen: "imagenes/mouspad1.jpeg", imagenes: ["imagenes/mouspadtcm2.png", "imagenes/mouspadtcm3.png"], etiqueta: "MOUSEPAD", disponibilidad: "stock" },
  { id: 27, nombre: "Mousepad Ashe 60x30", categoria: "Mousepads", marca: "TCM", descripcion: "Mousepad gamer de 60 x 30 cm.", precio: 24720, imagen: "imagenes/mouspad3.jpeg", imagenes: ["imagenes/mouspadashe2.png", "imagenes/mouspadashe3.png"], etiqueta: "MOUSEPAD", disponibilidad: "stock" },
  { id: 28, nombre: "Mousepad Galaxia 60x30", categoria: "Mousepads", marca: "TCM", descripcion: "Mousepad gamer de 60 x 30 cm.", precio: 24720, imagen: "imagenes/mouspad4.jpeg", imagenes: ["imagenes/mouspadgalaxia2.png", "imagenes/mouspadgalaxia3.png"], etiqueta: "MOUSEPAD", disponibilidad: "stock" },

  // =========================
  // TECLADOS EN STOCK
  // =========================
  { id: 8, nombre: "Teclado Redragon Kumara 2 K552 Rainbow Blanco", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon con iluminación Rainbow.", precio: 58270, imagen: "imagenes/kumarab1.png", imagenes: ["imagenes/kumarab2.png", "imagenes/kumarab3.png"], etiqueta: "RAINBOW", disponibilidad: "stock" },
  { id: 11, nombre: "Teclado Redragon Dragonborn K630 Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado compacto Redragon para tu setup.", precio: 45590, imagen: "imagenes/dragonbornnegro.jpg", imagenes: ["imagenes/dragonbornn2.png", "imagenes/dragonbornn3.png"], etiqueta: "COMPACTO", disponibilidad: "stock" },
  { id: 18, nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Negro ESP", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado compacto inalámbrico RGB con distribución española.", precio: 75140, imagen: "imagenes/fizznegro.jpg", imagenes: ["imagenes/fizzpron2.png", "imagenes/fizzpron3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 19, nombre: "Teclado Redragon Fizz Pro 60% Inalámbrico RGB Blanco/Gris", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado compacto inalámbrico RGB blanco y gris, distribución española.", precio: 75140, imagen: "imagenes/fizzgris.png", imagenes: ["imagenes/fizzprobg2.png", "imagenes/fizzprobg3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 20, nombre: "Teclado Redragon Fizz K617 Magnético Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Fizz Magnetic.", precio: 64740, imagen: "imagenes/fizzmagnn1.png", imagenes: ["imagenes/fizzmagnn2.png", "imagenes/fizzmagnn3.png"], etiqueta: "MAGNÉTICO", disponibilidad: "stock" },

  // =========================
  // COMBOS EN STOCK
  // =========================
  { id: 1, nombre: "Combo Teclado y Mouse Redragon S146", categoria: "Combos", marca: "Redragon", descripcion: "Combo gamer Redragon para equipar tu setup.", precio: 84550, imagen: "imagenes/combo146.jpg", imagenes: ["imagenes/combo1462.png", "imagenes/combo1463.png"], etiqueta: "COMBO", disponibilidad: "stock" },
  { id: 31, nombre: "Combo Teclado y Mouse Redragon S136", categoria: "Combos", marca: "Redragon", descripcion: "Combo gamer Redragon para equipar tu setup.", precio: 107270, imagen: "imagenes/combo1361.png", imagenes: ["imagenes/combo1362.png", "imagenes/combo1363.png"], etiqueta: "COMBO", disponibilidad: "stock" },

  // =========================
  // MOUSES EN STOCK
  // =========================
  { id: 2, nombre: "Mouse Redragon King M916 Pro Inalámbrico Negro", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse inalámbrico Redragon para gaming.", precio: 56840, imagen: "imagenes/mouseking1kb.jpg", imagenes: ["imagenes/kingm916n2.png", "imagenes/kingm916n3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 14, nombre: "Mouse Redragon King M916 Pro Inalámbrico Blanco 4k", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse inalámbrico Redragon en color blanco.", precio: 84590, imagen: "imagenes/mouseking1k.jpg", imagenes: ["imagenes/kingm916b2.png", "imagenes/kingm916b3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 32, nombre: "Mouse Inalámbrico Logitech G305 Negro", categoria: "Mouse", marca: "Logitech", descripcion: "Mouse inalámbrico Logitech G305 en color negro.", precio: 56190, imagen: "imagenes/g305n1.png", imagenes: ["imagenes/g305n2.png", "imagenes/g305n3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 33, nombre: "Mouse Inalámbrico Logitech G305 Blanco", categoria: "Mouse", marca: "Logitech", descripcion: "Mouse inalámbrico Logitech G305 en color blanco.", precio: 56190, imagen: "imagenes/g305b1.png", imagenes: ["imagenes/g305b2.png", "imagenes/g305b3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },

  // =========================
  // AURICULARES EN STOCK
  // =========================
  { id: 5, nombre: "Auricular Redragon Zeus X H510 RGB Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auricular gamer Redragon Zeus X con iluminación RGB.", precio: 116570, imagen: "imagenes/zeusnegro.jpg", imagenes: ["imagenes/zeusxn2.png", "imagenes/zeusxn3.png"], etiqueta: "RGB", disponibilidad: "stock" },
  { id: 35, nombre: "Auricular Redragon Zeus X H510 RGB Blanco", categoria: "Auriculares", marca: "Redragon", descripcion: "Auricular gamer Redragon Zeus X con iluminación RGB.", precio: 116570, imagen: "imagenes/zeusnegro.jpg", imagenes: ["imagenes/zeusxb2.png", "imagenes/zeusxb3.png"], etiqueta: "RGB", disponibilidad: "stock" },
  { id: 6, nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Azul", categoria: "Auriculares", marca: "Redragon", descripcion: "Auricular inalámbrico Redragon IRE Pro.", precio: 78340, imagen: "imagenes/ireproazul.jpg", imagenes: ["imagenes/ireproa2.png", "imagenes/ireproa3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 7, nombre: "Auricular Redragon IRE Pro H848 Inalámbrico Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auricular inalámbrico Redragon IRE Pro.", precio: 78340, imagen: "imagenes/irepronegro.jpg", imagenes: ["imagenes/irepron2.png", "imagenes/irepron3.png"], etiqueta: "WIRELESS", disponibilidad: "stock" },
  { id: 17, nombre: "Auricular Redragon Hylas Negro RGB", categoria: "Auriculares", marca: "Redragon", descripcion: "Auricular gamer Redragon con iluminación RGB.", precio: 39720, imagen: "imagenes/hylasnegro.jpg", imagenes: ["imagenes/hylasn2.png", "imagenes/hylasn3.png"], etiqueta: "RGB", disponibilidad: "stock" },

  // =========================
  // WEBCAM EN STOCK
  // =========================
  { id: 34, nombre: "Cámara Web Redragon Hitman GW800-1", categoria: "Webcam", marca: "Redragon", descripcion: "Cámara web Redragon Hitman para streaming, videollamadas y contenido.", precio: 73220, imagen: "imagenes/gw8001.png", etiqueta: "WEBCAM", disponibilidad: "stock" },

  // ==========================================================
  // CATÁLOGO A PEDIDO - ORDENADO POR TIPO DE PRODUCTO
  // ==========================================================

  // =========================
  // MOUSES A PEDIDO
  // =========================
  { id: 104, nombre: "Mouse Redragon King M724 Negro", categoria: "Mouse", marca: "Redragon", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/kingm724n1.png", imagenes: ["imagenes/kingm724n2.png", "imagenes/kingm724n3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 107, nombre: "Mouse Inalámbrico Redragon K1ng Ultra M999", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse inalámbrico gamer de alto rendimiento. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/m9991.png", imagenes: ["imagenes/m9992.png", "imagenes/m9993.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 126, nombre: "Mouse Redragon M711 Cobra Negro", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse gamer Redragon Cobra M711. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/m711cobra1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 127, nombre: "Mouse Redragon Centrophorus RGB M601", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse gamer Redragon Centrophorus RGB. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/m6011.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 128, nombre: "Mouse Inalámbrico Redragon K1ng Pro M916 4K Negro", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse inalámbrico Redragon K1ng Pro con tecnología 4K. Producto a pedido.", precio: 0, imagen: "imagenes/m9164k1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 129, nombre: "Mouse Inalámbrico Redragon St4r Pro M917 Azul", categoria: "Mouse", marca: "Redragon", descripcion: "Mouse inalámbrico Redragon St4r Pro en color azul. Producto a pedido.", precio: 0, imagen: "imagenes/m917azul1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // TECLADOS A PEDIDO
  // =========================
  { id: 101, nombre: "Teclado Redragon Ucal K673 Magnético", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado magnético Redragon Ucal. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/ucalk6731.png", imagenes: ["imagenes/ucalk6732.png", "imagenes/ucalk6733.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 102, nombre: "Teclado Redragon Eisa Pro K686 Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Eisa Pro K686. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/eisaprokn1.png", imagenes: ["imagenes/eisaprokn2.png", "imagenes/eisaprokn3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 105, nombre: "Teclado Redragon Eisa K686 Magnético", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado magnético Redragon Eisa. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/eisak686mag1.png", imagenes: ["imagenes/eisak686mag2.png", "imagenes/eisak686mag3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 108, nombre: "Teclado Redragon Ucal LCD Pro K724 RGB", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Ucal LCD Pro RGB. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/ucalk7241.png", imagenes: ["imagenes/ucalk7242.png", "imagenes/ucalk7243.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 109, nombre: "Teclado Redragon Eisa LCD K719 Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Eisa LCD. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/eisak719n1.png", imagenes: ["imagenes/eisak719n2.png", "imagenes/eisak719n3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 111, nombre: "Teclado Redragon Eisa Pro K686 Blanco-Azul", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Eisa Pro en combinación blanco y azul. Producto a pedido.", precio: 0, imagen: "imagenes/eisaprokwaz1.png", imagenes: ["imagenes/eisaprokwaz2.png", "imagenes/eisaprokwaz3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 112, nombre: "Teclado Redragon Trundle", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado gamer Redragon Trundle. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/trundle1.png", imagenes: ["imagenes/trundle2.png", "imagenes/trundle3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 130, nombre: "Teclado Redragon Kumara 2 K552 Rainbow Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado Redragon Kumara 2 con iluminación Rainbow. Producto a pedido.", precio: 0, imagen: "imagenes/kumara2k552rainbownegro1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 131, nombre: "Teclado Redragon Kumara K552 RGB Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado mecánico Redragon Kumara K552 con iluminación RGB. Producto a pedido.", precio: 0, imagen: "imagenes/kumarak552rgbnegro1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 132, nombre: "Teclado Inalámbrico Redragon Horus K621 TKL Negro", categoria: "Teclados", marca: "Redragon", descripcion: "Teclado inalámbrico Redragon Horus TKL. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/horusk6211.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // AURICULARES A PEDIDO
  // =========================
  { id: 133, nombre: "Auriculares Redragon Ares H120 Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auriculares gamer Redragon Ares H120. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/aresH1201.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 134, nombre: "Auricular Redragon Cronus H211 RGB Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auriculares gamer Redragon Cronus con iluminación RGB. Producto a pedido.", precio: 0, imagen: "imagenes/cronush2111.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 135, nombre: "Auriculares Redragon H541 Cragblade Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auriculares gamer Redragon Cragblade H541. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/h541cragblade1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 136, nombre: "Auricular Inalámbrico Redragon Zeus Pro H510 Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auriculares inalámbricos Redragon Zeus Pro. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/zeusproh5101.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 137, nombre: "Auricular Inalámbrico Redragon Vibecore H610 Negro", categoria: "Auriculares", marca: "Redragon", descripcion: "Auriculares inalámbricos Redragon Vibecore H610. Producto a pedido.", precio: 0, imagen: "imagenes/vibecoreh6101.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // MOUSEPADS A PEDIDO
  // =========================
  { id: 138, nombre: "Mouse Pad Redragon Kunlun L", categoria: "Mousepads", marca: "Redragon", descripcion: "Mousepad Redragon Kunlun tamaño L. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/kunlunl1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 139, nombre: "Mouse Pad Redragon Flick XL PO32", categoria: "Mousepads", marca: "Redragon", descripcion: "Mousepad Redragon Flick XL de gran superficie. Producto a pedido.", precio: 0, imagen: "imagenes/flickxlpo321.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // JOYSTICKS A PEDIDO
  // =========================
  { id: 103, nombre: "Joystick Redragon WargRIP G831 PS5", categoria: "Joysticks", marca: "Redragon", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/wargripg8311.png", imagenes: ["imagenes/wargripg8312.png", "imagenes/wargripg8313.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 110, nombre: "Joystick Inalámbrico Redragon Harrow G808 PRO V1", categoria: "Joysticks", marca: "Redragon", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/harrowg808pro1.png", imagenes: ["imagenes/harrowg808pro2.png", "imagenes/harrowg808pro3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // SIMULADORES A PEDIDO
  // =========================
  { id: 118, nombre: "Volante Logitech G923 Negro", categoria: "Simuladores", marca: "Logitech", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/g9231.png", imagenes: ["imagenes/g9232.png", "imagenes/g9233.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 140, nombre: "Estructura de Simulador Redragon Vortex", categoria: "Simuladores", marca: "Redragon", descripcion: "Estructura para simulador de conducción Redragon Vortex. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/vortex1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 141, nombre: "Estructura para Simulador Redragon Cyclone", categoria: "Simuladores", marca: "Redragon", descripcion: "Estructura para simulador de conducción Redragon Cyclone. Producto a pedido, consultanos precio y disponibilidad.", precio: 0, imagen: "imagenes/cyclone1.png", etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // WEBCAMS A PEDIDO
  // =========================
  { id: 106, nombre: "Cámara Web Redragon GW911 4K", categoria: "Webcam", marca: "Redragon", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/gw91141.png", imagenes: ["imagenes/gw91142.png", "imagenes/gw91143.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // MICRÓFONOS A PEDIDO
  // =========================
  { id: 124, nombre: "Micrófono HyperX QuadCast 2S USB RGB", categoria: "Micrófonos", marca: "HyperX", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/quadcast2s1.png", imagenes: ["imagenes/quadcast2s2.png", "imagenes/quadcast2s3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 125, nombre: "Micrófono HyperX QuadCast 2 Black", categoria: "Micrófonos", marca: "HyperX", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/quadcast21.png", imagenes: ["imagenes/quadcast22.png", "imagenes/quadcast23.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // LOGITECH A PEDIDO
  // =========================
  { id: 114, nombre: "Teclado Logitech PRO X60 Blanco", categoria: "Teclados", marca: "Logitech", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/prox60b1.png", imagenes: ["imagenes/prox60b2.png", "imagenes/prox60b3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 115, nombre: "Auricular Inalámbrico Logitech G522 Blanco", categoria: "Auriculares", marca: "Logitech", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/g522b1.png", imagenes: ["imagenes/g522b2.png", "imagenes/g522b3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 116, nombre: "Auricular Logitech G335 Blanco", categoria: "Auriculares", marca: "Logitech", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/g335b1.png", imagenes: ["imagenes/g335b2.png", "imagenes/g335b3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 117, nombre: "Auricular Inalámbrico Logitech A20 X Blanco", categoria: "Auriculares", marca: "Logitech", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/a20xb1.png", imagenes: ["imagenes/a20xb2.png", "imagenes/a20xb3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  // =========================
  // CORSAIR A PEDIDO
  // =========================
  { id: 119, nombre: "Teclado Corsair K70 CORE RGB USB Gris EN", categoria: "Teclados", marca: "Corsair", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/k70core1.png", imagenes: ["imagenes/k70core2.png", "imagenes/k70core3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 120, nombre: "Mouse Corsair DARKSTAR RGB MMO Wireless", categoria: "Mouse", marca: "Corsair", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/darkstar1.png", imagenes: ["imagenes/darkstar2.png", "imagenes/darkstar3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 121, nombre: "Mouse Corsair SABRE v2 PRO ULTRALIGHT Wireless Negro", categoria: "Mouse", marca: "Corsair", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/sabrev2pron1.png", imagenes: ["imagenes/sabrev2pron2.png", "imagenes/sabrev2pron3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 122, nombre: "Mouse Corsair SABRE v2 PRO ULTRALIGHT Wireless Blanco", categoria: "Mouse", marca: "Corsair", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/sabrev2prob1.png", imagenes: ["imagenes/sabrev2prob2.png", "imagenes/sabrev2prob3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" },

  { id: 123, nombre: "Teclado Corsair K65 PLUS Wireless 75%", categoria: "Teclados", marca: "Corsair", descripcion: "Producto a pedido. Consultanos precio, disponibilidad y plazo de entrega.", precio: 0, imagen: "imagenes/k65plus1.png", imagenes: ["imagenes/k65plus2.png", "imagenes/k65plus3.png"], etiqueta: "A PEDIDO", disponibilidad: "pedido", proveedor: "Elit" }

];
