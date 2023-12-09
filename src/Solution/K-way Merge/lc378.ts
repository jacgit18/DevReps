// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

 

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2
 

// Follow up:

// Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
// Could you solve the problem in O(n) time complexity? The solution may be too advanced for an interview but you may find reading this paper fun.


export const kthSmallest = (matrix: number[][], k: number): number => {
    const n = matrix.length;

    // Priority queue to store elements from the first column
    const minHeap: [number, number, number][] = [];

    // Push the first element from each row into the heap
    for (let i = 0; i < n; i++) {
        minHeap.push([matrix[i][0], i, 0]);
    }

    // Perform k-1 merges to find the kth smallest element
    for (let i = 0; i < k - 1; i++) {
        const [val, row, col] = minHeap.shift()!;

        // If the current element is not the last in its row, push the next element in the same row into the heap
        if (col + 1 < n) {
            minHeap.push([matrix[row][col + 1], row, col + 1]);
        }
    }

    // The element at the top of the heap is the kth smallest element
    return minHeap[0][0];
};
