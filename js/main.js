
document.addEventListener("DOMContentLoaded", () => {



    // 1. NAVEGACIÓN - MENÚ HAMBURGUESA

    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector(".menu");

    if (btnMenu && menu) {

        // Abrir y cerrar el menú
        btnMenu.addEventListener("click", () => {

            menu.classList.toggle("abierto");
            btnMenu.classList.toggle("activo");

        });

        // Cerrar el menú al seleccionar un enlace
        const enlaces = menu.querySelectorAll("a");

        enlaces.forEach(enlace => {

            enlace.addEventListener("click", () => {

                menu.classList.remove("abierto");
                btnMenu.classList.remove("activo");

            });

        });

    }


    // 2. ACORDEÓN - PREGUNTAS FRECUENTES

    const titulos = document.querySelectorAll(".accordion .titulo");

    titulos.forEach(titulo => {

        titulo.addEventListener("click", () => {

            const item = titulo.closest(".item");

            if (!item) return;

            // Comprobar si el elemento ya está abierto
            const estabaAbierto = item.classList.contains("activo");

            // Cerrar todos los elementos
            document.querySelectorAll(".accordion .item").forEach(otro => {

                otro.classList.remove("activo");

            });

            // Abrir el seleccionado si estaba cerrado
            if (!estabaAbierto) {

                item.classList.add("activo");

            }

        });

    });


    // 3. VALIDACIÓN DEL FORMULARIO

    const form = document.querySelector(".formulario");

    if (form) {

        form.addEventListener("submit", (e) => {

            const nombre = form.querySelector('[name="nombre"]');
            const correo = form.querySelector('[name="correo"]');

            const errores = [];

            // Validar nombre
            if (nombre && nombre.value.trim() === "") {

                errores.push("El nombre es obligatorio.");

            }

            // Validar correo
            if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {

                errores.push("El correo no es válido.");

            }

            const mensajes = document.querySelector("#mensajes");

            // Mostrar errores
            if (errores.length > 0) {

                e.preventDefault();

                if (mensajes) {

                    mensajes.textContent = errores.join(" ");

                } else {

                    alert(errores.join("\n"));

                }

            } else if (mensajes) {

                mensajes.textContent = "";

            }

        });

    }

});
