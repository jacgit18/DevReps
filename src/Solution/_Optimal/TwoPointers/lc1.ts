/**
 * Given an array iterate get the sum of each contiguous subarray and compare to target
 *
 * if more than target, increment to the left then decrement to the right and repeat until sum equals target and return the index
 * of numbers that equaled the sum that matched the target
 *
 */

// Test Cases are conditions for inputs

export const pair_with_target_sum_map = (nums: number[], target: number): number[] => {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    console.log(map);

    let complement = target - nums[i];
    if (map.has(complement)) {
      map.set(nums[i], i);

      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
};

console.time("Pair time map");
console.log(pair_with_target_sum_map([1, 2, 3, 4, 6], 6));
console.timeEnd("Pair time map");

export const pair_with_target_sum_Two_Pointer = (arr: number[], targetSum: number): number[] => {
  let left = 0,
    right = arr.length - 1;
  // console.log(right)
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }

    if (targetSum > currentSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }

  return [-1, -1];
}

console.time("Pair time");
console.log(pair_with_target_sum_Two_Pointer([1, 2, 3, 4, 6], 6));
console.timeEnd("Pair time");

// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

console.log(`\n ------- Edge Case -------- `);
// console.log(`Edge 1: [${pair_with_target_sum([], 6)}]`);
// console.log(`Edge 1: [${pair_with_target_sum([3], 6)}]`);
