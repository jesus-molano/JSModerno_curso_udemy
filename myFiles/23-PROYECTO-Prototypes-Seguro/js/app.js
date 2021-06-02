// Constructores //////////////////////////////////////

function Seguro(marca, agno, tipo) {
  this.marca = marca;
  this.agno = agno;
  this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
  /* 
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
  */
  let cantidad;
  const base = 2000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  // Leer el agno
  const diferencia = new Date().getFullYear() - this.agno;
  // Cada agno que la diferencia es mayor, el costo se reducira un 3%
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /* 
      Si el seguro es basico se multiplica por un 30%
      Si el seguro es completo se multiplica por un 50%
  */
  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }
  return cantidad;
};

function UserInterface() {}

// Llenar las opciones de los agnos
UserInterface.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectAgno = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectAgno.appendChild(option);
  }
};

// Muestra alertas en pantalla
UserInterface.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement("div");
  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }
  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  // Insertar en el HTML
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UserInterface.prototype.mostrarResultado = (seguro, total) => {
  const { marca, agno, tipo } = seguro;
  let textoMarca;
  switch (marca) {
    case "1":
      textoMarca = "Americano";
      break;
    case "2":
      textoMarca = "Asiatico";
      break;
    case "3":
      textoMarca = "Europeo";
      break;
    default:
      break;
  }

  //Crear el resultado
  const div = document.createElement("div");
  div.classList.add("mt-10");
  div.innerHTML = ` 
    <p class = "header">Tu Resumen</p>
    <p class = "font-bold">Marca: <span class = "font-normal">${textoMarca}</span></p>
    <p class = "font-bold">Año: <span class = "font-normal">${agno}</span></p>
    <p class = "font-bold">Tipo: <span class = "font-normal capitalize">${tipo}</span></p>
    <p class = "font-bold">Total: <span class = "font-normal">$${total}</span></p>
  `;

  const resultadoDiv = document.querySelector("#resultado");

  // Mostrar el spinner
  const spinner = document.querySelector("#cargando");
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none"; // Se borra el spinner
    resultadoDiv.appendChild(div); // Y se muestra el resultado
  }, 3000);
};

// Instanciar User Interface
const userInterface = new UserInterface();
console.log(userInterface);

document.addEventListener("DOMContentLoaded", () => {
  userInterface.llenarOpciones(); // llena el select con los agnos
});

// Fin Constructores
//////////////////////////////////////

// Event Listeners //////////////////////////
eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}
// fin event Listeners
/////////////////////////////////////////////////

// Funciones ////////////////////////////////////
function cotizarSeguro(event) {
  event.preventDefault();

  // Leer la marca seleccionada
  const marca = document.querySelector("#marca").value;
  // Leer el agno seleccionado
  const agno = document.querySelector("#year").value;
  // Leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (!marca || !agno || !tipo) {
    userInterface.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }
  userInterface.mostrarMensaje("Cotizando...", "correcto");

  // Ocultar las cotizaciones previas
  const resultados = document.querySelector("#resultado div");
  if (resultados) {
    resultados.remove();
  }

  // Insertar el Seguro
  const seguro = new Seguro(marca, agno, tipo);
  const total = seguro.cotizarSeguro();

  // Utilizar el PROTOTYPE que va a cotizar
  userInterface.mostrarResultado(seguro, total);
}
