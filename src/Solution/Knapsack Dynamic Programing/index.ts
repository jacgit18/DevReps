import { fibs } from "./Fib-Dynamic"
import { memoizeAddTo80 } from "./Memoization"
import { rob } from "./lc198"
import { coinChange } from "./lc322"
import { canPartition } from "./lc416"
import { findMaxForm } from "./lc474"
import { findTargetSumWays } from "./lc494"
import { longestPalindrome } from "./lc5"
import { change } from "./lc518"
import { mincostTickets } from "./lc983"
import { minStepsToOne } from "./minStepsToOne"

export const SolutionKnapSack = {
  lc5: longestPalindrome,
  lc198: rob,
  lc322: coinChange,
  lc416: canPartition,
  lc474: findMaxForm,
  lc494: findTargetSumWays,
  lc518: change,
  lc983: mincostTickets,
  dynamicMinStep: minStepsToOne,
  fibonacci: fibs,
  memTopDown: memoizeAddTo80,
}
