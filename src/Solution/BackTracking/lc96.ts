// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:

// Input: n = 3
// Output: 5

// Example 2:

// Input: n = 1
// Output: 1

// Constraints:

// 1 <= n <= 19

export const numTrees = (n: number): number => {
  const catalan: number[] = new Array(n + 1).fill(0)

  // Base case: there is one unique BST with 0 or 1 nodes.
  catalan[0] = catalan[1] = 1

  // Calculate Catalan numbers using dynamic programming.
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      catalan[i] += catalan[j] * catalan[i - 1 - j]
    }
  }

  return catalan[n]
}

// Example usage:
// console.log(numTrees(3)); // Output: 5
// console.log(numTrees(1)); // Output: 1
