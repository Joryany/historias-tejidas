// ========== ELEMENTOS DEL DOM ==========
const contenedor = document.querySelector("#contenedor-productos");
const buscador = document.querySelector("#buscador");
const ordenador = document.querySelector("#ordenador");
const paginacion = document.querySelector("#paginacion");
const botonesCategoria = document.querySelectorAll(".boton-categoria");

// ========== ESTADO ==========
let estado = {
    busqueda: "",
    categoria: "todos",
    orden: "defecto",
    pagina: 1
};

const POR_PAGINA = 9;

const productosBarajados = [...productos].sort(function() {
    return Math.random() - 0.5;
});

// ========== FUNCIÓN PRINCIPAL DE RENDER ==========
function renderizar() {
    
    let lista = productosBarajados;

    
    if (estado.categoria !== "todos") {
        lista = lista.filter(function(producto) {
            return producto.categoria === estado.categoria;
        });
    }

    
    if (estado.busqueda !== "") {
        lista = lista.filter(function(producto) {
            return producto.nombre.toLowerCase().includes(estado.busqueda);
        });
    }

    
    if (estado.orden === "precio-menor") {
        lista = [...lista].sort((a, b) => a.precio - b.precio);
    } else if (estado.orden === "precio-mayor") {
        lista = [...lista].sort((a, b) => b.precio - a.precio);
    } else if (estado.orden === "alfabetico") {
        lista = [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

   
    const totalPaginas = Math.ceil(lista.length / POR_PAGINA);
    const inicio = (estado.pagina - 1) * POR_PAGINA;
    const fin = inicio + POR_PAGINA;
    const paginaActual = lista.slice(inicio, fin);

  
    mostrarProductos(paginaActual);

  
    mostrarPaginacion(totalPaginas);
}

function mostrarProductos(lista) {
    let html = "";
    lista.forEach(function(producto) {
        html += `
    <article class="tarjeta">
        <img src="${producto.imagen}" alt="${producto.alt}">
        <div class="producto-info">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toLocaleString("es-CO")} COP</p>
            <div class="tarjeta-botones">
                <a class="button" href="producto.html?id=${producto.id}">
                    Ver producto
                </a>
                <button class="button button-primario boton-agregar" data-id="${producto.id}">
                    🛒 Agregar
                </button>
            </div>
        </div>
    </article>
`;
    });
    contenedor.innerHTML = html;
}

function mostrarPaginacion(totalPaginas) {
    let html = "";
    for (let i = 1; i <= totalPaginas; i++) {
        html += `<button class="boton-pagina" data-pagina="${i}">${i}</button>`;
    }
    paginacion.innerHTML = html;

    const botonesPagina = document.querySelectorAll(".boton-pagina");
    botonesPagina.forEach(function(boton) {
        boton.addEventListener("click", function() {
            estado.pagina = Number(boton.dataset.pagina);
            renderizar();
        });
    });
}

// ========== EVENTOS ==========
buscador.addEventListener("input", function() {
    estado.busqueda = buscador.value.trim().toLowerCase();
    estado.pagina = 1;   // reiniciar paginación al buscar
    renderizar();
});

ordenador.addEventListener("change", function() {
    estado.orden = ordenador.value;
    estado.pagina = 1;
    renderizar();
});

botonesCategoria.forEach(function(boton) {
    boton.addEventListener("click", function() {
        estado.categoria = boton.dataset.categoria;
        estado.pagina = 1;
        renderizar();
    });
});

// ========== ARRANQUE ==========
renderizar();


// ========== CARRITO (provisional) ==========
let carrito = [];

function agregarAlCarrito(idProducto) {
    const producto = productos.find(function(p) { return p.id === idProducto; });
    if (!producto) return;

    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio });
    actualizarContadorCarrito();
    console.log("Producto agregado al carrito:", producto.nombre);
    console.log("Carrito actual:", carrito);
}

function actualizarContadorCarrito() {
    const contador = document.querySelector("#carrito-contador");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

// Delegación de eventos: escuchar clics en botones "Agregar"
contenedor.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("boton-agregar")) {
        const id = evento.target.dataset.id;
        agregarAlCarrito(id);
    }
});