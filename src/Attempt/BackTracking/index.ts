// Subset/Backtracking pattern
import { sudokuSolver } from "./SudokuSolverSolution";
import { letterCombinations } from "./lc17";
import { diffWaysToCompute } from "./lc241";
import { gameOfLife } from "./lc289";
import { combinationSum } from "./lc39";
import { findDuplicatesCyclic } from "./lc442";
import { permute } from "./lc46";
import { subsets } from "./lc78";
import { letterCasePermutation } from "./lc784";
import { subsetsWithDup } from "./lc90";

export const AttemptBacktrack  = {
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
