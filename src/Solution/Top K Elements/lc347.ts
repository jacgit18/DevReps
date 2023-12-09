// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

import { MinHeap } from "../../util/MinHeapMaker";

  
  export const topKFrequent = (nums: number[], k: number): number[] => {
    const frequencyMap: Record<number, number> = {};
    for (const num of nums) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    const minHeap = new MinHeap();
  
    for (const num in frequencyMap) {
      if (frequencyMap.hasOwnProperty(num)) {
        minHeap.add(parseInt(num));
        if (minHeap.size() > k) {
          minHeap.pop();
        }
      }
    }
  
    const result: number[] = [];
    while (minHeap.size() > 0) {
      result.unshift(minHeap.pop());
    }
  
    return result;
  };
  
  // Example usage:
//   const nums1 = [1, 1, 1, 2, 2, 3];
//   const k1 = 2;
//   console.log(topKFrequent(nums1, k1)); // Output: [1, 2]
  
//   const nums2 = [1];
//   const k2 = 1;
//   console.log(topKFrequent(nums2, k2)); // Output: [1]
  