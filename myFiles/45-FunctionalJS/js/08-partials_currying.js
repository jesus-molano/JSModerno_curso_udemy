// Dividir las funciones en partes
const suma = (a, b, c) => a + b + c;
const parcial = (a) => (b) => (c) => suma(a, b, c);

// const primerNum = parcial(5);
// const segunNum = primerNum(6);
// const resultado = segunNum(2);

const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial);
