const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Television 50 Pulgadas", precio: 800 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Raton", precio: 70 },
  { nombre: "Laptop", precio: 1020 },
  { nombre: "Sobremesa", precio: 2045 },
  { nombre: "Smarthphone", precio: 400 },
];

// Array method
const resultado = carrito.filter((producto) => {
  return producto.precio > 400;
});
console.log(resultado);

// Array method con funciones como parametros
const mayor400 = (producto) => {
  return producto.precio > 400;
};
const resultado2 = carrito.filter(mayor400);
console.log(resultado2);
