import { factorial } from "../../src/factorial/factorial";

describe('fatorial', () => {
    test('deve retornar 1 para fatorial de 0', () => {
        expect(factorial(0)).toBe(1);
    });

    test('deve retornar 1 para fatorial de 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('deve retornar 120 para fatorial de 5', () => {
        expect(factorial(5)).toBe(120);
    });

    test('deve retornar 3628800 para fatorial de 10', () => {
        expect(factorial(10)).toBe(3628800);
    });
});
