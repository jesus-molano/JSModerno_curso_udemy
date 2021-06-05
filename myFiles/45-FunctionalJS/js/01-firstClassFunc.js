// First Class Function
const suma = function (a, b) {
  return a + b;
};
// Asignacion de funciones como si fueran tipos de datos
const resultado = suma;

// Se puede ver como un alias de suma
console.log(resultado(10, 20));
console.log(suma(10, 20));
