// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.

export const singleNumberThree = (nums: number[]): number[] =>{
        // Step 1: Calculate XOR of all elements
        let xorResult = 0;
        for (const num of nums) {
            xorResult ^= num;
        }
    
        // Step 2: Find the rightmost set bit
        const rightmostSetBit = xorResult & -xorResult;
    
        // Step 3: Divide the array into two groups
        let group1 = 0;
        let group2 = 0;
        for (const num of nums) {
            if ((num & rightmostSetBit) !== 0) {
                group1 ^= num;
            } else {
                group2 ^= num;
            }
        }
    
        // Step 4: Return the results
        return [group1, group2];
    }
    
    // Example usage:
    // const nums1 = [1, 2, 1, 3, 2, 5];
    // console.log(singleNumber(nums1));  // Output: [3, 5]
    
    // const nums2 = [-1, 0];
    // console.log(singleNumber(nums2));  // Output: [-1, 0]
    
    // const nums3 = [0, 1];
    // console.log(singleNumber(nums3));  // Output: [1, 0]
    