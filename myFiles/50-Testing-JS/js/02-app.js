// Probar dos valores
function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function expected(esperado) {
  return {
    toBe(resultado) {
      if (resultado != esperado) {
        console.error(
          `TEST ❌ => Resultado: ${resultado} Esperado: ${esperado}`
        );
      } else {
        console.log("TEST ✅");
      }
    },
    toEqual(resultado) {
      if (resultado != esperado) {
        console.error(
          `TEST ❌ => Resultado: ${resultado} Esperado: ${esperado}`
        );
      } else {
        console.log("TEST ✅");
      }
    },
  };
}

let resultado = suma(2, 2);
let esperado = 3;
expected(esperado).toBe(resultado);

resultado = restar(4, 3);
esperado = 1;
expected(esperado).toBe(resultado);
