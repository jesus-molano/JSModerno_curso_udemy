function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

describe("Testing a las funciones suma y resta", () => {
  test("Suma de 20 y 30", () => {
    expect(suma(20, 30)).toBe(50);
  }),
    test("Resta de 30 y 20", () => {
      expect(restar(30, 20)).toBe(10);
    });
});
