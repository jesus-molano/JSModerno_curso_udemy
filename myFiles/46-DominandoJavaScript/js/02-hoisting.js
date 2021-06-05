// JS ejecuta el codigo en dos fases:
// 1 registra las funciones
// 2 las manda a llamar

obtenerCliente("Jesus");
function obtenerCliente(nombre) {
  console.log(`Nombre: ${nombre}`);
}

// -- ERROR --
obtenerCliente2("Pablo");
const obtenerCliente2 = (nombre) => {
  console.log(`Nombre: ${nombre}`);
};

// Function expresion se puede tracudir como:
const obtenerCliente3; //undefined
obtenerCliente3 = (nombre) => {
  console.log(`Nombre: ${nombre}`);
};

// Al mandarla a llamar antes, interpreta que esta undefined
