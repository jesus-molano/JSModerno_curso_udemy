// Scope
const cliente = "Juan";

function mostrarCliente() {
  const cliente = "Pablo";
  console.log(cliente);
}
mostrarCliente(); // Pablo
console.log(cliente); // Juan

// --------------------------------

// Closure -- para acceder a una var o fn dentro de una funcion de manera global
const obtenerCliente = () => {
  const nombre = "Jesus";
  function muestraNombre() {
    console.log(nombre);
  }
  return muestraNombre;
};

const cliente2 = obtenerCliente();
cliente2(); // Jesus
