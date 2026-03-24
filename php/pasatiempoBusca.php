<?php

require_once __DIR__ . "/Bd.php";
require_once __DIR__ . "/TABLA_PASATIEMPO.php";

/**
 * @return false | array{
 *   PAS_ID: string,
 *   PAS_NOMBRE: string,
 *   PAS_MODIFICACION: int,
 *   PAS_ELIMINADO: int
 *  }
 */
function pasatiempoBusca(string $id): false|array
{
 $bd = Bd::pdo();
 $stmt = $bd->prepare("SELECT * FROM PASATIEMPO WHERE PAS_ID = :PAS_ID");
 $stmt->execute([":PAS_ID" => $id]);
 $modelo = $stmt->fetch(PDO::FETCH_ASSOC);
 return $modelo;
}
