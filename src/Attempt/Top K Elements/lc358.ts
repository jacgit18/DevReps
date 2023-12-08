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


class MaxHeap {
    heap: [number, string][];
  
    constructor() {
      this.heap = [];
    }
  
    push(char: string, count: number) {
      this.heap.push([count, char]);
      this.heap.sort((a, b) => b[0] - a[0]);
    }
  
    pop(): [number, string] | undefined {
      return this.heap.shift();
    }
  
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  }
  
   const rearrangeStringBruteForce = (s: string, k: number): string =>{
 
  
    return " ";
  }

   
  const rearrangeStringNaiveImp = (s: string, k: number): string =>{
 
  
    return " ";
  }

   
  const rearrangeStringNaiveDec = (s: string, k: number): string =>{
 
  
    return " ";
  }

   
  const rearrangeStringOptimal = (s: string, k: number): string =>{
 
  
    return " ";
  }
  
  // Example usage:
  // console.log(rearrangeString("aabbcc", 3)); // Output: "abcabc"
  // console.log(rearrangeString("aaabc", 3)); // Output: ""
  // console.log(rearrangeString("aaadbbcc", 2)); // Output: "abacabcd"
  

  export const rearrangeString = {
    rearrangeStringBruteForce,
    rearrangeStringNaiveImp,
    rearrangeStringNaiveDec,
    rearrangeStringOptimal
    }