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
    return;
  }

  consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
  const githubURL = `https://jobs.github.com/positions.json?search=${busqueda}`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    githubURL
  )}`;

  axios
    .get(url)
    .then((respuesta) => mostrarVacantes(JSON.parse(respuesta.data.contents)));
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

function mostrarVacantes(vacantes) {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  if (vacantes.length > 0) {
    resultado.classList.add("grid");
    vacantes.forEach((vacante) => {
      const { company, type, title, url } = vacante;
      resultado.innerHTML += `
      <div class="shadow bg-white p-6 rounded">
        <h2 class="text-2xl font-light mb-4">${title}</h2>
        <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
        <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
        <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
      </div>
      `;
    });
  }
}
