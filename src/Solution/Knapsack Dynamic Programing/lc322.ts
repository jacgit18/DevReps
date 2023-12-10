// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

export const coinChange = (coins: number[], amount: number): number => {
  // Create an array to store the minimum number of coins needed for each amount
  const dp: number[] = new Array(amount + 1).fill(Infinity)

  // Base case: 0 coins needed for amount 0
  dp[0] = 0

  // Iterate over each coin and update the dp array
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      // Update dp[i] with the minimum of current value or (dp[i - coin] + 1)
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  // If dp[amount] is still Infinity, it means the amount cannot be made up by any combination
  return dp[amount] === Infinity ? -1 : dp[amount]
}

// Example usage:
// console.log(coinChange([1, 2, 5], 11)); // Output: 3
// console.log(coinChange([2], 3)); // Output: -1
// console.log(coinChange([1], 0)); // Output: 0
