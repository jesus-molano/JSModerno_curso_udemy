// Fetch API desde un JSON (Array)

const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");

cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

const url = "data/empleados.json";

function obtenerDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarHTML(datos));
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");
  let html = "";

  empleados.forEach((empleado) => {
    const { nombre, id, empresa, trabajo } = empleado;
    html += `
      <p>Empleado: ${nombre}</p>
      <p>ID: ${id}</p>
      <p>Empresa: ${empresa}</p>
      <p>Trabajo: ${trabajo}</p>
    `;
    contenido.innerHTML = html;
  });
}
