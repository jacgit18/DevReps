// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

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
  
  export const topKFrequent = (nums: number[], k: number): number[] => {
    const frequencyMap: Record<number, number> = {};
    for (const num of nums) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    const minHeap = new MinHeap();
  
    for (const num in frequencyMap) {
      if (frequencyMap.hasOwnProperty(num)) {
        minHeap.push(parseInt(num));
        if (minHeap.size() > k) {
          minHeap.pop();
        }
      }
    }
  
    const result: number[] = [];
    while (minHeap.size() > 0) {
      result.unshift(minHeap.pop());
    }
  
    return result;
  };
  
  // Example usage:
//   const nums1 = [1, 1, 1, 2, 2, 3];
//   const k1 = 2;
//   console.log(topKFrequent(nums1, k1)); // Output: [1, 2]
  
//   const nums2 = [1];
//   const k2 = 1;
//   console.log(topKFrequent(nums2, k2)); // Output: [1]
  