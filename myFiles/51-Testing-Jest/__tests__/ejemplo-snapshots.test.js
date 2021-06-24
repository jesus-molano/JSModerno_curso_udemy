const cliente = {
  nombre: "Jesus Molano",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("Es Jesus Molano", () => {
    expect(cliente).toMatchSnapshot();
  });
});

// La primera ejecucion crea el snapshot
// Las siguientes veces comparara el objeto actual con el snapshot
// Para sobreescribir el snapshot => npm test -- -u
