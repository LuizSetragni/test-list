import { temperatureConvert } from "../../src/temperature-converter/temperature-converter";

describe('converteTemperatura', () => {
  test('deve retornar 32 para Celsius 0', () => {
    expect(temperatureConvert(0)).toBe(32);
  });

  test('deve retornar 77 para Celsius 25', () => {
    expect(temperatureConvert(25)).toBe(77);
  });

  test('deve retornar 14 para Celsius -10', () => {
    expect(temperatureConvert(-10)).toBe(14);
  });

  test('deve retornar 212 para Celsius 100', () => {
    expect(temperatureConvert(100)).toBe(212);
  });
});
