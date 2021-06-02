const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");
const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

// Crear el evento al cargar la pagina
window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(event) {
  event.preventDefault();
  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    mensajeAlerta("Agrega un termino de busqueda");
    return;
  }

  buscarImagenes();
}

function mensajeAlerta(mensaje) {
  const existeAlerta = document.querySelector(".alerta");
  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "alerta"
    );
    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
  `;

    formulario.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes() {
  const termino = document.querySelector("#termino").value; // input del usuario
  const key = "21325051-f243adbb3190d2509f4435216";
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      totalPaginas = calcularPaginas(resultado.totalHits);
      mostrarImagenes(resultado.hits);
    });
}

// Generador que registra la cantidad de elementos de acuerdo a las paginas
function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

// Calcular paginas de forma dinamica
function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes(imagenes) {
  limpiarHTML(resultado);
  // Iterar sobre el arreglo de imagenes y construir el HTML
  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;

    resultado.innerHTML += `
    <div class="tarjeta w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
      <div class="bg-white"> 
        <img class="w-full" src="${previewURL}"/>
        <div class="p-4">
          <p class="font-bold">${likes} <span class="heart">&#9825;</span></p>
          <p class="font-bold">${views} <span class="views">vistas</span></p>
          <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-2 enlaceImagen" href ="${largeImageURL}" target="_blank" rel="noopener noreferrer"> Ver Imagen </a>
        </div>
      </div
    </div>
    `;
  });

  // Limpiar paginacion anterior
  limpiarHTML(paginacionDiv);
  // Generar paginador
  imprimirPaginador();
}

// Paginador
function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);
  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    // Caso contrario genera un boton por cada elemento en el generador
    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-4",
      "rounded"
    );

    boton.onclick = () => {
      paginaActual = value;
      buscarImagenes();
    };

    paginacionDiv.appendChild(boton);
  }
}

function limpiarHTML(elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
