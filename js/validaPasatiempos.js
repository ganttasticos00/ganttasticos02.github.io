import { validaPasatiempo } from "./validaPasatiempo.js"

/**
 * @param { any } objetos
 * @returns {import("./PASATIEMPO.js").PASATIEMPO[]}
 */
export function validaPasatiempos(objetos) {
 if (!Array.isArray(objetos))
  throw new Error("no se recibió un arreglo.")
 /**
  * @type {import("./PASATIEMPO.js").PASATIEMPO[]}
  */
 const arreglo = []
 for (const objeto of objetos) {
  arreglo.push(validaPasatiempo(objeto))
 }
 return arreglo
}