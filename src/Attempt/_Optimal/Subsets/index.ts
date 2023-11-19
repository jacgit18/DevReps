// Subset/Backtracking pattern
import { sudokuSolver } from "../Subsets/SudokuSolverSolution";
import { letterCombinations } from "../Subsets/lc17";
import { diffWaysToCompute } from "../Subsets/lc241";
import { gameOfLife } from "../Subsets/lc289";
import { combinationSum } from "../Subsets/lc39";
import { findDuplicatesCyclic } from "../Subsets/lc442";
import { permute } from "../Subsets/lc46";
import { subsets } from "../Subsets/lc78";
import { letterCasePermutation } from "../Subsets/lc784";
import { subsetsWithDup } from "../Subsets/lc90";

export const OptimalSubsetBacktrackAttempt  = {
  sudoku: sudokuSolver,
  lc17: letterCombinations,
  lc39: combinationSum,
  lc46: permute,
  lc78: subsets,
  lc90: subsetsWithDup,
  lc241: diffWaysToCompute,
  lc289: gameOfLife,
  lc442: findDuplicatesCyclic,
  lc784: letterCasePermutation,
};
