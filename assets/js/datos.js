const productos = [
    // Animales
    // Nota: x es igual a contenido faltante.

    {
        id: "abeja",
        categoria: "animales",
        nombre: "Abeja",
        precio: 30000,
        imagen: "assets/img/catálogo/abeja.png",
        alt: "Un amigurumi tejido sobre una abejita amarilla con rayas negras y sus alas azules.",
        historia: "Pequeña y trabajadora, esta abejita lleva consigo un toque de alegría para endulzar cualquier día.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },
    {
        id: "ballena",
        categoria: "animales",
        nombre: "Ballena",
        precio: 30000,
        imagen: "assets/img/catálogo/ballenas.png",
        alt: "Un amigurumi tejido sobre una ballena azul, tirando agua",
        historia: "Tranquila y soñadora, esta pequeña ballena recorre nuevos mares en busca de un lugar al que llamar hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },
    {
        id: "canguro",
        categoria: "animales",
        nombre: "Canguro",
        precio: 50000,
        imagen: "assets/img/catálogo/canguro.png",
        alt: "Un amigurumi tejido sobre un canguro con su hijo canguro en su bolsa.",
        historia: "Siempre acompañado de su pequeño, este canguro representa el cariño, la protección y la compañía.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },
    {
        id: "capibara",
        categoria: "animales",
        nombre: "Capibara",
        precio: 40000,
        imagen: "assets/img/catálogo/capibara.png",
        alt: "Un amigurumi tejido sobre un capibara con una naranja en su cabeza.",
        historia: "Con su pequeña naranja y su espíritu tranquilo, este capibara invita a disfrutar de las cosas sencillas.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "conejo",
        categoria: "animales",
        nombre: "Conejo",
        precio: 60000,
        imagen: "assets/img/catálogo/conejo.png",
        alt: "Un amigurumi tejido sobre un conejo marron con ropita a su talla.",
        historia: "Tierno y curioso, este conejito está listo para acompañarte en nuevas aventuras.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "dinosaurio",
        categoria: "animales",
        nombre: "Dinosaurio",
        precio: 40000,
        imagen: "assets/img/catálogo/dinosaurio.png",
        alt: "Un amigurumi tejido sobre un dinosaurio con cuerno amarrillo.",
        historia: "Con su pequeño cuerno amarillo, este dinosaurio conserva el espíritu aventurero de una época perdida.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "dragon-alargado",
        categoria: "animales",
        nombre: "Dragón",
        precio: 50000,
        imagen: "assets/img/catálogo/dragon.png",
        alt: "Un amigurumi tejido sobre un dragon verde con alas rojas.",
        historia: "Entre alas y escamas, este pequeño dragón está listo para proteger y acompañar nuevas historias.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "dragon",
        categoria: "animales",
        nombre: "Dragón",
        precio: 40000,
        imagen: "assets/img/catálogo/dragonalargado.png",
        alt: "Un amigurumi tejido sobre un dragon alargado, rojo brillante.",
        historia: "Rojo y brillante, este dragón dejó su cueva para convertirse en el guardián de un nuevo hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "foca",
        categoria: "animales",
        nombre: "Foca",
        precio: 20000,
        imagen: "assets/img/catálogo/foca.png",
        alt: "Un amigurumi tejido sobre una foca blanca pequeña.",
        historia: "Pequeña y tranquila, esta foca trae consigo un pedacito de mar para acompañar momentos especiales.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "gato",
        categoria: "animales",
        nombre: "Gato",
        precio: 30000,
        imagen: "assets/img/catálogo/gato.png",
        alt: "Un amigurumi tejido sobre un gato gordo de color gris sentado.",
        historia: "Gordito, tranquilo y amante de las siestas, este gatito está listo para encontrar un nuevo lugar donde descansar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "mono",
        categoria: "animales",
        nombre: "Mono",
        precio: 40000,
        imagen: "assets/img/catálogo/mono.png",
        alt: "Un amigurumi tejido sobre un monito marrón con una banana en las manos.",
        historia: "Curioso y juguetón, este pequeño mono siempre está preparado para una nueva aventura con su banana en mano.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "oso",
        categoria: "animales",
        nombre: "Oso",
        precio: 50000,
        imagen: "assets/img/catálogo/oso.png",
        alt: "Un amigurumi tejido sobre un oso blanco con ropa tejida y bufanda.",
        historia: "Abrigado y tierno, este osito busca un nuevo hogar donde compartir momentos llenos de cariño.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "panda",
        categoria: "animales",
        nombre: "Panda",
        precio: 30000,
        imagen: "assets/img/catálogo/panda.png",
        alt: "Un amigurumi tejido sobre un panda pequeño.",
        historia: "Tranquilo y adorable, este pequeño panda nació para convertirse en un compañero especial.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "pato",
        categoria: "animales",
        nombre: "Pato",
        precio: 60000,
        imagen: "assets/img/catálogo/pato.png",
        alt: "Un amigurumi tejido sobre un pato blanco y pico narranja.",
        historia: "Curioso y aventurero, este pequeño pato está listo para salir del estanque y descubrir nuevos caminos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "pinguino",
        categoria: "animales",
        nombre: "Pingüino",
        precio: 50000,
        imagen: "assets/img/catálogo/pinguino.png",
        alt: "Un amigurumi tejido sobre un pinguino blanco con negro, el cual tiene un sombrero de colores.",
        historia: "Con su colorido sombrero, este pequeño pingüino lleva un toque de alegría incluso en los días más fríos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "pulpo",
        categoria: "animales",
        nombre: "Pulpo",
        precio: 20000,
        imagen: "assets/img/catálogo/pulpos.png",
        alt: "Amigurumi tejidos sobre pulpos multicolores los cuales representan una emoción diferente.",
        historia: "Colorido y expresivo, cada pequeño pulpo representa una emoción diferente y una forma única de acompañarte.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    },

    {
        id: "tortuga-bebe",
        categoria: "animales",
        nombre: "Tortuga bebé",
        precio: 20000,
        imagen: "assets/img/catálogo/tortuga.png",
        alt: "Un amigurumi tejido sobre una tortuga bebé la cual es blanquita y pequeña.",
        historia: "Pequeña y delicada, esta tortuguita comienza su viaje en busca de un nuevo hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales"
    }

]
