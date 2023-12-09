// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

export class MedianFinder {
    private maxHeap: number[] = []; // Max heap for the left half
    private minHeap: number[] = []; // Min heap for the right half
  
    constructor() {}
  
    addNum(num: number): void {
      if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
        // Add to the max heap (left half)
        this.maxHeap.push(-num);
        this.heapifyMax();
      } else {
        // Add to the min heap (right half)
        this.minHeap.push(num);
        this.heapifyMin();
      }
  
      // Balance the heaps
      this.balanceHeaps();
    }
  
    findMedian(): number {
      if (this.maxHeap.length > this.minHeap.length) {
        return -this.maxHeap[0];
      } else {
        return (-this.maxHeap[0] + this.minHeap[0]) / 2;
      }
    }
  
    private heapifyMax(): void {
      let i = this.maxHeap.length - 1;
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.maxHeap[i] > this.maxHeap[parent]) {
          [this.maxHeap[i], this.maxHeap[parent]] = [
            this.maxHeap[parent],
            this.maxHeap[i],
          ];
          i = parent;
        } else {
          break;
        }
      }
    }
  
    private heapifyMin(): void {
      let i = this.minHeap.length - 1;
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.minHeap[i] < this.minHeap[parent]) {
          [this.minHeap[i], this.minHeap[parent]] = [
            this.minHeap[parent],
            this.minHeap[i],
          ];
          i = parent;
        } else {
          break;
        }
      }
    }
  
    private balanceHeaps(): void {
      if (this.maxHeap.length > this.minHeap.length + 1) {
        this.minHeap.push(-this.maxHeap[0]);
        this.heapifyMin();
        this.maxHeap[0] = -this.maxHeap.pop()!;
        this.heapifyMax();
      } else if (this.minHeap.length > this.maxHeap.length) {
        this.maxHeap.push(-this.minHeap[0]);
        this.heapifyMax();
        this.minHeap[0] = this.minHeap.pop()!;
        this.heapifyMin();
      }
    }
  }
  
  // Example usage:
//   const obj = new MedianFinder();
//   obj.addNum(1);
//   obj.addNum(2);
//   console.log(obj.findMedian()); // Output: 1.5
//   obj.addNum(3);
//   console.log(obj.findMedian()); // Output: 2.0
  

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */