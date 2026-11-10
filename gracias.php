
<?php
session_start(); //se utiliza para iniciar o cargar una sesion anterior

$nombre = $_SESSION["nombre"] ?? "visitante"; //en este caso se recupera el nombre del formulario anterior
unset($_SESSION["nombre"]); //se utiliza para eliminar el nombre de la sesion 

$tituloPagina = "MENSAJE RECIBIDO | BLOOM STUDIO"; //Se declara la variable $tituloPagina y se le asigna el título que identificará esta página.

include "header.php";
?>

<main class="contenedor">

    <section class="preguntas">

        <h1>¡GRACIAS POR CONTACTARNOS!</h1>

        <p>
            Hola <?php echo htmlspecialchars($nombre); ?>. <!-- Con echo se muestra lo almacenado en la variable anterior de nombre y se convierte a caraceter de htmls-->
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
