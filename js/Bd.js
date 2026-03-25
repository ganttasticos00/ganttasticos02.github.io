export const ALMACEN_PASATIEMPO = "PASATIEMPO"
export const PAS_ID = "PAS_ID"
export const INDICE_NOMBRE = "INDICE_NOMBRE"
export const PAS_NOMBRE = "PAS_NOMBRE"
const BD_NOMBRE = "sincro"
const BD_VERSION = 2

/** @type { Promise<IDBDatabase> } */
export const Bd = new Promise((resolve, reject) => {

 /* Se solicita abrir la base de datos, indicando nombre y
  * número de versión. */
 const solicitud = indexedDB.open(BD_NOMBRE, BD_VERSION)

 // Si se presenta un error, rechaza la promesa.
 solicitud.onerror = () => reject(solicitud.error)

 // Si se abre con éxito, devuelve una conexión a la base de datos.
 solicitud.onsuccess = () => {
  const db = solicitud.result

  // 🔥 MUY IMPORTANTE
  db.onversionchange = () => {
    console.warn("DB cerrada por cambio de versión")
    db.close()
  }

  resolve(db)
}
 // Si es necesario, se inicia una transacción para cambio de versión.
 solicitud.onupgradeneeded = () => {

  const bd = solicitud.result

  // Como hay cambio de versión, borra el almacén si es que existe.
  if (bd.objectStoreNames.contains(ALMACEN_PASATIEMPO)) {
   bd.deleteObjectStore(ALMACEN_PASATIEMPO)
  }

  // Crea el almacén "PASATIEMPO" con el campo llave "PAS_ID".
  const almacenPasatiempo =
   bd.createObjectStore(ALMACEN_PASATIEMPO, { keyPath: PAS_ID })

  // Crea un índice ordenado por el campo PAS_NOMBRE que no acepta duplicados.
  almacenPasatiempo.createIndex(INDICE_NOMBRE, PAS_NOMBRE)
 }

})