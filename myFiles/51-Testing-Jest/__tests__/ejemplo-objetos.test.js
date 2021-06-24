const cliente = {
  nombre: "jesus",
  balance: 500,
};

describe("Testing al cliente", () => {
  test("El cliente es premium", () => {
    expect(cliente.balance).toBeGreaterThan(400);
  });
  test("Es cliente es jesus", () => {
    expect(cliente.nombre).toBe("jesus");
  });
});
