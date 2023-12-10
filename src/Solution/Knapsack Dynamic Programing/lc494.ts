// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Example 2:

// Input: nums = [1], target = 1
// Output: 1

// Constraints:

// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// -1000 <= target <= 1000

export const findTargetSumWays = (nums: number[], target: number): number => {
  const totalSum = nums.reduce((sum, num) => sum + num, 0)

  // The sum of nums must be at least as large as the absolute value of the target
  if (Math.abs(target) > totalSum) {
    return 0
  }

  // Calculate the offset to adjust the array indices to non-negative values
  const offset = totalSum

  // Initialize the dp array
  const dp: number[][] = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(2 * totalSum + 1).fill(0))

  // Base case: there is one way to achieve a sum of 0
  dp[0][offset] = 1

  // Populate the dp array
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= 2 * totalSum; j++) {
      if (j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]]
      }
      if (j + nums[i - 1] <= 2 * totalSum) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]]
      }
    }
  }

  // The result is stored in dp[nums.length][target + offset]
  return dp[nums.length][target + offset]
}

// Example usage:
//   console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // Output: 5
//   console.log(findTargetSumWays([1], 1)); // Output: 1
