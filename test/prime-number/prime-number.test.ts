import { ePrimo } from "../../src/prime-number/prime-number";

describe('ePrimo', () => {
    // Teste 1 - 7 deve ser primo
    test('deve retornar true para 7', () => {
      expect(ePrimo(7)).toBe(true);
    });
  
    // Teste 2 - 10 não deve ser primo
    test('deve retornar false para 10', () => {
      expect(ePrimo(10)).toBe(false);
    });
  
    // Teste 3 - 17 deve ser primo
    test('deve retornar true para 17', () => {
      expect(ePrimo(17)).toBe(true);
    });
  
    // Teste 4 - 100 não deve ser primo
    test('deve retornar false para 100', () => {
      expect(ePrimo(100)).toBe(false);
    });
   
    test('deve retornar false para números menores ou iguais a 1', () => {
      expect(ePrimo(-1)).toBe(false);
      expect(ePrimo(0)).toBe(false);
      expect(ePrimo(1)).toBe(false);
    });
  });

