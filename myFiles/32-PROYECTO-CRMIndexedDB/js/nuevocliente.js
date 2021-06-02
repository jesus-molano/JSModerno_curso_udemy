(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Conectar a la DB
    conectarDB();

    formulario.addEventListener("submit", validarCliente);
  });

  function validarCliente(event) {
    event.preventDefault();

    // Leer todos los inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === "") {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    // Crear un objeto con la informacion
    // Esto es igual a this.nombre = nombre;
    cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    cliente.id = Date.now();

    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");
    objectStore.add(cliente);
    transaction.onerror = () => {
      imprimirAlerta("Error al intentar agregar el cliente", "error");
    };
    transaction.oncomplete = () => {
      imprimirAlerta("Cliente agregado correctamente", "success");
      volverInicio();
    };
  }
})();
