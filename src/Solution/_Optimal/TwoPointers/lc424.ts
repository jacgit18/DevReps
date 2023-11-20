// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

export const characterReplacement = (s: string, k: number): number => {
  const charFreq: number[] = new Array(26).fill(0)
  let maxLen = 0
  let maxCharFreq = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    const rightCharIdx: number = s.charCodeAt(right) - "A".charCodeAt(0)
    ++charFreq[rightCharIdx]
    maxCharFreq = Math.max(maxCharFreq, charFreq[rightCharIdx])

    const charReplaced: number = right - left + 1 - maxCharFreq

    if (charReplaced > k) {
      const leftCharIdx: number = s.charCodeAt(left) - "A".charCodeAt(0)
      --charFreq[leftCharIdx]
      ++left
    }
    maxLen = Math.max(maxLen, right - left + 1)
    ++right
  }
  return maxLen
}
