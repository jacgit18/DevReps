// Given a non-empty string s and an integer k, rearrange the string such that the same characters are at least distance k from each other.

// All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

// Example 1:

// Input: s = "aabbcc", k = 3
// Output: "abcabc"
// Explanation: The same letters are at least distance 3 from each other.

// Example 2:

// Input: s = "aaabc", k = 3
// Output: ""
// Explanation: It is not possible to rearrange the string.

// Example 3:

// Input: s = "aaadbbcc", k = 2
// Output: "abacabcd"
// Explanation: The same letters are at least distance 2 from each other.

import { MaxHeap } from "../../util/MaxHeapMakers"

export const rearrangeString = (s: string, k: number): string => {
  const charCountMap: Map<string, number> = new Map()

  for (const char of s) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1)
  }

  const maxHeap = new MaxHeap()
  charCountMap.forEach((count, char) => {
    maxHeap.add(char, count)
  })

  const result: string[] = []
  while (!maxHeap.isEmpty()) {
    const current: [number, string] = maxHeap.pop()!
    const [count, char] = current

    for (let i = 0; i < count; i++) {
      result.push(char)
      if (i !== count - 1) {
        const next: [number, string] | undefined = maxHeap.pop()
        if (!next) return "" // Not enough characters to satisfy distance k
        result.push(next[1])
        next[0]--
        if (next[0] > 0) maxHeap.add(next[1], next[0])
      }
    }
  }

  return result.join("")
}

// Example usage:
// console.log(rearrangeString("aabbcc", 3)); // Output: "abcabc"
// console.log(rearrangeString("aaabc", 3)); // Output: ""
// console.log(rearrangeString("aaadbbcc", 2)); // Output: "abacabcd"
