// El problema que solucionan los prototypes...

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const jesus = new Cliente("Jesus", 500);

// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
  const { nombre, saldo, categoria } = cliente;
  return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(jesus));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("Codigo con Jesus", 4000, "Cursos en linea");
console.log(formatearEmpresa(CCJ));

// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función, lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...
