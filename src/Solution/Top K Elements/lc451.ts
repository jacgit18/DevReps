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



class MaxHeap {
    heap: [string, number][] = [];
  
    push(val: [string, number]) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    pop(): [string, number] {
      if (this.isEmpty()) {
        throw new Error('Heap is empty');
      }
  
      const top = this.heap[0];
      const last = this.heap.pop() as [string, number];
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown();
      }
  
      return top;
    }
  
    size(): number {
      return this.heap.length;
    }
  
    private heapifyUp() {
      let currentIdx = this.heap.length - 1;
  
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
  
        if (this.heap[currentIdx][1] > this.heap[parentIdx][1]) {
          this.swap(currentIdx, parentIdx);
          currentIdx = parentIdx;
        } else {
          break;
        }
      }
    }
  
    private heapifyDown() {
      let currentIdx = 0;
  
      while (true) {
        const leftChildIdx = 2 * currentIdx + 1;
        const rightChildIdx = 2 * currentIdx + 2;
        let largestChildIdx = currentIdx;
  
        if (
          leftChildIdx < this.heap.length &&
          this.heap[leftChildIdx][1] > this.heap[largestChildIdx][1]
        ) {
          largestChildIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.heap.length &&
          this.heap[rightChildIdx][1] > this.heap[largestChildIdx][1]
        ) {
          largestChildIdx = rightChildIdx;
        }
  
        if (largestChildIdx !== currentIdx) {
          this.swap(currentIdx, largestChildIdx);
          currentIdx = largestChildIdx;
        } else {
          break;
        }
      }
    }
  
    private swap(i: number, j: number) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    private isEmpty(): boolean {
      return this.heap.length === 0;
    }
  }
  
  export const frequencySort = (s: string): string => {
    const frequencyMap: Record<string, number> = {};
    for (const char of s) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    const maxHeap = new MaxHeap();
  
    for (const char in frequencyMap) {
      if (frequencyMap.hasOwnProperty(char)) {
        maxHeap.push([char, frequencyMap[char]]);
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
  