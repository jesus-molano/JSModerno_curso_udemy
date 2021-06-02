const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(event) {
  event.preventDefault();

  // Validar
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (ciudad === "" || pais === "") {
    // Hubo un error
    mostrarError("Ambos campos son obligatorios");
    return;
  }
  // Consultar la API
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const alerta = document.querySelector(".alerta");
  if (!alerta) {
    // Crear alerta
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center",
      "alerta"
    );
    alertaDiv.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span>
  `;

    container.appendChild(alertaDiv);

    setTimeout(() => {
      alertaDiv.remove();
    }, 3000);
  }
}

function consultarAPI(ciudad, pais) {
  const appID = "cc1ff9b7a200af35bb4ed6b47917b96f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

  spinner(); // Muestra un spinner de carga

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Limpiar HTML previo
      limpiarHTML();
      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }

      // Imprimir la espuesta en el HTML
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `${name}`;
  nombreCiudad.classList.add("font-bold", "text-2xl");

  const centigrados = kelvinToCelcius(temp);
  const max = kelvinToCelcius(temp_max);
  const min = kelvinToCelcius(temp_min);

  const climaActual = document.createElement("p");
  climaActual.innerHTML = `${centigrados}&#8451;`;
  climaActual.classList.add("font-bold", "text-6xl");

  const climaMax = document.createElement("p");
  climaMax.innerHTML = `Max: ${max}&#8451;`;
  // climaMax.classList.add("text-xl");

  const climaMin = document.createElement("p");
  climaMin.innerHTML = `Min: ${min}&#8451;`;
  // climaMin.classList.add("text-xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(nombreCiudad);
  resultadoDiv.appendChild(climaActual);
  resultadoDiv.appendChild(climaMax);
  resultadoDiv.appendChild(climaMin);
  resultado.appendChild(resultadoDiv);
}

const kelvinToCelcius = (grados) => parseInt(grados - 273.15);

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHTML();
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("spinner");
  divSpinner.innerHTML = `
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  `;

  resultado.appendChild(divSpinner);
}
