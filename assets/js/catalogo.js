const contenedor = document.querySelector("#contenedor-productos");

function mostrarProductos(lista) {
    let html = "";

    lista.forEach(function(producto) {
        html += `
            <article class="tarjeta">
                <img src="${producto.imagen}" alt="${producto.alt}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="precio">$${producto.precio.toLocaleString("es-CO")} COP</p>
                    <a class="button" href="producto.html?id=${producto.id}">
                        Ver producto ->
                    </a>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = html;
}

mostrarProductos(productos);



const botonesCategoria = document.querySelectorAll(".boton-categoria");

botonesCategoria.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const categoria = boton.dataset.categoria;

        let productosFiltrados;
        if (categoria === "todos") {
            productosFiltrados = productos;
        } else {
            productosFiltrados = productos.filter(function(producto) {
                return producto.categoria === categoria;
            });
        }

        mostrarProductos(productosFiltrados);
    });
});