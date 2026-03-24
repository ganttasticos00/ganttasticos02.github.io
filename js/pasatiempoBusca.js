import { bdConsulta } from "./lib/bdConsulta.js"
import { validaPasatiempo } from "./validaPasatiempo.js"
import { ALMACEN_PASATIEMPO, Bd } from "./Bd.js"

/**
 * @param {string} id
 */
export async function pasatiempoBusca(id) {

 return bdConsulta(Bd, [ALMACEN_PASATIEMPO],
  /**
   * @param {(resultado: import("./PASATIEMPO.js").PASATIEMPO|undefined)
   *                                                            => any} resolve 
   */
  (transaccion, resolve) => {

   /* Pide el primer objeto de ALMACEN_PASATIEMPO que tenga como llave
    * primaria el valor del parámetro id. */
   const consulta = transaccion.objectStore(ALMACEN_PASATIEMPO).get(id)

   // onsuccess se invoca solo una vez, devolviendo el objeto solicitado.
   consulta.onsuccess = () => {
    /* Se recupera el objeto solicitado usando
     *  consulta.result
     * Si el objeto no se encuentra se recupera undefined. */
    const objeto = consulta.result
    if (objeto !== undefined) {
     const modelo = validaPasatiempo(objeto)
     if (modelo.PAS_ELIMINADO === 0) {
      resolve(modelo)
      return
     }
    }
    resolve(undefined)

   }

  })

}