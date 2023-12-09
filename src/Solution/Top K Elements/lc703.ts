// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 

// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8
 

// Constraints:

// 1 <= k <= 104
// 0 <= nums.length <= 104
// -104 <= nums[i] <= 104
// -104 <= val <= 104
// At most 104 calls will be made to add.
// It is guaranteed that there will be at least k elements in the array when you search for the kth element.


class MinHeap {
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
  
        if (this.heap[currentIdx] < this.heap[parentIdx]) {
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
        let smallestChildIdx = currentIdx;
  
        if (
          leftChildIdx < this.heap.length &&
          this.heap[leftChildIdx] < this.heap[smallestChildIdx]
        ) {
          smallestChildIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.heap.length &&
          this.heap[rightChildIdx] < this.heap[smallestChildIdx]
        ) {
          smallestChildIdx = rightChildIdx;
        }
  
        if (smallestChildIdx !== currentIdx) {
          this.swap(currentIdx, smallestChildIdx);
          currentIdx = smallestChildIdx;
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
  
  export class KthLargest {
    k: number;
    minHeap: MinHeap;
  
    constructor(k: number, nums: number[]) {
      this.k = k;
      this.minHeap = new MinHeap();
  
      for (const num of nums) {
        this.add(num);
      }
    }
  
    add(val: number): number {
      this.minHeap.push(val);
  
      if (this.minHeap.size() > this.k) {
        this.minHeap.pop();
      }
  
      return this.minHeap.size() > 0 ? this.minHeap.heap[0] : 0;
    }
  }
  
  // Example usage:
//   const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
//   console.log(kthLargest.add(3)); // Output: 4
//   console.log(kthLargest.add(5)); // Output: 5
//   console.log(kthLargest.add(10)); // Output: 5
//   console.log(kthLargest.add(9)); // Output: 8
//   console.log(kthLargest.add(4)); // Output: 8
  

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */