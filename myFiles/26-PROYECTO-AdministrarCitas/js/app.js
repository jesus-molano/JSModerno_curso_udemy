// Variables ///////////////////////////////////////////////////////////
// Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");
// fin variables
///////////////////////////////////////////////////////////

// Clases ///////////////////////////////////////////////////////////
// User Interface
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}

class UserInterface {
  imprimirAlerta(mensaje, tipo) {
    // Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
    //Agregar clase en base al tipo de error
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    // Agregar al DOM
    divMensaje.textContent = mensaje;
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) {
    this.limpiarHTML();
    citas.forEach((cita) => {
      const {
        mascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
        id,
      } = cita;
      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      // Scripting de los elementos de la cita
      const mascotaParrafo = document.createElement("h2");
      const propietarioParrafo = document.createElement("p");
      const telefonoParrafo = document.createElement("p");
      const fechaParrafo = document.createElement("p");
      const horaParrafo = document.createElement("p");
      const sintomasParrafo = document.createElement("p");

      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      propietarioParrafo.innerHTML = `<span class ="font-weight bolder">Propietario: </span>${propietario} `;

      telefonoParrafo.innerHTML = `<span class ="font-weight bolder">Telefono: </span>${telefono} `;

      fechaParrafo.innerHTML = `<span class ="font-weight bolder">Fecha: </span>${fecha} `;

      horaParrafo.innerHTML = `<span class ="font-weight bolder">Hora: </span>${hora} `;

      sintomasParrafo.innerHTML = `<span class ="font-weight bolder">Sintomas: </span>${sintomas} `;

      // Boton para eliminar la cita
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML = "Eliminar &cross;";
      btnEliminar.onclick = () => eliminarCita(id);

      // Boton para editar la cita
      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info", "mr-2");
      btnEditar.innerHTML = "Editar &#9998;";
      btnEditar.onclick = () => cargarEdicion(cita);

      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UserInterface();
const administrarCitas = new Citas();
// fin de clases
///////////////////////////////////////////////////////////

// Eventos ///////////////////////////////////////////////////////////
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("change", datosCita);
  propietarioInput.addEventListener("change", datosCita);
  telefonoInput.addEventListener("change", datosCita);
  fechaInput.addEventListener("change", datosCita);
  horaInput.addEventListener("change", datosCita);
  sintomasInput.addEventListener("change", datosCita);
  formulario.addEventListener("submit", nuevaCita);
}
// fin eventos
///////////////////////////////////////////////////////////

// Objeto principal con la informacion de la cita
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

// Funciones ///////////////////////////////////////////////////////////
// Agregar los datos al objeto
function datosCita(event) {
  citaObj[event.target.name] = event.target.value;
}

// Agrega una nueva cita a la clase Citas
function nuevaCita(event) {
  event.preventDefault();
  // Extraer la informacion
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
  // Validar
  if (!mascota || !propietario || !telefono || !fecha || !hora || !sintomas) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  }

  if (editando) {
    ui.imprimirAlerta("Editado correctamente");
    // Pasar el objeto de la cita a edicion
    administrarCitas.editarCita({ ...citaObj });
    // Quitar modo edicion
    formulario.querySelector('button[type="submit"]').textContent =
      "Crear Cita";
    editando = false;
  } else {
    // Generar un id unico
    citaObj.id = Date.now();
    // Crear la cita
    administrarCitas.agregarCita({ ...citaObj }); // spreadoperator para no mandar la referecia del mismo objeto
    // Mensaje de agregado correctamente
    ui.imprimirAlerta("Se agrego correctamente");
  }

  // Reiniciar formulario y objeto
  formulario.reset();
  reiniciarObjeto();

  // Mostrar el HTML de las citas
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

function eliminarCita(id) {
  // Eliminar la cita de la clase
  administrarCitas.eliminarCita(id);
  // Mostrar un mensaje
  ui.imprimirAlerta("La cita se elimino correctamente");
  // Refrescar las citas
  ui.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  // Llenar los inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  // Cambiar el texto del boton
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar Cambios";

  editando = true;
}

// fin funciones
///////////////////////////////////////////////////////////
