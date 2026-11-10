
document.addEventListener("DOMContentLoaded", () => {


    // 1. NAVEGACIÓN - MENÚ HAMBURGUESA


    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector(".menu");

    if (btnMenu && menu) {

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



    // 2. ACORDEÓN - SERVICIOS


    const titulos = document.querySelectorAll(".accordion .titulo");

    titulos.forEach(titulo => {

        titulo.addEventListener("click", () => {

            const item = titulo.closest(".item");

            if (!item) return;

            // Cerrar los demás elementos
            document.querySelectorAll(".accordion .item").forEach(otro => {
                if (otro !== item) {
                    otro.classList.remove("activo");
                }
            });

            // Abrir o cerrar el seleccionado
            item.classList.toggle("activo");

        });

    });



    // 3. VALIDACIÓN DEL FORMULARIO


    const form = document.querySelector(".formulario");

    if (form) {

        form.addEventListener("submit", (e) => {

            const nombre = form.querySelector('[name="nombre"]');
            const correo = form.querySelector('[name="correo"]');

            let errores = [];

            if (nombre && nombre.value.trim() === "") {
                errores.push("El nombre es obligatorio.");
            }

            if (correo && !correo.value.trim().includes("@")) {
                errores.push("El correo no es válido.");
            }

            const mensajes = document.querySelector("#mensajes");

            if (errores.length > 0) {

                e.preventDefault();

                if (mensajes) {
                    mensajes.textContent = errores.join(" ");
                } else {
                    alert(errores.join("\n"));
                }

            }

        });

    }

});
