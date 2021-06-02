import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        if (resultado.lyrics) {
          const { lyrics } = resultado;
          UI.divResultado.textContent = lyrics;
          UI.headingResultado.textContent = `Letra de ${this.cancion} - ${this.artista}`;
        } else {
          UI.mensajeError("No se encuentra la cancion");
        }
      });
  }
}

export default API;
