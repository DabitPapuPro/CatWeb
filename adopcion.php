<?php
// Conexión a la nueva base de datos
$host = "localhost";
$user = "root";
$password = "";
$dbname = "adopcion_gatos";

$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Datos del gato
    $nombre_gato = $_POST["nombre_gato"];
    $edad_gato = $_POST["edad_gato"];
    $descripcion_gato = $_POST["descripcion_gato"];

    // Datos del solicitante
    $nombre_solicitante = $_POST["nombre_solicitante"];
    $telefono_solicitante = $_POST["telefono_solicitante"];
    $email_solicitante = $_POST["email_solicitante"];

    // Insertar datos en la base
    $sql = "INSERT INTO solicitudes_gatos (nombre_gato, edad_gato, descripcion_gato, nombre_solicitante, telefono_solicitante, email_solicitante) 
            VALUES ('$nombre_gato', $edad_gato, '$descripcion_gato', '$nombre_solicitante', '$telefono_solicitante', '$email_solicitante')";

    if ($conn->query($sql) === TRUE) {
        echo "Solicitud registrada con éxito.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>
