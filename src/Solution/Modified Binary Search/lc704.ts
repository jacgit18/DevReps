// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

export const searchBinIter = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1 // Target not found
}

const searchBinRec = (nums: number[], target: number): number => {
  let startIndex = 0
  let endIndex = nums.length - 1

  const recursiveSearch = (
    nums: number[],
    target: number,
    startIndex: number,
    endIndex: number,
  ): number => {
    let midIndex = Math.floor((startIndex + endIndex) / 2)
    let midValue = nums[midIndex]

    if (startIndex === endIndex) {
      if (midValue === target) {
        return midIndex
      } else {
        return -1
      }
    } else if (target > midValue) {
      return recursiveSearch(nums, target, midIndex + 1, endIndex)
    } else if (target < midValue) {
      return recursiveSearch(nums, target, startIndex, midIndex)
    } else {
      return midIndex
    }
  }

  return recursiveSearch(nums, target, startIndex, endIndex)
}

// Example usage:
// const nums1 = [-1, 0, 3, 5, 9, 12]
// const target1 = 9
// console.log(searchBin(nums1, target1)) // Output: 4

// const nums2 = [-1, 0, 3, 5, 9, 12]
// const target2 = 2
// console.log(searchBin(nums2, target2)) // Output: -1

export const searchBin = {
  searchBinIter,
  searchBinRec,
}
