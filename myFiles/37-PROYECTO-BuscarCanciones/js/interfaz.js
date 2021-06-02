export const formularioBuscar = document.querySelector("#formulario-buscar");
export const divBuscar = document.querySelector("#buscar");
export const divResultado = document.querySelector("#resultado");
export const headingResultado = document.querySelector(".letra-resultado h2");
const divMensajes = document.querySelector("#mensajes");

// Mensaje de error
export function mensajeError(mensaje) {
  divMensajes.textContent = mensaje;
  divMensajes.classList.add("error");
  setTimeout(() => {
    divMensajes.textContent = "";
    divMensajes.classList.remove("error");
  }, 3000);
  return;
}
