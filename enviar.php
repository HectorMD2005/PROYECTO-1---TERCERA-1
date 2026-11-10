
<?php

// Comprobar que el formulario se envió mediante POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contacto.php");
    exit;
}

// Recibir los datos del formulario
$nombre = trim($_POST["nombre"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");

// Validar los campos
$errores = [];

if ($nombre === "") {
    $errores[] = "El nombre es obligatorio.";
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $errores[] = "El correo electrónico no es válido.";
}

if ($mensaje === "") {
    $errores[] = "El mensaje es obligatorio.";
}

// Si existen errores, mostrarlos
if (!empty($errores)) {

    $tituloPagina = "ERROR | BLOOM STUDIO";
    include "header.php";
    ?>

    <main class="contenedor">
        <section class="preguntas">

            <h1>REVISA TUS DATOS</h1>

            <?php foreach ($errores as $error): ?>
                <p>
                    <?php echo htmlspecialchars($error); ?>
                </p>
            <?php endforeach; ?>

            <a href="contacto.php#formulario" class="boton">
                VOLVER AL FORMULARIO
            </a>

        </section>
    </main>

    <?php
    include "footer.php";
    exit;
}

// Si todo está correcto, guardar el nombre temporalmente
session_start();

$_SESSION["nombre"] = $nombre;

// Redirigir a la página de agradecimiento
header("Location: gracias.php");
exit;

?>
