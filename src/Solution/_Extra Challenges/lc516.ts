// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".

// Example 2:

// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

export const longestPalindromeSubseq = (s: string): number => {
  const n = s.length

  // Initialize a 2D array to store the length of the longest palindromic subsequence.
  const dp: number[][] = new Array(n).fill([]).map(() => new Array(n).fill(0))

  // A single character is a palindrome of length 1.
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }

  // Iterate through the string to fill the dp array.
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1

      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  // The top-right cell of the dp array contains the length of the longest palindromic subsequence.
  return dp[0][n - 1]
}

// Example usage:
// console.log(longestPalindromeSubseq("bbbab")); // Output: 4
// console.log(longestPalindromeSubseq("cbbd"));  // Output: 2
