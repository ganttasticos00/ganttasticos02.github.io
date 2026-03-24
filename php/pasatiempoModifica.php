<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_PASATIEMPO.php";

/**
 * @param array{
 *   PAS_ID: string,
 *   PAS_NOMBRE: string,
 *   PAS_MODIFICACION: int,
 *   PAS_ELIMINADO: int
 *  } $modelo
 */
function pasatiempoModifica(array $modelo)
{
 $bd = Bd::pdo();
 $stmt = $bd->prepare(
  "UPDATE PASATIEMPO
   SET
    PAS_NOMBRE = :PAS_NOMBRE,
    PAS_MODIFICACION = :PAS_MODIFICACION,
    PAS_ELIMINADO = :PAS_ELIMINADO
   WHERE
    PAS_ID = :PAS_ID"
 );
 $stmt->execute([
  ":PAS_ID" => $modelo[PAS_ID],
  ":PAS_NOMBRE" => $modelo[PAS_NOMBRE],
  ":PAS_MODIFICACION" => $modelo[PAS_MODIFICACION],
  ":PAS_ELIMINADO" => $modelo[PAS_ELIMINADO],
 ]);
}
