import { isSorted } from "../../src/is-sorted/is-sorted";

describe('isSorted', () => {
  test('retorna true para lista ordenada', () => {
    expect(isSorted([1, 2, 3, 4])).toBe(true);
  });

  test('retorna false para lista não ordenada', () => {
    expect(isSorted([4, 2, 1, 3])).toBe(false);
  });

  test('retorna true para lista com um elemento', () => {
    expect(isSorted([42])).toBe(true);
  });

  test('retorna true para lista vazia', () => {
    expect(isSorted([])).toBe(true);
  });
});
