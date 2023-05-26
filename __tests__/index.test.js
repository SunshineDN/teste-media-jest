const { calcularMedia } = require("../index")

describe('calcularMedia', () => {
  it('Calcula corretamente a média de dois números', () => {
    expect(calcularMedia(4, 6)).toBe(5); // Espera-se que a média de 4 e 6 seja 5

    expect(calcularMedia(10, 20)).toBe(15); // Espera-se que a média de 10 e 20 seja 15

    expect(calcularMedia(-3, 3)).toBe(0); // Espera-se que a média de -3 e 3 seja 0

    expect(calcularMedia(0, 0)).toBe(0); // Espera-se que a média de 0 e 0 seja 0
  });
});