// Dynamic Importing: Instead of importing all functions at once,
// you can dynamically import only the functions you need at runtime.
// This can reduce the initial loading time.
// const { pair_with_target_sum_Two_Pointer, pair_with_target_sum_map } = await import("./lc1");
import { pair_with_target_sum } from "../TwoPointers/lc1";
import { maxArea } from "../TwoPointers/lc11";
import { maxProfit } from "../TwoPointers/lc121";
import { isPalindrome } from "../TwoPointers/lc125";
import { threeSum } from "../TwoPointers/lc15";
import { threeSumClosest } from "../TwoPointers/lc16";
import { fourSum } from "../TwoPointers/lc18";
import { threeSumSmaller } from "../TwoPointers/lc259";
import { removeDuplicates } from "../TwoPointers/lc26";
import { characterReplacement } from "../TwoPointers/lc424";
import { findUnsortedSubarray } from "../TwoPointers/lc581";
import { numSubarrayProductLessThanK } from "../TwoPointers/lc713";
import { sortColors } from "../TwoPointers/lc75";
import { backspaceCompare } from "../TwoPointers/lc844";
import { sortedSquares } from "../TwoPointers/lc977";
import { revString } from "./lc344";

export const SolutionTwoPointer = {
  lc1: pair_with_target_sum,
  lc11: maxArea,
  lc15: threeSum,
  lc16: threeSumClosest,
  lc18: fourSum,
  lc26: removeDuplicates,
  lc75: sortColors,
  lc121: maxProfit,
  lc125: isPalindrome,
  lc259: threeSumSmaller,
  lc344: revString,
  lc424: characterReplacement,
  lc581: findUnsortedSubarray,
  lc713: numSubarrayProductLessThanK,
  lc844: backspaceCompare,
  lc977: sortedSquares,
};
