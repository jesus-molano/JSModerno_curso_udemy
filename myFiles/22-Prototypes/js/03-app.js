// Vamos a crear un ejemplo...

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function () {
  // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
  let tipo;
  if (this.saldo > 10000) {
    tipo = "gold";
  } else if (this.saldo > 5000) {
    tipo = "platinum";
  } else {
    tipo = "standar";
  }
  return tipo;
};

// Otro Prototipo para el nombre completo
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre} Saldo: ${
    this.saldo
  } Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

//Instanciar
const jesus = new Cliente("Jesus", 500);

// Acceder a los prototypes
console.log(jesus.tipoCliente());
// Un prototype que accede a otros prototypes
console.log(jesus.nombreClienteSaldo());
// reescribir un valor
jesus.retiraSaldo(100);
// comprobar saldo
console.log(jesus.nombreClienteSaldo());

console.log(jesus);
