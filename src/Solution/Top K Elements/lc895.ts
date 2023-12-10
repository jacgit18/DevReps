// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

// Example 1:

// Input
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].

// Constraints:

// 0 <= val <= 109
// At most 2 * 104 calls will be made to push and pop.
// It is guaranteed that there will be at least one element in the stack before calling pop.

export class FreqStack {
  freqMap: Map<number, number>
  elementMap: Map<number, number[]>
  maxFreq: number

  constructor() {
    this.freqMap = new Map()
    this.elementMap = new Map()
    this.maxFreq = 0
  }

  push(val: number): void {
    const freq = (this.freqMap.get(val) || 0) + 1
    this.freqMap.set(val, freq)

    if (!this.elementMap.has(freq)) {
      this.elementMap.set(freq, [])
    }

    this.elementMap.get(freq)?.push(val)

    this.maxFreq = Math.max(this.maxFreq, freq)
  }

  pop(): number {
    const maxFreqElements = this.elementMap.get(this.maxFreq) as number[]
    const poppedElement = maxFreqElements.pop()

    if (maxFreqElements.length === 0) {
      this.maxFreq--
    }

    if (typeof poppedElement === "undefined") {
      throw new Error("Popped element is undefined.") // Handle this case as needed
    }

    this.freqMap.set(poppedElement, (this.freqMap.get(poppedElement) as number) - 1)

    return poppedElement
  }
}

// Example usage:
//   const freqStack = new FreqStack();
//   freqStack.push(5);
//   freqStack.push(7);
//   freqStack.push(5);
//   freqStack.push(7);
//   freqStack.push(4);
//   freqStack.push(5);
//   console.log(freqStack.pop()); // Output: 5
//   console.log(freqStack.pop()); // Output: 7
//   console.log(freqStack.pop()); // Output: 5
//   console.log(freqStack.pop()); // Output: 4

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
