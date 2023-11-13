// A helper function that returns a set of all valid candidates for a given cell in the board
function getCandidates(board: string[][], row: number, col: number): number[] {
  // For some empty cell board[row][col], what possible characters can be placed into this cell
  // that aren't already placed in the same row, column, and sub-board?

  // At the beginning, we don't have any candidates
  let candidates: number[] = []

  // For each character, add it to the candidate list
  // only if there's no collision, i.e. that character
  // doesn't already exist in the same row, column,
  // and sub-board. Notice the top-left corner of (row, col)'s
  // sub-board is (row - row % 3, col - col % 3).
  for (let chr = 1; chr <= 9; ++chr) {
    let collision = false

    for (let i = 0; i < board.length; ++i) {
      if (
        board[row][i] === chr.toString() ||
        board[i][col] === chr.toString() ||
        board[Math.floor(row - (row % 3) + i / 3)][Math.floor(col - (col % 3) + (i % 3))] ===
          chr.toString()
      ) {
        collision = true
        break
      }
    }

    if (!collision) {
      candidates.push(chr)
    }
  }

  return candidates
}

export const sudokuSolver = (board: string[][]): boolean =>{
  // # For each empty cell, consider 'newCandidates', the
  // # set of possible candidate values that can
  // # be placed into that cell.

  let row = -1
  let col = -1
  let candidates: number[] | null = null

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        const newCandidates = getCandidates(board, r, c)
        // # Then, we want to keep the smallest
        // # sized 'newCandidates', plus remember the
        // # position where it was found

        // # If we have not found any empty cell, then
        // # the whole board is filled already
        if (candidates === null || newCandidates.length < candidates.length) {
          // # The tried value val didn't work so restore
          // # the (row, col) cell back to '.'
          candidates = newCandidates
          row = r
          col = c
        }
      }
    }
  }

  if (candidates === null) return true
  // # For each possible value that can be placed
  // # in position (row, col), let's
  // # place that value and then recursively query
  // # whether the board can be solved.  If it can,
  // # we are done.
  for (let val of candidates) {
    board[row][col] = val.toString()

    if (sudokuSolver(board)) return true

    board[row][col] = "."
  }
  // # Otherwise, there is no value that can be placed
  // # into position (row, col) to make the
  // # board solved
  return false
}

const currentBoard: string[][] = [
  [".", ".", ".", "7", ".", ".", "3", ".", "1"],
  ["3", ".", ".", "9", ".", ".", ".", ".", "."],
  [".", "4", ".", "3", "1", ".", "2", ".", "."],
  [".", "6", ".", "6", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", "8", ".", "4", "."],
  [".", ".", "6", ".", "2", "1", ".", "5", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "8"],
  ["8", ".", "5", ".", ".", "4", ".", ".", "."],
]

console.log("Edge case one", sudokuSolver(currentBoard))
