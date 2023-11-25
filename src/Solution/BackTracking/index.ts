// Subset/Backtracking pattern
import { robotPaths } from "./BacktrackMatrix"
import { matrix } from "./MockIntMatrix"
import { sudokuSolver } from "./SudokuSolverSolution"
import { letterCombinationsBackTrack } from "./lc17"
import { diffWaysToCompute } from "./lc241"
import { gameOfLife } from "./lc289"
import { combinationSum } from "./lc39"
import { findDuplicatesBackTrack, findDuplicatesCyclic } from "./lc442"
import { permute } from "./lc46"
import { subsets } from "./lc78"
import { letterCasePermutation } from "./lc784"
import { subsetsWithDup } from "./lc90"


export const OptimalSubsetBacktrackSolution = {
  backtrackOne: matrix,
  backtrackTwo: robotPaths,
  sudoku: sudokuSolver,
  lc17: letterCombinationsBackTrack,
  lc39: combinationSum,
  lc46: permute,
  lc78: subsets,
  lc90: subsetsWithDup,
  lc241: diffWaysToCompute,
  lc289: gameOfLife,
  lc442: findDuplicatesBackTrack,
  lc442Alt: findDuplicatesCyclic,
  lc784: letterCasePermutation,
}
