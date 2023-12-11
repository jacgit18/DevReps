// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


 /**
 * @param nums: number[]
 * @param target: number
 * @return number[]
 */

 const twoSumAlt = (nums: number[], target: number): number[] => {
  const memo: any = {};

  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (diff in memo) {
          return [memo[diff], i];
      } else {
          memo[nums[i]] = i;
      }
  }
  return [-1, -1];
}

const twoSumTwoPointer = (nums: number[], target: number): number[] => {
    // Create an array of tuples to store the original indices along with the numbers
    const indexedNums = nums.map((num, index) => [num, index]);

    // Sort the array of tuples based on the numbers
    indexedNums.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = indexedNums.length - 1;

    while (left < right) {
        const currentSum = indexedNums[left][0] + indexedNums[right][0];

        if (currentSum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    // No solution found, return an empty array or throw an error based on your requirements.
    return [];
}



// console.log(twoSum([2, 7, 11, 15], 9));
// // console.time("Pair time map")
// console.log(twoSum([1, 2, 3, 4, 6], 6))
// // console.timeEnd("Pair time map")

export const twoSum = {
    twoSumTwoPointer,
    twoSumAlt
}


