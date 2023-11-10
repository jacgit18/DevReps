// Given two strings s and t of lengths m and n respectively, return the minimum window substring
// of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

export const minWindow = (str: string, targets: string): string => {
  const counts: Record<string, number> = {};
  let missingChars = targets.length;
  let result: [number, number] = [0, Infinity];

  for (let i = 0; i < targets.length; i++) {
    counts[targets[i]] = 0;
  }

  let left = 0;
  for (let right = 0; right < str.length; right++) {
    if (str[right] in counts) {
      counts[str[right]]++;
      if (counts[str[right]] === 1) {
        missingChars--;
      }
    }

    while (missingChars === 0) {
      if (right - left < result[1] - result[0]) {
        result = [left, right];
      }

      if (str[left] in counts) {
        counts[str[left]]--;
        if (counts[str[left]] === 0) {
          missingChars++;
        }
      }
      left++;
    }
  }

  if (result[1] === Infinity) {
    return "";
  } else {
    return str.slice(result[0], result[1] + 1);
  }
};



