// Explicit binding

function persona(element1, element2) {
  console.log(
    `Mi nombre es ${this.nombre} y escucho ${element1} y ${element2}`
  );
}

const info = {
  nombre: "Jesus",
};

const musicaFav = ["Rock", "Metal"];

persona.call(info, musicaFav[0], musicaFav[1]); // ELementos de forma individual

persona.apply(info, musicaFav); // Puedes pasar arrays

const nuevaFn = persona.bind(info, musicaFav[0], musicaFav[1]); // Nueva funcion
nuevaFn();
