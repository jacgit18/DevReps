// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

export const generateParenthesis = (n: number): string[] => {
  const result: string[] = []

  function generateHelper(current: string, openCount: number, closeCount: number): void {
    if (current.length === 2 * n) {
      result.push(current)
      return
    }

    if (openCount < n) {
      generateHelper(current + "(", openCount + 1, closeCount)
    }

    if (closeCount < openCount) {
      generateHelper(current + ")", openCount, closeCount + 1)
    }
  }

  generateHelper("", 0, 0)
  return result
}

// Example usage:
// const result1 = generateParenthesis(3);
// console.log(result1);

// const result2 = generateParenthesis(1);
// console.log(result2);
