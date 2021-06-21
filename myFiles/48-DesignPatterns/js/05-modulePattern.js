// Module Pattern

const mostrarCliente = (nombre) => {
  console.log(nombre);
};

export default hola;

//////////////////////////
// Module Pattern pre-ES06
const module1 = (function () {
  const nombre = "juan";
  function hola() {
    console.log("hola");
  }

  return {
    nombre,
    hola,
  };
})();
