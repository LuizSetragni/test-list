export function e_Palindromo(palavra: string): boolean {
  palavra = palavra.toLowerCase().replace(" ", "");
  return palavra === palavra.split("").reverse().join("");
}