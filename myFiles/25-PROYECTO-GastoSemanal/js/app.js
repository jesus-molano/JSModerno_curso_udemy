// VARIABLES Y SELECTORES ///////////////////
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// FIN VARIABLES Y SELECTORES
/////////////////////////////////////////////

// EVENTOS /////////////////////////////////
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  formulario.addEventListener("submit", agregarGasto);
}
// FIN EVENTOS
////////////////////////////////////////////

// CLASES /////////////////////////////////
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto); // aun no hay gastos
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    this.calcularRestante();
  }
}

class UserInterface {
  // Metodos
  insertarPresupuesto(cantidad) {
    // Extrayendo los valores
    const { presupuesto, restante } = cantidad;
    // Agregarlos al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipoMensaje) {
    // crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipoMensaje === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Intsertar en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    // Quitar el mensaje
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarGastos(gastos) {
    this.limpiarHTML(); // Elimina el HTML previo
    // Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      // Crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id; // agrega elatributo  data-id: 391287...

      // Agregar HTML del gasto
      nuevoGasto.innerHTML = `
        ${nombre}<span class = "badge badge-primary badge-pill"> $${cantidad} </span>
      `;
      // Boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar &times;";
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };
      nuevoGasto.appendChild(btnBorrar);

      // Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;
    const restanteDiv = document.querySelector(".restante");

    // Comprobar 25%
    if (presupuesto / 4 > restante) {
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
      // Comprobar 50%
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove("alert-success", "alert-danger");
      restanteDiv.classList.add("alert-warning");
    } else {
      restanteDiv.classList.remove("alert-danger", "alert-warning");
      restanteDiv.classList.add("alert-success");
    }

    // Si el total es menor a 0
    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

const ui = new UserInterface();

let presupuesto;
// FIN  CLASES
///////////////////////////////////////////

// FUNCIONES //////////////////////////////
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");
  Number(presupuestoUsuario); // Pasamos el string a Number
  if (
    !presupuestoUsuario ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  // Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}

// Agregar Gasto
function agregarGasto(event) {
  event.preventDefault();
  // Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  // Validar
  if (!nombre || !cantidad) {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no valida", "error");
    return;
  }

  // Generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  // Agregar un nuevo gasto
  presupuesto.nuevoGasto(gasto);
  // Mensaje de gasto agregado al array
  ui.imprimirAlerta("Agregando gasto");
  // Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
  // Reseteamos el formulario
  formulario.reset();
}

function eliminarGasto(id) {
  // Elimina los gastos del objeto presupuesto
  presupuesto.eliminarGasto(id);
  // Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);
  //Actualiza el restante
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
  if (restante > 0) {
    formulario.querySelector('button[type="submit"]').disabled = false;
  }
}
// FIN FUNCIONES
///////////////////////////////////////////
