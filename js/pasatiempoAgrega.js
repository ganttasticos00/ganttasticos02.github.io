import { ALMACEN_PASATIEMPO, Bd } from "./Bd.js"
import { bdEjecuta } from "./lib/bdEjecuta.js"
import { creaIdCliente } from "./lib/creaIdCliente.js"
import { recibeTextoObligatorio } from "./lib/recibeTextoObligatorio.js"


/**
 * @param {SubmitEvent} event
 */
export async function pasatiempoAgrega(event) {

 event.preventDefault()
 const target = event.target

 if (!(target instanceof HTMLFormElement))
  throw new Error("target no es de tipo form.")

 const formData = new FormData(target)

 const modelo = {
  PAS_ID: creaIdCliente(Date.now().toString()), // Genera id único en internet.
  PAS_NOMBRE: recibeTextoObligatorio(formData, "nombre"),
  PAS_MODIFICACION: Date.now(),
  PAS_ELIMINADO: 0,
 }

 await bdEjecuta(Bd, [ALMACEN_PASATIEMPO], transaccion => {
  const almacenPasatiempo = transaccion.objectStore(ALMACEN_PASATIEMPO)
  almacenPasatiempo.add(modelo)
 })

 location.href = "index.html"

}