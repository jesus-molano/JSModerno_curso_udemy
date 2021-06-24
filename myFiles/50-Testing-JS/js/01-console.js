// Probar dos valores
function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function test(resultado, esperado) {
  if (resultado != esperado) {
    console.error(`TEST ❌ => Resultado: ${resultado} Esperado: ${esperado}`);
  } else {
    console.log("TEST ✅");
  }
}

let resultado = suma(2, 2);
let esperado = 3;
test(resultado, esperado);

resultado = restar(4, 3);
esperado = 1;
test(resultado, esperado);
