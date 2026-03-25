import { ALMACEN_PASATIEMPO, Bd } from "./Bd.js"
import { bdEjecuta } from "./lib/bdEjecuta.js"
import { recibeTextoObligatorio } from "./lib/recibeTextoObligatorio.js"
import { pasatiempoBusca } from "./pasatiempoBusca.js"

/**
 * @param {SubmitEvent} event
 * @param {string} id
 */
export async function pasatiempoModifica(event, id) {

 event.preventDefault()
 const target = event.target

 if (!(target instanceof HTMLFormElement))
  throw new Error("target no es de tipo form.")

 const formData = new FormData(target)

 const nombre = recibeTextoObligatorio(formData, "nombre")
 const deporte = recibeTextoObligatorio(formData, "deporte")
 const equipo = recibeTextoObligatorio(formData, "equipo")

 const anterior = await pasatiempoBusca(id)

 if (anterior !== undefined) {

  
  const actualizado = {
   ...anterior,
   PAS_NOMBRE: nombre,
   PAS_DEPORTE: deporte,
   PAS_EQUIPO: equipo,
   PAS_MODIFICACION: Date.now()
  }

  await bdEjecuta(Bd, [ALMACEN_PASATIEMPO], transaccion => {
   const almacenPasatiempo = transaccion.objectStore(ALMACEN_PASATIEMPO)
   almacenPasatiempo.put(actualizado)
  })


  setTimeout(() => {
   location.href = "index.html"
  }, 150)

 }

}