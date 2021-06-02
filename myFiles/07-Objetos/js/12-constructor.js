//Objeto literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Objeto Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Monitor 24 Pulgadas", 125);
const producto3 = new Producto("Television", 100);
console.log(producto2);
console.log(producto3);
