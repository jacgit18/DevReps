// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 

// Constraints:

// 1 <= task.length <= 104
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].

class MaxHeap {
    heap: number[] = [];
  
    push(val: number) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    pop(): number {
      if (this.isEmpty()) {
        throw new Error('Heap is empty');
      }
  
      const top = this.heap[0];
      const last = this.heap.pop() as number;
  
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
  
        if (this.heap[currentIdx] > this.heap[parentIdx]) {
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
          this.heap[leftChildIdx] > this.heap[largestChildIdx]
        ) {
          largestChildIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.heap.length &&
          this.heap[rightChildIdx] > this.heap[largestChildIdx]
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
  
  export const leastInterval = (tasks: string[], n: number): number => {
    const taskFrequency: Record<string, number> = {};
    for (const task of tasks) {
      taskFrequency[task] = (taskFrequency[task] || 0) + 1;
    }
  
    const maxHeap = new MaxHeap();
  
    for (const task in taskFrequency) {
      if (taskFrequency.hasOwnProperty(task)) {
        maxHeap.push(taskFrequency[task]);
      }
    }
  
    let totalTime = 0;
  
    while (maxHeap.size() > 0) {
      const tempTasks: number[] = [];
  
      for (let i = 0; i <= n; i++) {
        if (maxHeap.size() > 0) {
          tempTasks.push(maxHeap.pop() - 1);
        }
      }
  
      for (const task of tempTasks) {
        if (task > 0) {
          maxHeap.push(task);
        }
      }
  
      totalTime += maxHeap.size() > 0 ? n + 1 : tempTasks.length;
    }
  
    return totalTime;
  };
  
  // Example usage:
//   const tasks1 = ["A", "A", "A", "B", "B", "B"];
//   const n1 = 2;
//   console.log(leastInterval(tasks1, n1)); // Output: 8
  
//   const tasks2 = ["A", "A", "A", "B", "B", "B"];
//   const n2 = 0;
//   console.log(leastInterval(tasks2, n2)); // Output: 6
  
//   const tasks3 = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
//   const n3 = 2;
//   console.log(leastInterval(tasks3, n3)); // Output: 16
  