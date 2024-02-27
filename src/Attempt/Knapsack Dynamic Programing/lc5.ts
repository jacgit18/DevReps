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

const longestPalindromeBruteForce = (s: string): string => {
  return " "
}

const longestPalindromeNaiveImp = (s: string): string => {
  return " "
}

const longestPalindromeNaiveDec = (s: string): string => {
  return " "
}


// Expand Around Center Algorithm
const Optimal = (s: string): string => {
  if (s.length <= 1) {
    return s;
  }

  var start = 0;
  var maxLength = 1;

  function expandAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      var currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (var i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // odd-length palindrome
    expandAroundCenter(i, i + 1); // even-length palindrome
  }

  return s.substring(start, start + maxLength);
}

export const longestPalindrome = {
  longestPalindromeBruteForce,
  longestPalindromeNaiveImp,
  longestPalindromeNaiveDec,
  Optimal,
}

// Example usage:
const input1 = "babad"
console.log(longestPalindrome.Optimal(input1)) // Output: "bab" or "aba"

const input2 = "cbbd"
console.log(longestPalindrome.Optimal(input2)) // Output: "bb"
