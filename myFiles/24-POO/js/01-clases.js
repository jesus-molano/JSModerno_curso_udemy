// Las Classes en JavaScript llegaron hasta hace pocos años, muchas personas no consideraban a javascript como un lenguaje serio ya que la programación orientada a objetos era el object constructor y los métodos eran los prototypes...

// Así que en 2015 llegaron las classes a javascript, que solo es una mejora en la sintaxis, al final sigue siendo un object constructor con sus prototypes..

// En realidad sigue siendo lo mismo, pero la facilidad de crear objetos y añadirle métodos si mejoro bastante gracias a las classes

// Las classes se crean con la palabra reservada class...

// Class declaration *MAS UTILIZADA*
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}
const jesus = new Cliente("Jesus", 400);
console.log(jesus);

// Class Expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};
const juan = new Cliente2("Juan", 500);
console.log(juan);
