// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array
// whose sum is as close to the target number as possible, return the sum of the triplet.
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.


export const triplet_sum_close_to_target = (arr: number[], targetSum: number): number => {
  // console.log(arr)

  arr.sort((a, b) => a - b

    // console.log(`Sort  ${a - b}`)
    // console.log(a,b)
    // console.log(arr)
  )

  // console.log(" ")

  let closest_difference = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];

      if (target_diff === 0) {
        return targetSum - target_diff;
      }

      if (Math.abs(target_diff) < Math.abs(closest_difference) ||
        (Math.abs(target_diff) === Math.abs(closest_difference) && target_diff > closest_difference)) {
        closest_difference = target_diff;
      }

      if (target_diff > 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return targetSum - closest_difference;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// Uncomment for edge cases
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
