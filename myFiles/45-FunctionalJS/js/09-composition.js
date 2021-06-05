const obtenerNombre = (info) => ({
  mostrarNombre() {
    console.log(`Nombre: ${info.nombre}`);
  },
});

const guardarEmail = (info) => ({
  agregarEmail(email) {
    console.log(`Guardando email en: ${info.nombre}`);
    info.email = email;
  },
});

const obtenerEmail = (info) => ({
  mostrarEmail() {
    console.log(`Email: ${info.email}`);
  },
});

const obtenerEmpresa = (info) => ({
  mostrarEmpresa() {
    console.log(`Empresa: ${info.empresa}`);
  },
});

const obtenerPuesto = (info) => ({
  mostrarPuesto() {
    console.log(`Puesto: ${info.puesto}`);
  },
});

// Funciones como classes
function Cliente(nombre, email, empresa) {
  let info = {
    nombre,
    email,
    empresa,
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerEmpresa(info) //Diferente
  );
}

function Empleado(nombre, email, puesto) {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerPuesto(info) // Diferente
  );
}

const cliente = Cliente("Juan", null, "Google");
cliente.mostrarNombre();
cliente.agregarEmail("cliente@empresa.com");
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log("-------------------------------");

const empleado = Empleado("Jesus", null, "Web Developer");
empleado.mostrarNombre();
empleado.agregarEmail("empleado@empresa.com");
empleado.mostrarEmail();
empleado.mostrarPuesto();
