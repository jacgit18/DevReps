function recursiveMatrixTraversal(
    matrix: number[][],
    row: number,
    col: number,
    action: (value: number) => void
  ) {
    // Check if the row and column are within valid bounds
    if (
      row < 0 ||
      col < 0 ||
      row >= matrix.length ||
      col >= matrix[0].length
    ) {
      return;
    }
  
    // Perform the action on the current cell
    action(matrix[row][col]);
  
    // Recursively traverse in all four directions: up, down, left, right
    recursiveMatrixTraversal(matrix, row - 1, col, action); // Up
    recursiveMatrixTraversal(matrix, row + 1, col, action); // Down
    recursiveMatrixTraversal(matrix, row, col - 1, action); // Left
    recursiveMatrixTraversal(matrix, row, col + 1, action); // Right
  }
  
  // Example usage:
  const matrixTo: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // Define an action to perform on each cell (e.g., printing the value)
  function printValue(value: number) {
    console.log(`Visited cell with value: ${value}`);
  }
  
  // Start traversal from a specific cell (e.g., top-left corner)
  recursiveMatrixTraversal(matrixTo, 0, 0, printValue);
  