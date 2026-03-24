/**
 * @param { any } objeto
 * @returns {import("./PASATIEMPO.js").PASATIEMPO}
 */
export function validaPasatiempo(objeto) {

 if (typeof objeto.PAS_ELIMINADO !== "number" || isNaN(objeto.PAS_ELIMINADO))
  throw new Error("El campo eliminado debe ser número.")

 if (typeof objeto.PAS_ID !== "string" || objeto.PAS_ID === "")
  throw new Error("El id debe ser texto que no esté en blanco.")

 if (
  typeof objeto.PAS_MODIFICACION !== "number" || isNaN(objeto.PAS_MODIFICACION)
 )
  throw new Error("El campo modificacion debe ser número.")

 if (typeof objeto.PAS_NOMBRE !== "string" || objeto.PAS_ID === "")
  throw new Error("El nombre debe ser texto que no esté en blanco.")

 return objeto

}