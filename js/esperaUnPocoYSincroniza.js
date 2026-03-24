import { sincroniza } from "./sincroniza.js"

/**
 * Cada 20 segundos (2000 milisegundos) después de la última
 * sincronización, los datos se envían al servidor para volver a
 * sincronizarse con los datos del servidor.
 */
const MILISEGUNDOS_PARA_VOLVER_A_SINCRONIZAR = 20000

export function esperaUnPocoYSincroniza() {
 setTimeout(() => sincroniza(), MILISEGUNDOS_PARA_VOLVER_A_SINCRONIZAR)
}