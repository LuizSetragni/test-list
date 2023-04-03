import { sortedList } from "../../src/sorted-list/sorted-list";

describe('sortedList', () => {
  test('retorna true para lista vazia', () => {
    expect(sortedList([])).toBe(true);
  });

  test('retorna true para lista com um elemento', () => {
    expect(sortedList([42])).toBe(true);
  });

  test('retorna true para lista em ordem crescente', () => {
    expect(sortedList([1, 2, 3, 4, 5])).toBe(true);
  });

  test('retorna true para lista em ordem decrescente', () => {
    expect(sortedList([5, 4, 3, 2, 1])).toBe(true);
  });

  test('retorna false para lista desordenada', () => {
    expect(sortedList([1, 3, 2, 5, 4])).toBe(false);
  });
});

