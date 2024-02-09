// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:
/**
1 > 2 > 3
        v
4 > 5   6
^       v
7 < 8 < 9
*/

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]


// Example 2:
/**
1 >  2 >  3 > 4
              V
5 >  6 > 7    8
^             v
9 < 10 < 11 < 12
*/


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100




const spiralOrderBruteForce = (matrix: number[][]): number[] => {
    return [0]
  }
  
  const spiralOrderNaiveImp = (matrix: number[][]): number[] => {
    const result = [];

    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
  
        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
  
        // Traverse bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
  
        // Traverse left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
  
    return result;
  }
  
  const spiralOrderNaiveDec = (matrix: number[][]): number[] => {
    return [0]
  }

  function spiralOrderRecursive(matrix: number[][]): number[] {
    const result: number[] = [];

    function spiralTraversal(top: number, bottom: number, left: number, right: number): void {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }

        // Traverse right column
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }

        // Traverse bottom row
        if (top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
        }

        // Traverse left column
        if (left < right) {
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }

        // Move to the inner layer
        if (top + 1 <= bottom - 1 && left + 1 <= right - 1) {
            spiralTraversal(top + 1, bottom - 1, left + 1, right - 1);
        }
    }

    if (matrix.length === 0) {
        return result;
    }

    spiralTraversal(0, matrix.length - 1, 0, matrix[0].length - 1);
    return result
  }
  
  const spiralOrderOptimal = (matrix: number[][]): number[] => {
    return [0]
  }
  
  export const spiralOrder = {
    spiralOrderBruteForce,
    spiralOrderNaiveImp,
    spiralOrderNaiveDec,
    spiralOrderRecursive,
    spiralOrderOptimal
  }