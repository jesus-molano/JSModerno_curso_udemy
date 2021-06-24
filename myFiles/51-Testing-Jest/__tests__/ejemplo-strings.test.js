const password = "123456";

describe('Valida Pass != "" && Pass.length === 6', () => {
  test("Password.length === 6", () => {
    expect(password).toHaveLength(6);
  });
  test("Password != ''", () => {
    expect(password).not.toHaveLength(0); // Negacion
  });
});
