// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// https://leetcode.com/problems/game-of-life/

// Example 1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.

const gameOfLifeBruteForce = (board: number[][]): void => {}
const gameOfLifeNaiveImp = (board: number[][]): void => {}
const gameOfLifeNaiveDec = (board: number[][]): void => {}
const gameOfLifeOptimal = (board: number[][]): void => {}

// // Example usage:
// const board1 = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ]
// gameOfLife(board1)
// console.log(board1)

// const board2 = [
//   [1, 1],
//   [1, 0],
// ]
// gameOfLife(board2)
// console.log(board2)

export const gameOfLife = {
  gameOfLifeBruteForce,
  gameOfLifeNaiveImp,
  gameOfLifeNaiveDec,
  gameOfLifeOptimal,
}
