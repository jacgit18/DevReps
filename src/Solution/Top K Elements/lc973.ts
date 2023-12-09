// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

// Constraints:

// 1 <= k <= points.length <= 104
// -104 <= xi, yi <= 104

class MaxHeap {
    heap: [number, number][] = [];
  
    push(point: [number, number]) {
      this.heap.push(point);
      this.heapifyUp();
    }
  
    pop(): [number, number] {
      if (this.isEmpty()) {
        throw new Error('Heap is empty');
      }
  
      const top = this.heap[0];
      const last = this.heap.pop() as [number, number];
  
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
  
        if (this.distance(this.heap[currentIdx]) > this.distance(this.heap[parentIdx])) {
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
          this.distance(this.heap[leftChildIdx]) > this.distance(this.heap[largestChildIdx])
        ) {
          largestChildIdx = leftChildIdx;
        }
  
        if (
          rightChildIdx < this.heap.length &&
          this.distance(this.heap[rightChildIdx]) > this.distance(this.heap[largestChildIdx])
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
  
    private distance(point: [number, number]): number {
      return point[0] ** 2 + point[1] ** 2;
    }
  }
  
  export const kClosest = (points: number[][], k: number): number[][] => {
    const maxHeap = new MaxHeap();
  
    for (const point of points) {
      maxHeap.push(point as [number, number]);
      if (maxHeap.size() > k) {
        maxHeap.pop();
      }
    }
  
    return maxHeap.heap;
  };
  
  // Example usage:
//   const points1 = [[1, 3], [-2, 2]];
//   const k1 = 1;
//   console.log(kClosest(points1, k1)); // Output: [[-2, 2]]
  
//   const points2 = [[3, 3], [5, -1], [-2, 4]];
//   const k2 = 2;
//   console.log(kClosest(points2, k2)); // Output: [[3, 3], [-2, 4]]
  