
<?php
session_start();

$nombre = $_SESSION["nombre"] ?? "visitante";

unset($_SESSION["nombre"]);

$tituloPagina = "MENSAJE RECIBIDO | BLOOM STUDIO";

include "header.php";
?>

<main class="contenedor">

    <section class="preguntas">

        <h1>¡GRACIAS POR CONTACTARNOS!</h1>

        <p>
            Hola <?php echo htmlspecialchars($nombre); ?>.
        </p>

        <p>
            Tu formulario se ha procesado correctamente.
            Gracias por comunicarte con BLOOM STUDIO.
        </p>

        <a href="index.php" class="boton">
            VOLVER AL INICIO
        </a>

    </section>

</main>

<?php include "footer.php"; ?>
