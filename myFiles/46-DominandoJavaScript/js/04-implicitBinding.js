// Implicit Binding

// This hace referencia al objeto en el que nos encontramos
const usuario = {
  nombre: "Jesus",
  edad: 20,
  info() {
    console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
  },
  mascota: {
    nombre: "Alay",
    edad: 1,
    info() {
      console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
  },
};

usuario.info();
usuario.mascota.info();
