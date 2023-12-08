// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.


export const longestCommonSubsequence = (text1: string, text2: string): number =>{
        const m = text1.length;
        const n = text2.length;
    
        // Initialize a 2D array to store the length of the longest common subsequence.
        const dp: number[][] = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0));
    
        // Iterate through the strings to fill the dp array.
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
    
        // The bottom-right cell of the dp array contains the length of the longest common subsequence.
        return dp[m][n];
    }
    
    // Example usage:
    // console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
    // console.log(longestCommonSubsequence("abc", "abc"));   // Output: 3
    // console.log(longestCommonSubsequence("abc", "def"));   // Output: 0
    