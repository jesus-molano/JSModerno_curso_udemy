// Vamos a definir un promise
const aplicarDescuento = new Promise((resolve, reject) => {
  // Puede ser arrow function...
  const descuento = true;

  // Comentar estas siguientes lineas para ver el Resolve...
  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se aplica descuento");
  }
});

aplicarDescuento
  .then((resultado) => descuento(resultado))
  .catch((error) => console.log(error));

console.log(aplicarDescuento);

// En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir
// Pending - ni se ha cuplido ni rechazado.

// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento(mensaje) {
  console.log(mensaje);
}
