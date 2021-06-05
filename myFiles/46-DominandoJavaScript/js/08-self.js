// Self === Window (Ventana Global)

// window.onload = () => {
//   console.log("Ventana lista(window)");
// };

self.onload = () => {
  console.log("Ventana lista(self)");
};

window.precio = 400;
const producto = {
  nombre: "Monitor",
  disponible: true,
  mostrarInfo: function () {
    return `EL producto ${this.nombre} tiene un precio de ${self.precio}`;
  },
};
console.log(producto.mostrarInfo());
