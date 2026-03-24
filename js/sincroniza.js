import { pasatiempoConsultaTodos } from "./pasatiempoConsultaTodos.js"
import { pasatiemposReemplaza } from "./pasatiemposReemplaza.js"
import { esperaUnPocoYSincroniza } from "./esperaUnPocoYSincroniza.js"
import { consume } from "./lib/consume.js"
import { enviaJsonRecibeJson } from "./lib/enviaJsonRecibeJson.js"
import { muestraError } from "./lib/muestraError.js"
import { renderiza } from "./renderiza.js"
import { validaPasatiempos } from "./validaPasatiempos.js"

export async function sincroniza() {

 try {
    
  if (navigator.onLine) {
   const todos = await pasatiempoConsultaTodos()
   const respuesta =
    await consume(enviaJsonRecibeJson("php/sincroniza.php", todos))
   const pasatiempos = validaPasatiempos(await respuesta.json())
   await pasatiemposReemplaza(pasatiempos)
   renderiza(pasatiempos)
  }

 } catch (error) {

  muestraError(error)

 }

 esperaUnPocoYSincroniza()

}