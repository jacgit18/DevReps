// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

const searchRangerBruteForce = (nums: number[], target: number): number[] => {
  return [0]
}

const searchRangerNaiveImp = (nums: number[], target: number): number  => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // console.log(nums[mid])

      if (nums[mid] === target) {
          return mid; // Element found, return its index.
      }

      // Check which half of the array is sorted and adjust pointers accordingly.
      if (nums[left] <= nums[mid]) {
          // Left half is sorted.
          if (target >= nums[left] && target < nums[mid]) {
              right = mid - 1; // Target is in the left half.
          } else {
              left = mid + 1; // Target is in the right half.
          }
      } else {
          // Right half is sorted.
          if (target <= nums[right] && target > nums[mid] ) {
              left = mid + 1; // Target is in the right half.
          } else {
              right = mid - 1; // Target is in the left half.
          }
      }
  }

  return -1; // Element not found.

}

const searchRangerNaiveDec = (nums: number[], target: number): number[] => {
  return [0]
}

const searchRangerOptimal = (nums: number[], target: number): number[] => {
  return [0]
}

// Example usage:
const example1 = searchRangerNaiveImp([4,5,6,7,0,1,2], 0) //  4
console.log(example1)

const example2 = searchRangerNaiveImp([4,5,6,7,0,1,2], 3) // -1
console.log(example2)

const example3 = searchRangerNaiveImp([1], 0) // -1
console.log(example3)

export const searchRanger = {
  searchRangerBruteForce,
  searchRangerNaiveImp,
  searchRangerNaiveDec,
  searchRangerOptimal,
}
