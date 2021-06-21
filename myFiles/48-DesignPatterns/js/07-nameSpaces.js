// Name Spaces
const restaurantApp = {};

restaurantApp.platos = [
  {
    plato: "Pizza",
    precio: 8,
  },
  {
    plato: "Burguer",
    precio: 3.5,
  },
  {
    plato: "Hot-Dog",
    precio: 3,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platos) => {
    platos.forEach((plato, index) => {
      console.log(`${index}: Plato: ${plato.plato} $${plato.precio}`);
    });
  },
  pedir: (id) => {
    console.log(
      `Tu plato: ${restaurantApp.platos[id].plato} se esta preparando`
    );
  },
  agregarPlato: (plato, precio) => {
    const nuevo = {
      plato: plato,
      precio: precio,
    };
    restaurantApp.platos.push(nuevo);
  },
};

const { platos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platos);
restaurantApp.funciones.pedir(1);
restaurantApp.funciones.agregarPlato("Arepa", 4.5);
restaurantApp.funciones.mostrarMenu(platos);
