function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;
    setTimeout(() => {
      if (!error) {
        resolve("El listado de descargo corrctamente");
      } else {
        reject("Error en la conexion");
      }
    }, 3000);
  });
}

// ASYNC AWAIT
async function ejecutar() {
  try {
    const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...

    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}
ejecutar();
console.log(2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
