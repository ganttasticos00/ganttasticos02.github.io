import { ALMACEN_PASATIEMPO, Bd } from "./Bd.js"
import { bdEjecuta } from "./lib/bdEjecuta.js"
import { pasatiempoBusca } from "./pasatiempoBusca.js"

/**
 * @param { string } id
 */
export async function pasatiempoElimina(id) {

 if (confirm('Confirma la eliminación')) {

  const modelo = await pasatiempoBusca(id)

  if (modelo !== undefined) {

   modelo.PAS_MODIFICACION = Date.now()
   modelo.PAS_ELIMINADO = 1
   await bdEjecuta(Bd, [ALMACEN_PASATIEMPO], transaccion => {
    const almacenPasatiempo = transaccion.objectStore(ALMACEN_PASATIEMPO)
    almacenPasatiempo.put(modelo)
   })

  }

  location.href = "index.html"

 }

}