// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

export const lengthOfLongestSubstring = (s: string): number => {
  const charIndexMap: Record<string, number> = {}
  let maxLength = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd]

    if (currentChar in charIndexMap && charIndexMap[currentChar] >= windowStart) {
      windowStart = charIndexMap[currentChar] + 1
    }

    charIndexMap[currentChar] = windowEnd
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
}
