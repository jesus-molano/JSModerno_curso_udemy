// Class Pattern
class Persona {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Constructor pattern

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const cliente = new Cliente("Miguel", "correo@correo.com", "Google");
console.log(cliente);
