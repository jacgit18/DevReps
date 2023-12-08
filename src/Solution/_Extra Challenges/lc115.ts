


export const numDistinct = (s: string, t: string): number =>{
        const m = s.length;
        const n = t.length;
    
        const dp: number[][] = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0));
    
        // Initialization: empty string is a subsequence of any string.
        for (let i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
    
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (s[i - 1] === t[j - 1]) {
                    // If the characters match, consider both including and excluding the current character in s.
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                } else {
                    // If the characters don't match, exclude the current character in s.
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    
        return dp[m][n];
    }
    
    // // Example usage:
    // console.log(numDistinct("rabbbit", "rabbit"));  // Output: 3
    // console.log(numDistinct("babgbag", "bag"));      // Output: 5
    