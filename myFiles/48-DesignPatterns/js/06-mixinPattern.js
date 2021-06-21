// Mixin Pattern -- añadir funciones
class Persona {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInfo() {
    console.log(`Nombre Persona: ${this.name} Email Persona: ${this.email}`);
  },
  decirFrase() {
    console.log("Buenas Tardes!");
  },
};

// Añadir funciones a la Clase
Object.assign(Persona.prototype, funcionesPersona);
const cliente = new Persona("Jesus", "correo@correo.com");

console.log(cliente);
cliente.mostrarInfo();
cliente.decirFrase();
