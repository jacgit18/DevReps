// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


export const longestPalindrome = (s: string): string =>{
        if (s.length <= 1) {
            return s;
        }
    
        let start = 0;
        let maxLength = 1;
    
        function expandAroundCenter(left: number, right: number): number {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            return right - left - 1;
        }
    
        for (let i = 0; i < s.length; i++) {
            const len1 = expandAroundCenter(i, i);
            const len2 = expandAroundCenter(i, i + 1);
            const currentMaxLength = Math.max(len1, len2);
    
            if (currentMaxLength > maxLength) {
                maxLength = currentMaxLength;
                start = i - Math.floor((currentMaxLength - 1) / 2);
            }
        }
    
        return s.substring(start, start + maxLength);
    }
    
    // Example usage:
    // console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
    // console.log(longestPalindrome("cbbd"));  // Output: "bb"
    