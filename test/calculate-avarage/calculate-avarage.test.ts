import { calculateAverage } from "../../src/calculate-average/calculate-avarage";

describe('calculateAverage', () => {
  test('retorna 0 para uma lista vazia', () => {
    const number: number[] = [];
    const result = calculateAverage(number);
    expect(result).toEqual(0);
  });

  test('retorna a média correta para uma lista com elementos posivos', () => {
    const number: number[] = [1, 2, 3, 4, 5];
    const result = calculateAverage(number);
    expect(result).toEqual(3);
  });

  test('retorna a média correta para uma lista com elementos negativos', () => {
    const number: number[] = [-1, -2, -3, -4, -5];
    const result = calculateAverage(number);
    expect(result).toEqual(-3);
  });

  test('retorna a média correta para uma lista com elementos positivos e negativos', () => {
    const number: number[] = [-1, 2, -3, 4, -5];
    const result = calculateAverage(number);
    expect(result).toEqual(-0.6);
  });
});





