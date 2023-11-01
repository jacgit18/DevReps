function characterReplacement(s, k) {
  const charFreq = new Array(26).fill(0)
  let maxLen = 0
  let maxCharFreq = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    const rightCharIdx = s.charCodeAt(right) - "A".charCodeAt(0)
    ++charFreq[rightCharIdx]
    // console.log(charFreq[rightCharIdx]++)

    maxCharFreq = Math.max(maxCharFreq, charFreq[rightCharIdx])

    // chars replaced equals the length of substring subtracted by the max freq of a char in the substring
    const charReplaced = right - left + 1 - maxCharFreq

    if (charReplaced > k) {
      const leftCharIdx = s.charCodeAt(left) - "A".charCodeAt(0)
      --charFreq[leftCharIdx] // accessing the value and decrementing the value at that index not going back
      ++left
    }
    maxLen = Math.max(maxLen, right - left + 1)
    ++right
  }
  return maxLen
}

// 72 steps
console.log(characterReplacement("AABABBA", 1)) // 4
