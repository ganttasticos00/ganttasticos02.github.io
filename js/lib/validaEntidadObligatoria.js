/**
 * @template T
 * @param {string} nombre
 * @param {T | undefined} entidad
 */
export function validaEntidadObligatoria(nombre, entidad) {

 if (entidad === undefined)
  throw new Error(`Registro de ${nombre} no encontrado.`)

 return entidad
}
