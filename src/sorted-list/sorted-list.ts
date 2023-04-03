export function sortedList(number: number[]): boolean {
    const len = number.length;
    
    if (len <= 1) {
      return true;
    }
    
    let isIncreasing = true;
    let isDecreasing = true;
    
    for (let i = 1; i < len; i++) {
      if (number[i] < number[i-1]) {
        isIncreasing = false;
      } else if (number[i] > number[i-1]) {
        isDecreasing = false;
      }
    }
    
    return isIncreasing || isDecreasing;
  }

  