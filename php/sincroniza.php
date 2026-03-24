<?php

// 🚨 Validar método HTTP
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode([
        "error" => "Método no permitido"
    ]);
    exit;
}

// 🔹 Librerías
require_once __DIR__ . "/lib/manejaErrores.php";
require_once __DIR__ . "/lib/recibeJson.php";
require_once __DIR__ . "/lib/devuelveJson.php";
require_once __DIR__ . "/TABLA_PASATIEMPO.php";
require_once __DIR__ . "/validaPasatiempo.php";
require_once __DIR__ . "/pasatiempoAgrega.php";
require_once __DIR__ . "/pasatiempoBusca.php";
require_once __DIR__ . "/pasatiempoConsultaNoEliminados.php";
require_once __DIR__ . "/pasatiempoModifica.php";

// 🔹 Recibir datos del cliente
$lista = recibeJson();

if (!is_array($lista)) {
    $lista = [];
}

// 🔹 Sincronización
foreach ($lista as $modelo) {

    $modeloEnElCliente = validaPasatiempo($modelo);
    $modeloEnElServidor = pasatiempoBusca($modeloEnElCliente[PAS_ID]);

    if ($modeloEnElServidor === false) {

        if ($modeloEnElCliente[PAS_ELIMINADO] === 0) {
            pasatiempoAgrega($modeloEnElCliente);
        }

    } elseif (
        $modeloEnElServidor[PAS_ELIMINADO] === 0 &&
        $modeloEnElCliente[PAS_ELIMINADO] === 1
    ) {

        pasatiempoModifica($modeloEnElCliente);

    } else if (
        $modeloEnElCliente[PAS_ELIMINADO] === 0 &&
        $modeloEnElServidor[PAS_ELIMINADO] === 0
    ) {

        if (
            $modeloEnElCliente[PAS_MODIFICACION] >
            $modeloEnElServidor[PAS_MODIFICACION]
        ) {
            pasatiempoModifica($modeloEnElCliente);
        }
    }
}

// 🔹 Respuesta final
$lista = pasatiempoConsultaNoEliminados();
devuelveJson($lista);