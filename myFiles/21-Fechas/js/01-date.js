// En javascript hay un objeto llamado Date
const diaHoy = new Date();
let valor;

// En este momento
Date.now();

// Date es Mes, dia y año
let cumple = new Date("1-5-1987");
cumple = new Date("January 5 1987");

// Convertir fecha a string
// cumple.toString();
valor = cumple.toString();

// .toString lo cambiaria de object a string
console.log(typeof valor);

valor = diaHoy.getMonth();
console.log(valor);
valor = diaHoy.getDate();
console.log(valor);
valor = diaHoy.getDay();
console.log(valor);
valor = diaHoy.getFullYear();
console.log(valor);
valor = diaHoy.getMinutes();
console.log(valor);
valor = diaHoy.getHours();
console.log(valor);
valor = diaHoy.getTime();
console.log(valor);
valor = diaHoy.getFullYear();
console.log(valor);
valor = diaHoy.setFullYear(2018);
console.log(valor);
