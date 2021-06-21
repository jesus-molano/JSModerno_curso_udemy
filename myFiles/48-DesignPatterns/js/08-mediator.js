function Vendedor(nombre) {
  this.nombre = nombre;
  this.sala = null;
}
Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(
      `Tenemos el siguiente articulo ${articulo} e iniciamos con un precio de $${precio}`
    );
  },
  vendido: (comprador) => {
    console.log(`Vendido a ${comprador}`);
  },
};

function Comprador(nombre) {
  this.nombre = nombre;
  this.sala = null;
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`Comprador: ${comprador.nombre} : ${cantidad}`);
  },
};

// mediator
function Subasta() {
  const compradores = {};
  return {
    registrar: (usuario) => {
      compradores[usuario.nombre] = usuario;
      usuario.sala = this;
    },
  };
}

// Crear objetos
const jesus = new Comprador("Jesus");
const pablo = new Comprador("Pablo");
const vendedor = new Vendedor("Vendedor de Coches");
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(jesus);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta("MUSTANG 66", 30000);

jesus.oferta(35000, jesus);
pablo.oferta(36000, pablo);
jesus.oferta(40000, jesus);
pablo.oferta(41000, pablo);

vendedor.vendido(pablo.nombre);
