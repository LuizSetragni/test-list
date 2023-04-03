export function calculateAverage(number: number[]): number {
  if (number.length === 0) {
    return 0;
  }
  const sum = number.reduce((acc, curr) => acc + curr);
  return sum / number.length;
}