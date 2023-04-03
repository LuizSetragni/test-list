import { e_Palindromo } from "./palidrome";

test('deve retornar true para "arara"', () => {
    expect(e_Palindromo('arara')).toBe(true);
});

test('deve retornar false para "palavra"', () => {
    expect(e_Palindromo('palavra')).toBe(false);
});

test('deve retornar true para "12321"', () => {
    expect(e_Palindromo('12321')).toBe(true);
});

test('deve retornar false para "12345"', () => {
    expect(e_Palindromo('12345')).toBe(false);
});
