    const parametros = new URLSearchParams(window.location.search);
    const idProducto = parametros.get("id");
    console.log("Id del Producto seleccionado:", idProducto);


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


    // Modal
        const botonPersonalizar = document.querySelector("#personalizar");
        const modal = document.querySelector("#modal");
        const botonCerrar = document.querySelector("#cerrar-modal");
        const botonCerrar2 = document.querySelector("#cerrar-modal-2");

        botonPersonalizar.addEventListener("click", function() {
            modal.classList.add("activo");
            actualizarPrecioModal();
        });

        botonCerrar.addEventListener("click", function() {
            modal.classList.remove("activo");
        });

        botonCerrar2.addEventListener("click", function() {
            modal.classList.remove("activo");
        });


        const formTamano = document.querySelector("#form-tamano");
        const precioModal = document.querySelector("#precio-modal");

        function actualizarPrecioModal() {
            const radioSeleccionado = document.querySelector('input[name="tamano"]:checked');
            const tamano = radioSeleccionado.value;

           let multiplicador = 1; 
            if (tamano === "pequeno") {
                multiplicador = 0.60;
            } else if (tamano === "grande") {
                multiplicador = 2.10;
            }
            const precioCalculado = productoEncontrado.precio * multiplicador;
            const precioFinal = Math.ceil(precioCalculado / 100) * 100;
            precioModal.textContent = "Precio: $" + precioFinal.toLocaleString("es-CO") + " COP";
        }

        formTamano.addEventListener("change", actualizarPrecioModal);