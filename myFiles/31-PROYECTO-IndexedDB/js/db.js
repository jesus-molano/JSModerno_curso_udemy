import { ui } from "./functions.js";

export let DB;

export function crearDB() {
  // Crear la base de datos en version 1.0
  const crearDB = window.indexedDB.open("citas", 1);

  // Si hay error
  crearDB.onerror = function () {
    console.log("Hubo un error");
  };
  // Si sale bien
  crearDB.onsuccess = function () {
    console.log("Base de datos creada");
    DB = crearDB.result;

    // Mostrar citas al cargar (Pero IndexedDB ya esta listo)
    ui.imprimirCitas();
  };

  // Definir el schema
  crearDB.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("citas", {
      keyPath: "id",
      autoIncrement: true,
    });

    // Definir las columnas
    objectStore.createIndex("mascota", "mascota", { unique: false });
    objectStore.createIndex("propietario", "propietario", { unique: false });
    objectStore.createIndex("telefono", "telefono", { unique: false });
    objectStore.createIndex("fecha", "fecha", { unique: false });
    objectStore.createIndex("hora", "hora", { unique: false });
    objectStore.createIndex("sintomas", "sintomas", { unique: false });
    objectStore.createIndex("id", "id", { unique: true });

    console.log("DataBase creada y lista");
  };
}
