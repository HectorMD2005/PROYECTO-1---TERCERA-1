
<?php
$tituloPagina = "SERVICIOS | BLOOM STUDIO";
include "header.php";
?>

<main>

    <!-- PORTADA -->
    <section class="portada">

        <div class="texto-portada">

            <h1>NUESTROS SERVICIOS.</h1>

            <p>
                Creamos arreglos y experiencias florales
                para cada ocasión especial.
            </p>

        </div>

    </section>


    <!-- SECCIÓN DE SERVICIOS -->
    <section class="contenido servicios">

        <div class="contenedor-cards">

            <h2>Descubre nuestros servicios</h2>

            <p>Diseños creados especialmente para ti.</p>

            <!-- CONTENEDOR DONDE JAVASCRIPT GENERA LAS CARDS -->
            <div class="cards" id="contenedorServicios">

                <!-- Las tarjetas se generan desde main.js -->

            </div>

        </div>

    </section>

</main>

<?php include "footer.php"; ?>
