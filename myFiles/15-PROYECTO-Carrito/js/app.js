// Variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventsListeners();

// Funciones

function cargarEventsListeners() {
  //Btn "Agregar al Carrito"
  listaCursos.addEventListener("click", agregarCurso);

  // Borrar elementos individuales del carrito ( X )
  carrito.addEventListener("click", eliminarCurso);

  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; // reseteamos el array
    limpiarHTML(); // Eliminar HTML
  });
}

function agregarCurso(event) {
  event.preventDefault();

  if (event.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = event.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function eliminarCurso(event) {
  if (event.target.classList.contains("borrar-curso")) {
    const cursoID = event.target.getAttribute("data-id");

    // Eliminar del array del carrito filtrando por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => {
      return curso.id !== cursoID;
    });

    carritoHTML(); //Iterar sobre el carro y mostrar el HTML
  }
}

function leerDatosCurso(curso) {
  //Objeto del curso seleccionado
  const infoCurso = {
    id: curso.querySelector("a").getAttribute("data-id"),
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    cantidad: 1,
  };

  //Revisar si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // retorna el objeto actualizado
      } else {
        return curso; // retorna los objetos que no son duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agregar elementos al array del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

//Mostrar array del carrito en HTML
function carritoHTML() {
  //Limpiar HTML previo
  limpiarHTML();
  //Recorre el carrito y genera HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${imagen}" width = 100/>
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
      `;

    //Agrega HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML() {
  // Forma lenta
  // contenedorCarrito.innerHTML = "";
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
