// Given two strings s and t of lengths m and n respectively, return the minimum window substring
// of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

const minWindow = (str, targets) => {
  let counts = {}
  let missingChars = targets.length
  let result = [0, Infinity]

  for (let i = 0; i < targets.length; i++) {
    counts[targets[i]] = 0
  }

  let left = 0
  for (let right = 0; right < str.length; right++) {
    if (str[right] in counts) {
      counts[str[right]]++
      if (counts[str[right]] === 1) {
        missingChars--
      }
    }

    while (missingChars === 0) {
      if (right - left < result[1] - result[0]) {
        result = [left, right]
      }

      if (str[left] in counts) {
        counts[str[left]]--
        if (counts[str[left]] === 0) {
          missingChars++
        }
      }
      left++
    }
  }

  console.log("COUNTS: ", counts)
  console.log("MISSING CHARS: ", missingChars)
  console.log("RESULT: ", result)

  if (result[1] === Infinity) {
    return ""
  } else {
    return str.slice(result[0], result[1] + 1)
  }
}

console.log(minWindow("ADOBECODEBANC", "ABC")) // returns true "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

try {
  module.exports = minWindow
} catch (error) {}
