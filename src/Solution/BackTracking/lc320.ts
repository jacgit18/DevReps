// Write a function to generate the generalized abbreviations of a word.

// Note: The order of the output does not matter.

// Example:

// Input: "word"
// Output:
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

export const generateAbbreviations = (word: string): string[] => {
  const result: string[] = []

  function backtrack(current: string, position: number, count: number): void {
    if (position === word.length) {
      if (count > 0) {
        current += count.toString()
      }
      result.push(current)
      return
    }

    // Abbreviate the current character
    backtrack(current, position + 1, count + 1)

    // Include the current character without abbreviation
    backtrack(current + (count > 0 ? count.toString() : "") + word[position], position + 1, 0)
  }

  backtrack("", 0, 0)
  return result
}

// // Example usage:
// const input = "word";
// const output = generateAbbreviations(input);
// console.log(output);
