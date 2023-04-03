export function e_Palindrome(word: string): boolean {
  word = word.toLowerCase().replace(" ", "");
  return word === word.split("").reverse().join("");
}