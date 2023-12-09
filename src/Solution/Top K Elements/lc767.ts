// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

 

// Example 1:

// Input: s = "aab"
// Output: "aba"

// Example 2:

// Input: s = "aaab"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.



import { MaxHeap } from "../../util/MaxHeapMakers";
  
  export const reorganizeString = (s: string): string => {
    const charFrequency: Record<string, number> = {};
  
    for (const char of s) {
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    const maxHeap = new MaxHeap();
  
    for (const char in charFrequency) {
      if (charFrequency.hasOwnProperty(char)) {
        maxHeap.add([char, charFrequency[char]]);
      }
    }
  
    let result = '';
    while (maxHeap.size() > 1) {
      const [char1, freq1] = maxHeap.pop();
      const [char2, freq2] = maxHeap.pop();
  
      result += char1;
      result += char2;
  
      if (freq1 - 1 > 0) {
        maxHeap.add([char1, freq1 - 1]);
      }
  
      if (freq2 - 1 > 0) {
        maxHeap.add([char2, freq2 - 1]);
      }
    }
  
    if (maxHeap.size() > 0) {
      const [lastChar, lastFreq] = maxHeap.pop();
  
      if (lastFreq > 1) {
        return '';
      }
  
      result += lastChar;
    }
  
    return result;
  };
  
  // Example usage:
  const s1 = 'aab';
//   console.log(reorganizeString(s1)); // Output: "aba"
  
//   const s2 = 'aaab';
//   console.log(reorganizeString(s2)); // Output: ""
  