// Funcion como argumento...
const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = (fn) => fn(10, 20);

// Depende de la funcion que le pasemos, realizara una cosa u otra
console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));
