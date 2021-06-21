// Class Pattern
class Persona {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
}

const persona = new Persona("correo@correo.com", "Jesús");

console.log(persona);
