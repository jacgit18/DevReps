// Subset/Backtracking pattern
import { sudokuSolver } from "./SudokuSolver"
import { letterCombinations } from "./lc17"
import { generateParenthesis } from "./lc22"
import { diffWaysToCompute } from "./lc241"
import { gameOfLife } from "./lc289"
import { generateAbbreviations } from "./lc320"
import { combinationSum } from "./lc39"
import { findDuplicates } from "./lc442"
import { permute } from "./lc46"
import { subsets } from "./lc78"
import { letterCasePermutation } from "./lc784"
import { subsetsWithDup } from "./lc90"
import { generateTrees } from "./lc95"
import { numTrees } from "./lc96"

export const AttemptBacktrack = {
  sudoku: sudokuSolver,
  lc17: letterCombinations,
  lc22: generateParenthesis,
  lc39: combinationSum,
  lc46: permute,
  lc78: subsets,
  lc90: subsetsWithDup,
  lc95: generateTrees,
  lc96: numTrees,
  lc241: diffWaysToCompute,
  lc289: gameOfLife,
  lc320: generateAbbreviations,
  lc442: findDuplicates,
  lc784: letterCasePermutation,
}
