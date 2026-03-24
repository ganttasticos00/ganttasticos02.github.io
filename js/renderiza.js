import { htmlentities } from "./lib/htmlentities.js"
import { muestraObjeto } from "./lib/muestraObjeto.js"

/**
 * @param {import("./PASATIEMPO.js").PASATIEMPO[]} pasatiempos
 */
export function renderiza(pasatiempos) {
 let render = ""
 for (const modelo of pasatiempos) {
  const nombre = htmlentities(modelo.PAS_NOMBRE)
  const searchParams = new URLSearchParams([["id", modelo.PAS_ID]])
  const params = htmlentities(searchParams.toString())
  render += /* html */
   `<li>
     <p><a href="modifica.html?${params}">${nombre}</a></p>
    </li>`
 }
 muestraObjeto(
  document,
  {
   lista: { innerHTML: render }
  }
 )
}
