(function () {
  let idCliente;

  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");

  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    // Conectar a la DB
    conectarDB();

    // Actualiza el registro
    formulario.addEventListener("submit", actualizarCliente);

    // Verificar la ID de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    idCliente = parametrosURL.get("id");
    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 500);
    }
  });

  function obtenerCliente(id) {
    const transaction = DB.transaction(["crm"], "readonly");
    const objectStore = transaction.objectStore("crm");

    const cliente = objectStore.openCursor();
    cliente.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function llenarFormulario(datosCliente) {
    const { nombre, email, telefono, empresa } = datosCliente;
    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
  }
  function actualizarCliente(event) {
    event.preventDefault();
    if (
      nombreInput.value === "" ||
      emailInput.value === "" ||
      telefonoInput.value === "" ||
      empresaInput.value === ""
    ) {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }
    // Actualizar cliente
    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: Number(idCliente), // porque extrae el idCliente como string
    };

    const transaction = DB.transaction("crm", "readwrite");
    const objectStore = transaction.objectStore("crm");
    objectStore.put(clienteActualizado);
    transaction.oncomplete = () => {
      imprimirAlerta("Cliente actualizado", "success");
      volverInicio();
    };
    transaction.onerror = () => {
      imprimirAlerta("Error al editar", "error");
    };
  }

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("crm", 1);
    abrirConexion.onerror = () => {
      console.log("Hubo en error");
    };
    abrirConexion.onsuccess = () => {
      DB = abrirConexion.result;
    };
  }
})();
