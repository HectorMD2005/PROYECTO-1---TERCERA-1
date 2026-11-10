<?php
$tituloPagina = "CONTACTO | BLOOM STUDIO";
include "header.php";
?>

<main>

        <!-- PORTADA -->
        <section class="portada">

            <div class="texto-portada">

                <h1>ESTAMOS PARA TI.</h1>

                <p>
                    ¿Tienes una idea especial?
                    Nos encantaría ayudarte a convertirla
                    en una hermosa creación floral.
                </p>

                <a href="#formulario" class="boton">
                    ESCRÍBENOS →
                </a>

            </div>

        </section>


        <!-- INFORMACIÓN DE CONTACTO -->
        <section class="contenedor-secundario">

            <h2>Conoce nuestros medios de contacto</h2>

            <div class="detalle">

                <article>

                    <h3>Teléfono</h3>

                    <p>
                        Puedes comunicarte con nosotros
                        para realizar consultas sobre
                        nuestros productos y servicios.
                    </p>

                    <p>
                        <strong>2223-2222</strong>
                    </p>

                </article>


                <article>

                    <h3>Correo electrónico</h3>

                    <p>
                        Escríbenos para solicitar información,
                        consultar disponibilidad o compartir
                        tus ideas para un arreglo personalizado.
                    </p>

                    <p>
                        <strong>info@bloomstudiocr.com</strong>
                    </p>

                </article>


                <article>

                    <h3>Redes sociales</h3>

                    <p>
                        Síguenos para conocer nuestras
                        creaciones, novedades, promociones
                        y nuevos diseños florales.
                    </p>

                    <p>
                        <strong>Facebook e Instagram</strong>
                    </p>

                </article>

            </div>

        </section>


        <!-- FORMULARIO DE CONTACTO -->
        <section class="preguntas contenedor" id="formulario">

            <h2>Envíanos un mensaje</h2>

            <p>
                Completa el siguiente formulario y cuéntanos
                qué tipo de arreglo o servicio estás buscando.
            </p>

            <form class="formulario">

                <label for="nombre">
                    Nombre completo
                </label>

                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    required
                >


                <label for="correo">
                    Correo electrónico
                </label>

                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="ejemplo@correo.com"
                    required>
                </select>


                <label for="mensaje">
                    Cuéntanos qué necesitas
                </label>

                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="Escribe tu consulta..."
                    required
                ></textarea>


                <button type="submit" class="boton">
                    Enviar mensaje
                </button>

            </form>

        </section>


        <!-- INVITACIÓN -->
        <section class="contenedor-cuarto">

            <h2>Hagamos florecer tus ideas.</h2>

            <p>
                En BLOOM STUDIO estaremos encantados
                de acompañarte en la creación de arreglos
                florales únicos para tus momentos especiales.
                ¡Será un placer atenderte!
            </p>

            <div class="contenedor-boton">

                <a href="servicios.html" class="boton">
                    Ver nuestros servicios
                </a>

            </div>

        </section>

</main>

<?php include "footer.php"; ?>