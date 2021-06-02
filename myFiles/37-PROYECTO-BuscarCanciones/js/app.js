import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(event) {
  event.preventDefault();

  // Obtener datos del formulario
  const artista = document.querySelector("#artista").value;
  const cancion = document.querySelector("#cancion").value;

  if (artista === "" && cancion === "") {
    UI.mensajeError("Ambos campos son obligatorios");
  }
  // Consultar nuestra api
  const busqueda = new API(artista, cancion);
  busqueda.consultarAPI();
}
