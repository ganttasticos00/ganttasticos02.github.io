/**
 * @param {FormData} formData
 * @param {string} parametro
 */
export function recibeTexto(formData, parametro) {
 const valor = formData.get(parametro)
 if (valor !== null && typeof valor !== "string")
  throw new Error(`El valor de ${parametro} debe ser texto.`)
 return valor === null ? undefined : valor
}
