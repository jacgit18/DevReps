// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

export const make_squares = (arr: number[]): number[] => {
  let result: number[] = [];
  let left: number = 0;
  let right: number = arr.length - 1;
  let i: number = right;
  let num1: number;
  let num2: number;

  while (left <= right) {
    num1 = Math.pow(arr[left], 2);
    num2 = Math.pow(arr[right], 2);

    if (num1 > num2) {
      result[i] = num1;
      left++;
    } else {
      result[i] = num2;
      right--;
    }

    i--;
  }

  return result;
};

// Squares: 0,1,4,4,9
// Squares: 0,1,0,4,9

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);
