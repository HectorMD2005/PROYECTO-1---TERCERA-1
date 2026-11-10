
<?php

// Comprobar que el formulario se envió mediante POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") { //esta seccion revisa y valida que la funcion globar server reciba un metodo enviao = a post que es un formulario
    header("Location: contacto.php"); //si la condicion se cumple indicando que es diferente que envie a la pagina de contacto 
    exit; // para despues cerrar el programa evitando errores de ejecucion
}

// Recibir los datos del formulario
$nombre = trim($_POST["nombre"] ?? ""); //Con este proceso se reciben los datos del formulario por lo tanto tambien en conjunto con trim retira espacios al inicio y final
$correo = trim($_POST["correo"] ?? ""); //Con este proceso se reciben los datos del formulario por lo tanto tambien en conjunto con trim retira espacios al inicio y final
$mensaje = trim($_POST["mensaje"] ?? ""); //Con este proceso se reciben los datos del formulario por lo tanto tambien en conjunto con trim retira espacios al inicio y final

// Validar los campos
$errores = []; //se crea la variable errores con asignacion en blanco para que almanece la informacion posterior

if ($nombre === "") { //Con esta seccion lo que se compara que si nombre esta en blanco
    $errores[] = "El nombre es obligatorio."; //si la condicon anterior es correcta que en la variable errores se ingrese el texto
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {//Con esta seccion lo que se compara que si correo esta en blanco segun lo requerido para el formato del correo
    $errores[] = "El correo electrónico no es válido.";//si la condicon anterior es correcta que en la variable errores se ingrese el texto
}

if ($mensaje === "") {//Con esta seccion lo que se compara que si mensaje esta en blanco
    $errores[] = "El mensaje es obligatorio.";//si la condicon anterior es correcta que en la variable errores se ingrese el texto
}

// Si existen errores, mostrarlos
if (!empty($errores)) { // en este caso la condicional valida con empty si errores es diferente de vacio si esto se cumple que comience a ejecutarlo

    $tituloPagina = "ERROR | BLOOM STUDIO"; //se declara la variable titulo para agregarle el nombre del error
    include "header.php"; //Que este registro lo asigne en el header
    ?>

    <main class="contenedor"> <!-- Aca se crea nuevamente el proceso de la pestana que se va a mostrar -->
        <section class="preguntas">

            <h1>REVISA TUS DATOS</h1> <!-- titulo de la pagina -->

            <?php foreach ($errores as $error): ?> <!-- Aca con el foreach se recorre todo el arreglo de errores para validar la informacion a mostrar -->
                <p>
                    <?php echo htmlspecialchars($error); ?> <!-- Aca se muestra con echo y se convierte toda la informacion de error a htmls caracteres para que se interprete correctamente -->
                </p>
            <?php endforeach; ?> <!-- se finaliza la informacion a mostrar -->

            <a href="contacto.php#formulario" class="boton"> <!-- aca se finaliza el proceso de la pestana que se va mostar -->
                VOLVER AL FORMULARIO
            </a>
        </section>
    </main>

    <?php
    include "footer.php";
    exit; //funciona para finalizar el proceso correspondiente
}

// Si todo está correcto, guardar el nombre temporalmente
session_start(); //para poder guardar el nombre debemos iniciar las sesiones
$_SESSION["nombre"] = $nombre; //en este caso $_SESSION Seria un contenedor glogal por lo tanto se puede consultar en cualquier pagina y se le asigna que la informacion sea el nombre

// Redirigir a la página de agradecimiento
header("Location: gracias.php");
exit; //funciona para finalizar el proceso correspondiente

?>
