export const lengthOfLongestSubstring = (s: string): number => {
  const charIndexMap: Record<string, number> = {};
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    if (currentChar in charIndexMap && charIndexMap[currentChar] >= windowStart) {
      windowStart = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}


