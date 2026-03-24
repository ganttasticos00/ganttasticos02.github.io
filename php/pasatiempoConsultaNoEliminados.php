<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_PASATIEMPO.php";

/**
 * @return array{
 *   PAS_ID: string,
 *   PAS_NOMBRE: string,
 *   PAS_MODIFICACION: int,
 *   PAS_ELIMINADO: int
 *  }[]
 */
function pasatiempoConsultaNoEliminados()
{
 $bd = Bd::pdo();
$stmt = $bd->query(
 "SELECT * FROM PASATIEMPO WHERE PAS_ELIMINADO = 0 ORDER BY PAS_NOMBRE"
);
$lista = $stmt->fetchAll(PDO::FETCH_ASSOC);
return $lista;
}
