const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

// Crear un Promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();
  formulario.addEventListener("submit", submitFormulario);
  criptomonedasSelect.addEventListener("change", leerValor);
  monedaSelect.addEventListener("change", leerValor);
});

function consultarCriptomonedas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((crypto) => {
    const { FullName, Name } = crypto.CoinInfo;
    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

function submitFormulario(event) {
  event.preventDefault();

  // Validar

  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  // Consutar la API con los resultados
  consultarAPI();
}

function mostrarAlerta(mensaje) {
  const existeError = document.querySelector(".error");
  if (!existeError) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    // mensaje de error
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function leerValor(event) {
  objBusqueda[event.target.name] = event.target.value;
  console.log(objBusqueda);
}

function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((cotizacion) => {
      mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    });
}

function mostrarCotizacionHTML(cotizacion) {
  limpiarHTML();
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `Precio Mas Alto del Dia: ${HIGHDAY}`;
  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `Precio Mas Bajo del Dia: ${LOWDAY}`;
  const ultimasHoras = document.createElement("p");
  ultimasHoras.innerHTML = `Variacion en las ultimas 24H: ${CHANGEPCT24HOUR}%`;
  const ultimaActualizacion = document.createElement("p");
  ultimaActualizacion.innerHTML = `Ultima actualización: ${LASTUPDATE}%`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  limpiarHTML();
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  `;
  resultado.appendChild(spinner);
}
