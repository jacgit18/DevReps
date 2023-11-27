// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

import { MinHeap } from "../../util/MinHeapMaker"

export const findKthLargest = (nums: number[], k: number): number | undefined => {
  const minHeap = new MinHeap()

  for (const num of nums) {
    minHeap.add(num)
    if (minHeap.size() > k) {
      minHeap.pop()
    }
  }

  return minHeap.peek()
}

// Example usage:
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // Output: 5
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // Output: 4
