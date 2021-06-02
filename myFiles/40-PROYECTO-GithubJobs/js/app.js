const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", validarBusqueda);
});

function validarBusqueda(event) {
  event.preventDefault();
  const busqueda = document.querySelector("#busqueda").value;

  if (busqueda.length < 3) {
    mostrarMensaje("Busqueda muy corta... Añade más información");
  }
}

function mostrarMensaje(mensaje) {
  const existeAlerta = document.querySelector(".alerta");
  if (!existeAlerta) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.classList.add("bg-gray-100", "p-3", "text-center", "mt-3", "alerta");
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
