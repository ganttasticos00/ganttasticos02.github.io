import { recibeTexto } from "./recibeTexto.js"

/**
 * @param {FormData} formData
 * @param {string} parametro
 */
export function recibeTextoObligatorio(formData, parametro) {
 const texto = recibeTexto(formData, parametro)
 if (texto === undefined) throw new Error(`Falta el valor de ${parametro}.`)
 const trimTexto = texto.trim()
 if (trimTexto === "") throw new Error(`Campo ${parametro} en blanco.`)
 return trimTexto
}
