const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");
const modal = document.querySelector("#modal");
const botonCerrar = document.querySelector("#cerrar-modal");
const botonCerrar2 = document.querySelector("#cerrar-modal-2");
const API_URL = "https://historias-tejidas-backend.onrender.com/api";

async function cargarProducto() {
    try {
        const respuesta = await fetch(API_URL + "/productos/" + idProducto);

        if (!respuesta.ok) {
            console.log("Producto no encontrado");
            return;
        }

        const productoEncontrado = await respuesta.json();

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




        // Preparar el modal
        const botonPersonalizar = document.querySelector("#personalizar");
        prepararModalPersonalizacion(productoEncontrado, botonPersonalizar);


        // Cerrar modal (los mismos de siempre)
        botonCerrar.addEventListener("click", function () {
            modal.classList.remove("activo");
        });
        botonCerrar2.addEventListener("click", function () {
            modal.classList.remove("activo");
        });


        // ========== AGREGAR DESDE EL MODAL ==========
        const botonAgregarModal = document.querySelector("#agregar-carrito");

        if (botonAgregarModal) {
            botonAgregarModal.addEventListener("click", function () {
                const selecciones = leerSelecciones(productoEncontrado);
                agregarAlCarrito(productoEncontrado, selecciones);
                modal.classList.remove("activo");
            });
        }


        // =========================================================
        // FUNCIONES PROVISIONALES DE PERSONALIZACIÓN
        // =========================================================

        // 1. Construye el HTML del modal según las opciones del producto
        function construirModal(producto) {
            const contenedorOpciones = document.querySelector("#opciones-modal");
            const tituloModal = document.querySelector("#titulo-modal");

            // Si el producto no tiene opciones, no mostrar el botón
            if (producto.opciones.length === 0) {
                return false;
            }

            tituloModal.textContent = "Personaliza tu " + producto.nombre;

            let html = "";
            producto.opciones.forEach(function (grupo, indexGrupo) {
                html += `<div class="grupo-modal">`;
                html += `<h3>${grupo.nombre}</h3>`;

                grupo.items.forEach(function (item, indexItem) {
                    const marcado = item.defecto === true ? "checked" : "";
                    const dataPrecio = item.precio !== undefined ? `data-precio="${item.precio}"` : "";
                    const dataMultiplicador = item.multiplicador !== undefined ? `data-multiplicador="${item.multiplicador}"` : "";

                    html += `
                <label class="opcion-modal">
                    <input 
                        type="radio" 
                        name="grupo-${indexGrupo}" 
                        value="${item.value}"
                        ${dataPrecio}
                        ${dataMultiplicador}
                        ${marcado}
                    >
                    ${item.nombre}
                </label>
            `;
                });

                html += `</div>`;
            });

            contenedorOpciones.innerHTML = html;
            return true;
        }


        // 2. Lee las opciones que el usuario eligió
        function leerSelecciones(producto) {
            const selecciones = [];

            producto.opciones.forEach(function (grupo, indexGrupo) {
                const radioElegido = document.querySelector(`input[name="grupo-${indexGrupo}"]:checked`);
                if (radioElegido) {
                    selecciones.push({
                        value: radioElegido.value,
                        precio: radioElegido.dataset.precio ? Number(radioElegido.dataset.precio) : undefined,
                        multiplicador: radioElegido.dataset.multiplicador ? Number(radioElegido.dataset.multiplicador) : undefined
                    });
                }
            });

            return selecciones;
        }

        // 3. Calcula el precio final según las selecciones
        function calcularPrecio(producto, selecciones) {
            let precio = producto.precio;

            // Primera pasada: ¿algún item reemplaza el precio?
            selecciones.forEach(function (seleccion) {
                if (seleccion.precio !== undefined) {
                    precio = seleccion.precio;
                }
            });

            // Segunda pasada: aplicar multiplicadores
            selecciones.forEach(function (seleccion) {
                if (seleccion.multiplicador !== undefined) {
                    precio = precio * seleccion.multiplicador;
                }
            });

            // Redondear hacia arriba al múltiplo de 100
            return Math.ceil(precio / 100) * 100;
        }

        // 4. Actualiza el precio mostrado en el modal
        function actualizarPrecioModal(producto) {
            const precioModal = document.querySelector("#precio-modal");
            const selecciones = leerSelecciones(producto);
            const precioFinal = calcularPrecio(producto, selecciones);

            precioModal.textContent = "Precio: $" + precioFinal.toLocaleString("es-CO") + " COP";

            return precioFinal;
        }

        // 5. Prepara el modal completo para un producto
         function prepararModalPersonalizacion(producto, boton) {
            if (producto.opciones.length === 0) {
                boton.textContent = "Agregar al carrito";
                boton.addEventListener("click", function () {
                    agregarAlCarrito(producto);
                });
                return;
            }

            boton.textContent = "Personalizar";
            construirModal(producto);

            boton.addEventListener("click", function () {
                modal.classList.add("activo");
                actualizarPrecioModal(producto);
            });

            const contenedorOpciones = document.querySelector("#opciones-modal");

            contenedorOpciones.addEventListener("change", function () {
                actualizarPrecioModal(producto);
            });
        }

    } catch (error) {
        console.error("Error al cargar el producto:", error);
    }
}

cargarProducto();