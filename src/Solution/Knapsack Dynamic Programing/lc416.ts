// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

export const canPartition = (nums: number[]): boolean => {
  const totalSum = nums.reduce((sum, num) => sum + num, 0)

  // If the total sum is odd, it cannot be divided into two equal subsets
  if (totalSum % 2 !== 0) {
    return false
  }

  const targetSum = totalSum / 2
  const dp: boolean[] = new Array(targetSum + 1).fill(false)
  dp[0] = true

  // Iterate over each number in nums and update the dp array
  for (const num of nums) {
    for (let i = targetSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num]
    }
  }

  // The final result is stored in dp[targetSum]
  return dp[targetSum]
}

// Example usage:
//   console.log(canPartition([1, 5, 11, 5])); // Output: true
//   console.log(canPartition([1, 2, 3, 5])); // Output: false
