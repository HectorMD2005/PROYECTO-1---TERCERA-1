
document.addEventListener("DOMContentLoaded", () => {  //espera a que el navegador termine de analizar el documento HTML y construir el DOM
// termine de cargarse totalmente antes de realizar cualquier proceso



    // 1. NAVEGACIÓN - MENÚ HAMBURGUESA

    const btnMenu = document.querySelector("#btnMenu"); //se declara la constante que es igual al primer elemento que corresponda con el ID declarado (btnMenu)
    const menu = document.querySelector(".menu"); //se declara la constante que es igual al primer elemento que corresponda con la clase indicada (menu)

    if (btnMenu && menu) { //Primero valida con la condicional si el boton btnMenu y la clase menu existan simultaneamente deben cumplirse ambas para proceder
        // Abrir y cerrar el menú
        btnMenu.addEventListener("click", () => { //posteriormente el sistema esta escuchando a la espera de la accion click por parte del usuario para realizar la accion
            menu.classList.toggle("abierto"); //lo que realiza esta seccion es agregar a la lista de clase del css el elemento abierto o retirarlo si esta ya lo tenia
            btnMenu.classList.toggle("activo"); //lo que realiza esta seccion es agregar a la lista de clase del css el elemento activo o retirarlo si esta ya lo tenia
        });

        // Cerrar el menú al seleccionar un enlace
        const enlaces = menu.querySelectorAll("a"); //En esta seccion se trabaja con la constante enlaces que toma todos los enlaces de la clase menu que correspondan
        enlaces.forEach(enlace => { //En esta seccion se utiliza el forEach que se utiliza para recorrer todo el arreglo indicado ya que ejecuta una accion por cada elemento presente
            enlace.addEventListener("click", () => { //En esta parte el sistema esta esperando que se realice click en cualquiera de los enlaces del arreglo
                menu.classList.remove("abierto"); //Si lo anterior se cumple el sistema fuerza a retirar de la clase el elemento abierto de la seccion del menu
                btnMenu.classList.remove("activo");//Si lo anterior se cumple el sistema fuerza a retirar de la clase el elemento activo de la seccion del btnMenu
            });
        });
    }


    // 2. ACORDEÓN - PREGUNTAS FRECUENTES
    const titulos = document.querySelectorAll(".accordion .titulo"); //En esta seccion se trabaja con la constante titulos que toma todos los elementos que concuerden con las clases
    titulos.forEach(titulo => {//En esta seccion se utiliza el forEach que se utiliza para recorrer todo el arreglo indicado ya que ejecuta una accion por cada elemento presente

        titulo.addEventListener("click", () => {//En esta parte el sistema esta esperando que se realice click en cualquiera de los titulos
            const item = titulo.closest(".item");//se declara la constante que es igual busca el elemento más cercano que coincida con el selector indicado, comenzando por el propio elemento y subiendo por sus antepasados
            if (!item) return; // Aca se usa la condicional si item no existe detiene el proceso para evitar errores

            // Comprobar si el elemento ya está abierto
            const estabaAbierto = item.classList.contains("activo"); //Comprueba si el elemento contiene una clase determinada. Si la tiene devuelve true; si no la tiene devuelve false.

            // Cerrar todos los elementos
            document.querySelectorAll(".accordion .item").forEach(otro => { //Si es asi se determinan que para las secciones accordion e item seleccione todo los que concuerden y sean recorridos con el forEach
                otro.classList.remove("activo"); //De esta forma retira el activo de toda la lista de clase correspondiente cierrando las respuestas 
            });

            // Abrir el seleccionado si estaba cerrado
            if (!estabaAbierto) { //En estaa condicional compara si no estaba abierto concretamente
                item.classList.add("activo"); //Si lo anterior es correcto en la seccion de la lista de clase que agregue activo a la clase
            }
        });
    });

    // 3. VALIDACIÓN DEL FORMULARIO

    const form = document.querySelector(".formulario"); //se declara la constante que es igual al primer elemento que corresponda con la clase indicada (formulario)

    if (form) {
        form.addEventListener("submit", (e) => {//En este caso la funcion espera la accion de enviar el formulario para comenzar sus validaciones, espera que el usario agregue la informa para posteriormente validar
            const nombre = form.querySelector('[name="nombre"]'); //En este se utiliza los elementos para capturar la informacion que se esta cargando en el sistema (nombre)
            const correo = form.querySelector('[name="correo"]'); //En este se utiliza los elementos para capturar la informacion que se esta cargando en el sistema (correo)
            const errores = []; //Aca se configura las constantes en este se utiliza los elementos para capturar la informacion para esta seccion queda en blanco

            // Validar nombre
            if (nombre && nombre.value.trim() === "") {//En esta primera parte se valida la condicional si nombre y nombre.value.trim son iguales a campo vacio ademas trim retira los espacios al inicio y al final
                errores.push("El nombre es obligatorio.");//si lo anterior es correcto cargue la informacion del campo en la constante vacia anterior
            }

            // Validar correo
            if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {//En esta segunda parte lo que se hace es comparar si correo no es igual a la estructura segun la prueba que seria texto seguido del arroba despues texto segido del . del dominio
                errores.push("El correo no es válido.");//si lo anterior es correcto cargue la informacion del campo en la constante vacia anterior
            }
            const mensajes = document.querySelector("#mensajes"); //se declara la constante para agregar la informacion de id mensajes 

            // Mostrar errores
            if (errores.length > 0) { //Esta funcion hace la comparacion si errores es mayor a cero ya que se convirte en un valor numerico
                e.preventDefault();//Si lo anterior se cumple que se utiliza el metodo preventdefault el cual detiene todo el proceso para evitar errores
                if (mensajes) { 
                    mensajes.textContent = errores.join(" ");// En este caso toma todos los errores que se almacenen los une separandolos por un espacio
                } else {
                    alert(errores.join("\n")); //Si no hay un mensaje en concreto para disparar se realiza el proceso con una ventana emergente juntando los errores por un salto de linea
                }
            } else if (mensajes) {
                mensajes.textContent = ""; //Eso se ejecuta si no tiene errores si no hay nada que no muestre nada
            }
        });
    }

    // 4. GENERAR TARJETAS DE SERVICIOS 

    const servicios = [
        {
            imagen: "img/S.ramos personalizados.jpg",
            titulo: "Ramos personalizados",
            descripcion: "Creamos ramos florales únicos, diseñados según tus gustos, preferencias y ocasiones especiales. Puedes elegir los colores, tipos de flores y presentación para sorprender a esa persona especial."
        },

        {
            imagen: "img/imagen decoracion3.jpg",
            titulo: "Decoración floral para eventos",
            descripcion: "Diseñamos ambientes llenos de belleza y elegancia para bodas, cumpleaños, aniversarios y celebraciones especiales. Creamos centros de mesa, arreglos decorativos y detalles florales que hacen de cada evento una experiencia inolvidable."
        },

        {
            imagen: "img/images.jpg",
            titulo: "Flores preservadas",
            descripcion: "Ofrecemos arreglos elaborados con flores preservadas que mantienen su belleza durante mucho más tiempo. Son ideales para regalos, decoración de interiores y recuerdos especiales que deseas conservar."
        },

        {
            imagen: "img/portada1.jpg",
            titulo: "Arreglos florales para ocasiones especiales",
            descripcion: "Elaboramos composiciones florales para cumpleaños, aniversarios, graduaciones, San Valentín y otras fechas importantes. Cada arreglo se prepara con dedicación para transmitir emociones y crear momentos memorables."
        },

        {
            imagen: "img/S.arreglos de bodas.jpg",
            titulo: "Arreglos florales para bodas",
            descripcion: "Creamos diseños florales para acompañar uno de los días más importantes. Ofrecemos ramos de novia, decoración de ceremonias, centros de mesa y detalles florales personalizados según el estilo de cada celebración."
        },

        {
            imagen: "img/regalos.jpg",
            titulo: "Regalos florales",
            descripcion: "Diseñamos detalles especiales que combinan flores con presentaciones creativas para sorprender a familiares, amigos o parejas. Cada propuesta busca convertir un regalo en un recuerdo significativo."
        }

    ];
    // FUNCIÓN PARA GENERAR LAS TARJETAS

    function pintarCards(lista) {

        const contenedor = document.querySelector("#contenedorServicios");

        if (!contenedor) return; //comprueba que exista el contenedor con esos datos

        contenedor.innerHTML = ""; //antes de procesarlo estamos limpiando el contenedor anterior

        lista.forEach(servicio => {//le damos la indicancion de que recorra el listado ejecutandolo por la cantidad de partes que poseea    

            const tarjeta = document.createElement("article"); //con esta seccion permite crear elementos una estructura equivalente a article

            tarjeta.classList.add("tarjeta"); //con esta seccion le agregamos la clase tarjeta para que el documento pueda ser reconocido por el CSS y le aplique el estilo

            tarjeta.innerHTML = `
                <img src="${servicio.imagen}" alt="${servicio.titulo}"> 

                <h3>${servicio.titulo}</h3>

                <p>${servicio.descripcion}</p>

                <a href="contacto.php" class="boton">
                    Consultar
                </a>
            `;// en esta seeccion se agrega la informacion para generar la tarjeta correspondientemente como tenemos un foreach recorre el arreglo 6 veces

            contenedor.appendChild(tarjeta); //esta funcion agrega la tarjeta al HTML porque appendchild agrega la informacion como un hijo

        });

    }

    // EJECUTAR LA FUNCIÓN

    pintarCards(servicios); //esta ultima imprime al informacion generada

});
