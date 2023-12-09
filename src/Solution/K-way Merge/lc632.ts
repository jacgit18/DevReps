// You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.

// We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

 

// Example 1:

// Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
// Output: [20,24]
// Explanation: 
// List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
// List 2: [0, 9, 12, 20], 20 is in range [20,24].
// List 3: [5, 18, 22, 30], 22 is in range [20,24].
// Example 2:

// Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
// Output: [1,1]
 

// Constraints:

// nums.length == k
// 1 <= k <= 3500
// 1 <= nums[i].length <= 50
// -105 <= nums[i][j] <= 105
// nums[i] is sorted in non-decreasing order.


class Element {
    constructor(public value: number, public listIndex: number, public elementIndex: number) {}
}

export const smallestRange = (nums: number[][]): number[] => {
    const minHeap: Element[] = [];
    let maxElement = Number.MIN_SAFE_INTEGER;
    let rangeStart = 0;
    let rangeEnd = Number.MAX_SAFE_INTEGER;

    // Initialize the heap with the first element from each list
    for (let i = 0; i < nums.length; i++) {
        const element = new Element(nums[i][0], i, 0);
        minHeap.push(element);
        maxElement = Math.max(maxElement, nums[i][0]);
    }

    // Convert the array into a min heap
    for (let i = Math.floor(minHeap.length / 2) - 1; i >= 0; i--) {
        heapify(minHeap, i);
    }

    // Perform the k-way merge
    while (minHeap.length === nums.length) {
        const currentRange = maxElement - minHeap[0].value;

        if (currentRange < rangeEnd - rangeStart) {
            rangeStart = minHeap[0].value;
            rangeEnd = maxElement;
        }

        const topElement = minHeap.shift()!;
        const nextElementIndex = topElement.elementIndex + 1;

        if (nextElementIndex < nums[topElement.listIndex].length) {
            const nextElement = new Element(nums[topElement.listIndex][nextElementIndex], topElement.listIndex, nextElementIndex);
            minHeap.push(nextElement);
            maxElement = Math.max(maxElement, nextElement.value);
            heapify(minHeap, 0);
        }
    }

    return [rangeStart, rangeEnd];
};

// Helper function to maintain the min heap property
const heapify = (heap: Element[], i: number): void => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < heap.length && heap[left].value < heap[smallest].value) {
        smallest = left;
    }

    if (right < heap.length && heap[right].value < heap[smallest].value) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, smallest);
    }
};
