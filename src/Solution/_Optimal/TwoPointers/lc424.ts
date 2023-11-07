function characterReplacementTwoPointer(s: string, k: number): number {
  const charFreq: number[] = new Array(26).fill(0);
  let maxLen = 0;
  let maxCharFreq = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const rightCharIdx: number = s.charCodeAt(right) - "A".charCodeAt(0);
    ++charFreq[rightCharIdx];
    maxCharFreq = Math.max(maxCharFreq, charFreq[rightCharIdx]);

    const charReplaced: number = right - left + 1 - maxCharFreq;

    if (charReplaced > k) {
      const leftCharIdx: number = s.charCodeAt(left) - "A".charCodeAt(0);
      --charFreq[leftCharIdx];
      ++left;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    ++right;
  }
  return maxLen;
}


const characterReplacementSlidingWindow = (s: string, k: number): number => {
  let [windowStart, windowEnd] = [0, 0];
  let [currentLetter, nextLetter] = [s[windowStart], s[windowStart + 1]];
  let maxRepeatStringLength = 0;
  let repeatString = "";

  if (s.length === 0 || k < 1) return 0;
  let count = 0;
  while (windowStart < s.length) {
    if (k === 0) {
      return maxRepeatStringLength;
    }

    if (currentLetter === nextLetter) {
      repeatString += currentLetter;
      maxRepeatStringLength = Math.max(maxRepeatStringLength, repeatString.length);
      windowStart++;
    }

    if (currentLetter !== nextLetter) {
      currentLetter = nextLetter;
      k--;
      windowEnd++;
    }
  }
  return maxRepeatStringLength
};







export { characterReplacementSlidingWindow, characterReplacementTwoPointer };

// console.log(length_of_longest_substring("ABAB", 2)) // 4
// console.log(length_of_longest_substring("AABABBA", 1)) // 4
// console.log(length_of_longest_substring("ABCDE", 1)) // 2
// console.log(length_of_longest_substring("AAAA", 2)) // 4
// console.log(length_of_longest_substring("AAAB", 0)) // 3
// console.log(length_of_longest_substring("AABA", 0)) // 2