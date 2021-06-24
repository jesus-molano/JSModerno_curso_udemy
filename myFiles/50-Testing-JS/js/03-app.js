// Probar dos valores
function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

async function sumaAsync(a, b) {
  return Promise.resolve(suma(a, b));
}

async function test(mensaje, callback) {
  try {
    await callback();
    console.log(`El test: ${mensaje} se ejecuto correctamente`);
  } catch (error) {
    console.error("ERROR");
    console.error(error);
  }
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

test("Suma 10 + 20 y el resultado debe ser 30", async () => {
  const resultado = await sumaAsync(20, 20);
  const esperado = 30;
  expected(esperado).toBe(resultado);
});
