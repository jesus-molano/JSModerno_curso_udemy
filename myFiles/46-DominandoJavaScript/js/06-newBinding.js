// New Binding
function Auto(modelo, color) {
  this.modelo = modelo;
  this.color = color;
}

const auto = new Auto("Renault", "Gris");
console.log(auto);

//Window Binding
window.color = "Negro"; // Asignamos la variable a la ventana global
function hola() {
  console.log(color);
}
hola();
