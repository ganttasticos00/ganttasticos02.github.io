import { htmlentities } from "./lib/htmlentities.js"
import { muestraObjeto } from "./lib/muestraObjeto.js"

/**
 * @param {import("./PASATIEMPO.js").PASATIEMPO[]} pasatiempos
 */
export function renderiza(pasatiempos) {
 let render = ""

 for (const modelo of pasatiempos) {

  const nombre = htmlentities(modelo.PAS_NOMBRE)
  const deporte = htmlentities(modelo.PAS_DEPORTE ?? "")
  const equipo = htmlentities(modelo.PAS_EQUIPO ?? "")

  const searchParams = new URLSearchParams([["id", modelo.PAS_ID]])
  const params = htmlentities(searchParams.toString())

  render += /* html */ `
   <li>
     <p>
       <a href="modifica.html?${params}">
         ${nombre}
       </a>
     </p>

     <small style="display:block; opacity:0.7; font-size:0.85em;">
       ${deporte} / ${equipo}
     </small>
   </li>
  `
 }

 muestraObjeto(
  document,
  {
   lista: { innerHTML: render }
  }
 )
}