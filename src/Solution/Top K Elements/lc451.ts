// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 

// Constraints:

// 1 <= s.length <= 5 * 105
// s consists of uppercase and lowercase English letters and digits.

import { MaxHeap } from "../../util/MaxHeapMakers";

  export const frequencySort = (s: string): string => {
    const frequencyMap: Record<string, number> = {};
    for (const char of s) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    const maxHeap = new MaxHeap();
  
    for (const char in frequencyMap) {
      if (frequencyMap.hasOwnProperty(char)) {
        maxHeap.add([char, frequencyMap[char]]);
      }
    }
  
    let result = '';
  
    while (maxHeap.size() > 0) {
      const [char, frequency] = maxHeap.pop();
      result += char.repeat(frequency);
    }
  
    return result;
  };
  
  // Example usage:
//   const s1 = 'tree';
//   console.log(frequencySort(s1)); // Output: "eert" or "eetr"
  
//   const s2 = 'cccaaa';
//   console.log(frequencySort(s2)); // Output: "aaaccc" or "cccaaa"
  
//   const s3 = 'Aabb';
//   console.log(frequencySort(s3)); // Output: "bbAa" or "bbaA"
  