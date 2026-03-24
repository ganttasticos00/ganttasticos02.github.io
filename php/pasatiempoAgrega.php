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
function pasatiempoAgrega(array $modelo)
{
 $bd = Bd::pdo();
 $stmt = $bd->prepare(
  "INSERT INTO PASATIEMPO (
    PAS_ID, PAS_NOMBRE, PAS_MODIFICACION, PAS_ELIMINADO
   ) values (
    :PAS_ID, :PAS_NOMBRE, :PAS_MODIFICACION, :PAS_ELIMINADO
   )"
 );
 $stmt->execute([
  ":PAS_ID" => $modelo[PAS_ID],
  ":PAS_NOMBRE" => $modelo[PAS_NOMBRE],
  ":PAS_MODIFICACION" => $modelo[PAS_MODIFICACION],
  ":PAS_ELIMINADO" => $modelo[PAS_ELIMINADO],
 ]);
}
