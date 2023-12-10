// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

export const searchMatrix = (matrix: number[][], target: number): boolean => {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0
  let right = m * n - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midValue = matrix[Math.floor(mid / n)][mid % n]

    if (midValue === target) {
      return true
    } else if (midValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}

// Example usage:
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));  // Output: true
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // Output: false
