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






export { characterReplacementTwoPointer };

