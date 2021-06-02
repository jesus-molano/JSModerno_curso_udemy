// Fetch API desde un JSON (Objeto)
const cargarJSONBtn = document.querySelector("#cargarJSON");

cargarJSONBtn.addEventListener("click", obtenerDatos);

const url = "data/empleado.json";

function obtenerDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarHTML(datos));
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");
  contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
  `;
}
