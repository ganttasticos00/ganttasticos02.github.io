import { bdEjecuta } from "./lib/bdEjecuta.js"
import { ALMACEN_PASATIEMPO, Bd } from "./Bd.js"

/**
 * Borra el contenido del almacén PASATIEMPO y guarda nuevospasatiempos.
 * @param {import("./PASATIEMPO.js").PASATIEMPO[]} nuevosPasatiempos
 */
export async function pasatiemposReemplaza(nuevosPasatiempos) {
 return bdEjecuta(Bd, [ALMACEN_PASATIEMPO], transaccion => {
  const almacenPasatiempo = transaccion.objectStore(ALMACEN_PASATIEMPO)
  almacenPasatiempo.clear()
  for (const objeto of nuevosPasatiempos) {
   almacenPasatiempo.add(objeto)
  }
 })
}