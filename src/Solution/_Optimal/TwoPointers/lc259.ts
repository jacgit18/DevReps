// Problem Statement #

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

export const triplet_with_smaller_sum = (arr: number[], target: number): number => {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum < target) {
        // If current sum is less than target, then all triplets from left to right will also satisfy the condition
        count += right - left;
        left += 1; // Move towards larger values to increase the sum
      } else {
        // If current sum is greater or equal to target, move the right pointer to decrease the sum
        right -= 1;
      }
    }
  }

  return count;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3))
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5))
