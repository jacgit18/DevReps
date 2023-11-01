// You are given a string s and an integer k. You can choose any character of the string
// and change it to any
// other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can
//  get after performing the above operations.

// given string to change substring to so that the substring repeat and limited to k
// amount of changes in the string return max amount of repeated substring

/// count characters several ways of doing that use an array with a length of 26 elements
// with an intial subarray of 0 or empty object were we track count
// by passing current subarray value to object and giving intitial value of 0 or

// follow length of string comparing the windowEnd or rightPointer->
// subtract current character code which alts betwwen two values so in this case the diff alts between 0 to 1
// increment 1 to subarray or

const characterReplacementOne = (s, k) => {
  let [windowStart, windowEnd] = [0, 0]
  let [currentLetter, nextLetter] = [s[windowStart], s[windowStart + 1]]
  let maxRepeatStringLength = 0
  let repeatString = ""

  if (s.length === 0 || k < 1) return 0
  let count = 0
  while (windowStart < s.length) {
    if (k === 0) {
      return maxRepeatStringLength
    }

    if (currentLetter === nextLetter) {
      repeatString += currentLetter
      // repeatString.replace(repeatString.substring(''), currentLetter);
      maxRepeatStringLength = Math.max(maxRepeatStringLength, repeatString.length)
      windowStart++
    }

    if (currentLetter !== nextLetter) {
      currentLetter = nextLetter
      // console.log(currentLetter, nextLetter)
      k--
      windowEnd++
    }
  }
  // return maxRepeatStringLength
}

// console.log(characterReplacement("ABAB",2)); // 4
// console.log(characterReplacement("AABABBA",1)); // 4
// AABABBA
// AABBBBA

try {
  module.exports = characterReplacement
} catch (error) {}

const length_of_longest_substring = function (s, k) {
  let [windowEnd, windowStart, maxLength, maxRepeat, charCount] = [0, 0, 0, 0, {}]
  //  let charCount = new Map();
  //  let charCount = {};
  let repeatCheck = new Set(s)

  while (windowEnd < s.length + 1) {
    let rightChar = s[windowEnd]

    if (repeatCheck.size === 1) {
      return s.length
    }

    if (!(rightChar in charCount)) {
      charCount[rightChar] = 0
    }

    ++charCount[rightChar]
    maxRepeat = Math.max(maxRepeat, charCount[rightChar])

    const charReplaced = windowEnd - windowStart + 1 - maxRepeat

    if (charReplaced > k) {
      const leftChar = s[windowStart]
      --charCount[leftChar]
      ++windowStart
    }
    maxLength = Math.max(windowStart, windowEnd - windowStart + 1)
    ++windowEnd
    if (
      charCount[rightChar] <= maxRepeat &&
      windowEnd >= s.length - 1 &&
      charCount[rightChar] === 1
    ) {
      return maxLength

      //  if(--charCount[key] > 0){
      //    return charCount[key].length
      //  } ;
    } else if (
      (k === 0 && Object.keys(charCount).length > 1) ||
      (Object.keys(charCount).length === 1 &&
        charCount[rightChar] === maxRepeat &&
        windowEnd >= s.length - 1)
    ) {
      return maxRepeat
    } else if (Object.keys(charCount).length === 1 && windowEnd - 1 >= s.length - 1) {
      return maxLength + 1
    }
    if (k < 1) {
      if (rightChar !== s[windowEnd + 1]) {
        return 2
      }
      return s.length - 1
    }
  }

  // console.log(charCount)

  // let count = Object.keys(charCount).map(function(key, index){

  // return charCount[key]
  // })

  // if(charCount[rightChar] < 1){
  //     return maxLength - 1
  // }
  // return maxLength;
}

// 74 steps pointer approach 72 steps
console.time("Sliding")
console.log(length_of_longest_substring("ABAB", 2)) // 4
console.log(length_of_longest_substring("AABABBA", 1)) // 4
console.log(length_of_longest_substring("ABCDE", 1)) // 2
console.log(length_of_longest_substring("AAAA", 2)) // 4
console.log(length_of_longest_substring("AAAB", 0)) // 3
console.log(length_of_longest_substring("AABA", 0)) // 2

console.timeEnd("Sliding")
