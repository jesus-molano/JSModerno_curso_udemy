let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();
  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  // Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  // Si hay un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la BD");
  };

  // Si se creo bien
  crmDB.onsuccess = function () {
    console.log("Base de datos creada");
    DB = crmDB.result;
  };

  // Configuracion de la BD
  crmDB.onupgradeneeded = function (event) {
    // Base de datos
    const db = event.target.result;
    // ObjectStore
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    // Definir las columnas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });
    console.log("Columnas Creadas!");
  };
}

function crearCliente() {
  // Crear un nuevo registro
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transaccion completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transaccion");
  };

  const objectStore = transaction.objectStore("crm");

  const nuevoCliente = {
    telefono: 676485672,
    nombre: "Jesus",
    email: "jessumolano@gmail.com",
  };

  // con ADD Agregamos el objeto nuevo cliente a la base de datos
  const peticion = objectStore.add(nuevoCliente);
  // const peticion = objectStore.put(nuevoCliente);  // Actualizar el registro
  // const peticion = objectStore.delete(nuevoCliente); Borrar el registro

  console.log(peticion);
}
