<?php

require_once __DIR__ . "/lib/BAD_REQUEST.php";
require_once __DIR__ . "/lib/ProblemDetailsException.php";
require_once __DIR__ . "/TABLA_PASATIEMPO.php";

function validaPasatiempo($objeto)
{
 if (!isset($objeto->PAS_ELIMINADO) || !is_int($objeto->PAS_ELIMINADO))
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El campo eliminado debe ser entero.",
   "type" => "/errors/eliminadoincorrecto.html",
  ]);

 if (
  !isset($objeto->PAS_ID)
  || !is_string($objeto->PAS_ID)
  || $objeto->PAS_ID === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El id debe ser texto que no esté en blanco.",
   "type" => "/errors/idincorrecto.html",
  ]);

 if (!isset($objeto->PAS_MODIFICACION) || !is_int($objeto->PAS_MODIFICACION))
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "La modificacion debe ser número.",
   "type" => "/errors/modificacionincorrecta.html",
  ]);

 if (
  !isset($objeto->PAS_NOMBRE)
  || !is_string($objeto->PAS_NOMBRE)
  || $objeto->PAS_NOMBRE === ""
 )
  throw new ProblemDetailsException([
   "status" => BAD_REQUEST,
   "title" => "El nombre debe ser texto que no esté en blanco.",
   "type" => "/errors/nombreincorrecto.html",
  ]);

 return [
  PAS_ELIMINADO => $objeto->PAS_ELIMINADO,
  PAS_ID => $objeto->PAS_ID,
  PAS_NOMBRE => $objeto->PAS_NOMBRE,
  PAS_MODIFICACION => $objeto->PAS_MODIFICACION,

  // 🔥 ESTO ES LO QUE FALTABA
  PAS_DEPORTE => $objeto->PAS_DEPORTE ?? "",
  PAS_EQUIPO => $objeto->PAS_EQUIPO ?? "",
 ];
}