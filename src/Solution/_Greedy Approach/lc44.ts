// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".


// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.

// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 

// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.


export const isMatch = (s: string, p: string): boolean =>{
        let sPointer = 0;
        let pPointer = 0;
        let match = 0;
        let starIndex = -1;
    
        while (sPointer < s.length) {
            if (pPointer < p.length && (p[pPointer] === s[sPointer] || p[pPointer] === '?')) {
                sPointer++;
                pPointer++;
            } else if (pPointer < p.length && p[pPointer] === '*') {
                starIndex = pPointer;
                match = sPointer;
                pPointer++;
            } else if (starIndex !== -1) {
                pPointer = starIndex + 1;
                match++;
                sPointer = match;
            } else {
                return false;
            }
        }
    
        while (pPointer < p.length && p[pPointer] === '*') {
            pPointer++;
        }
    
        return pPointer === p.length;
    }
    
    // Example usage:
    // console.log(isMatch("aa", "a"));     // Output: false
    // console.log(isMatch("aa", "*"));     // Output: true
    // console.log(isMatch("cb", "?a"));    // Output: false
    