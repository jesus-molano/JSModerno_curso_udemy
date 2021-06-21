// Singleton -- Una sola instancia del objeto
let instancia = null;
class Persona {
  constructor(nombre, email) {
    if (!instancia) {
      this.nombre = nombre;
      this.email = email;
      instancia = this;
    } else {
      return instancia;
    }
  }
}

const persona = new Persona("Jesus", "jesu@correo.com");
console.log(persona); // Object { nombre: "Jesus", email: "jesu@correo.com" }
const persona2 = new Persona("Juan", "correo@correo.com");
console.log(persona2); // Object { nombre: "Jesus", email: "jesu@correo.com" }
