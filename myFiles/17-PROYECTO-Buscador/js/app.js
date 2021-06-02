// Variables  -----------------------------------
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precioMin = document.querySelector("#minimo");
const precioMax = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//Contenedor de los resultados
const resultado = document.querySelector("#resultado");

// Fechas
const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;

//Generar objeto con busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//-----------------------------------------------

// Eventos ----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);

  // Llenar las opciones de años
  llenarSelect();
});

// Event listener para los select de busqueda
marca.addEventListener("change", (event) => {
  datosBusqueda.marca = event.target.value;
  filtrarAuto();
});
year.addEventListener("change", (event) => {
  datosBusqueda.year = parseInt(event.target.value);
  filtrarAuto();
});
precioMin.addEventListener("change", (event) => {
  datosBusqueda.minimo = event.target.value;
  filtrarAuto();
});
precioMax.addEventListener("change", (event) => {
  datosBusqueda.maximo = event.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (event) => {
  datosBusqueda.puertas = parseInt(event.target.value);
  filtrarAuto();
});
transmision.addEventListener("change", (event) => {
  datosBusqueda.transmision = event.target.value;
  filtrarAuto();
});
color.addEventListener("change", (event) => {
  datosBusqueda.color = event.target.value;
  filtrarAuto();
});
// --------------------------------------------------------

// Funciones ---------------------------------------------
function mostrarAutos(autos) {
  limpiarHTML(); // elimina el html previo
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;
    //insertar en el html
    resultado.appendChild(autoHTML);
  });
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function llenarSelect() {
  for (let i = maxYear; i >= minYear; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); // agrega las opciones de año al select
  }
}
// Funcion que filtra en base a la busqueda
function filtrarAuto() {
  // .filter soporta encadenamiento:
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  const noResultado = document.createElement("div");

  limpiarHTML();
  noResultado.classList.add("alerta", "error");
  noResultado.textContent = "La busqueda no ha generado resultados";
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  } else {
    return auto;
  }
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  } else {
    return auto;
  }
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  } else {
    return auto;
  }
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  } else {
    return auto;
  }
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  } else {
    return auto;
  }
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  } else {
    return auto;
  }
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  } else {
    return auto;
  }
}
// ---------------------------------------------------------
