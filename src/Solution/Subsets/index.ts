// Subset/Backtracking pattern
import { robotPaths } from "../Subsets/BacktrackMatrix"
import { matrix } from "../Subsets/MockIntMatrix"
import { sudokuSolver } from "../Subsets/SudokuSolverSolution"
import { letterCombinationsBackTrack } from "../Subsets/lc17"
import { diffWaysToCompute } from "../Subsets/lc241"
import { gameOfLife } from "../Subsets/lc289"
import { combinationSum } from "../Subsets/lc39"
import { findDuplicatesBackTrack, findDuplicatesCyclic } from "../Subsets/lc442"
import { permute } from "../Subsets/lc46"
import { subsets } from "../Subsets/lc78"
import { letterCasePermutation } from "../Subsets/lc784"
import { subsetsWithDup } from "../Subsets/lc90"


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
