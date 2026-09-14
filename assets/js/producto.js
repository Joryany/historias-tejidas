    const parametros = new URLSearchParams(window.location.search);
    const idProducto = parametros.get("id");
    console.log("Id del Producto seleccionado:", idProducto);

    console.log(productos);

    function buscarId(id) {

        for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
                return productos[i];
            }
        }
        return null;
    }

buscarId(idProducto)

    const productoEncontrado = buscarId(idProducto);

    if (productoEncontrado === null) {
        console.log("Producto no encontrado");
    } else {
        console.log("Producto encontrado:", productoEncontrado);

         // Imagen
        const imagen = document.querySelector("#imagen");
        imagen.src = productoEncontrado.imagen;
        imagen.alt = productoEncontrado.alt;

        // Nombre
        const nombre = document.querySelector("#nombre");
        nombre.textContent = productoEncontrado.nombre;

        // Precio (con formato bonito, pero calculado desde un número)
        const precio = document.querySelector("#precio");
        precio.textContent = "$" + productoEncontrado.precio.toLocaleString("es-CO") + " COP";

        // Historia
        const historia = document.querySelector("#historia__p");
        historia.textContent = productoEncontrado.historia;

        // Materiales
        const materiales = document.querySelector("#materiales__p");
        materiales.textContent = productoEncontrado.materiales;

        // Etiqueta
        const etiqueta = document.querySelector("#etiqueta");
        etiqueta.textContent = productoEncontrado.etiqueta;
    }