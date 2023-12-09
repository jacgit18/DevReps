// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

// For examples, if arr = [2,3,4], the median is 3.
// For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
// You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
// Explanation: 
// Window position                Median
// ---------------                -----
// [1  3  -1] -3  5  3  6  7        1
//  1 [3  -1  -3] 5  3  6  7       -1
//  1  3 [-1  -3  5] 3  6  7       -1
//  1  3  -1 [-3  5  3] 6  7        3
//  1  3  -1  -3 [5  3  6] 7        5
//  1  3  -1  -3  5 [3  6  7]       6

// Example 2:

// Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
// Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1



class SlidingWindowMedian {
    maxHeap: number[] = [];
    minHeap: number[] = [];
    countMap: { [key: number]: number } = {};
  
    add(num: number): void {
      if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
        this.maxHeap.push(-num);
        this.heapifyMax();
      } else {
        this.minHeap.push(num);
        this.heapifyMin();
      }
  
      this.balanceHeaps();
  
      // Increment count in the countMap
      this.countMap[num] = (this.countMap[num] || 0) + 1;
    }
  
    remove(num: number): void {
      if (num <= -this.maxHeap[0]) {
        this.removeElement(this.maxHeap, -num);
      } else {
        this.removeElement(this.minHeap, num);
      }
  
      this.balanceHeaps();
  
      // Decrement count in the countMap
      this.countMap[num] -= 1;
      if (this.countMap[num] === 0) {
        delete this.countMap[num];
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
  
    private removeElement(heap: number[], num: number): void {
      const index = heap.indexOf(num);
      heap[index] = heap.pop()!;
      this.heapifyDown(heap, index);
    }
  
    private heapifyDown(heap: number[], index: number): void {
      const n = heap.length;
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;
  
        if (left < n && heap[left] < heap[smallest]) {
          smallest = left;
        }
  
        if (right < n && heap[right] < heap[smallest]) {
          smallest = right;
        }
  
        if (smallest !== index) {
          [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
          index = smallest;
        } else {
          break;
        }
      }
    }
  
    getMedian(): number {
      if (this.maxHeap.length === this.minHeap.length) {
        return (-this.maxHeap[0] + this.minHeap[0]) / 2;
      } else {
        return -this.maxHeap[0];
      }
    }
  }
  
  export const medianSlidingWindow = (nums: number[], k: number): number[] => {
    const result: number[] = [];
    const windowMedian = new SlidingWindowMedian();
  
    for (let i = 0; i < nums.length; i++) {
      windowMedian.add(nums[i]);
  
      if (i >= k - 1) {
        result.push(windowMedian.getMedian());
        windowMedian.remove(nums[i - k + 1]);
      }
    }
  
    return result;
  };
  
  // Example usage:
//   const nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
//   const k1 = 3;
//   console.log(medianSlidingWindow(nums1, k1));
  // Output: [1.0, -1.0, -1.0, 3.0, 5.0, 6.0]
  
//   const nums2 = [1, 2, 3, 4, 2, 3, 1, 4, 2];
//   const k2 = 3;
//   console.log(medianSlidingWindow(nums2, k2));
  // Output: [2.0, 3.0, 3.0, 3.0, 2.0, 3.0, 2.0]
  