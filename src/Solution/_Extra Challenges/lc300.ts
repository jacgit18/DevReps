// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

export const lengthOfLIS = (nums: number[]): number =>{
        const n = nums.length;
    
        if (n === 0) {
            return 0;
        }
    
        // Initialize an array to store the length of the longest increasing subsequence ending at each index.
        const dp: number[] = new Array(n).fill(1);
    
        // Iterate through the array to calculate the length of the LIS.
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    // If the current number is greater than the number at index j,
                    // update the length of the LIS ending at index i.
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
    
        // The maximum value in the dp array represents the length of the longest increasing subsequence.
        return Math.max(...dp);
    }
    
    // Example usage:
    // console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
    // console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));          // Output: 4
    // console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));       // Output: 1
    