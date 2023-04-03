import { e_Palindrome } from "../../src/palidrome/palidrome";

test('deve retornar true para "arara"', () => {
    expect(e_Palindrome('arara')).toBe(true);
});

test('deve retornar false para "palavra"', () => {
    expect(e_Palindrome('word')).toBe(false);
});

test('deve retornar true para "12321"', () => {
    expect(e_Palindrome('12321')).toBe(true);
});

test('deve retornar false para "12345"', () => {
    expect(e_Palindrome('12345')).toBe(false);
});
