import { longestOnes } from "./lc1004";
import {
  smallestSubarrayWithGivenSum,
  smallest_subarray_with_given_sumAlt,
} from "./lc209";
import { lengthOfLongestSubstring } from "./lc3";
import { findSubstring } from "./lc30";
import { longest_substring_with_k_distinct } from "./lc340";
import { findAnagrams, findAnagramsTwoPointer } from "./lc438";
import { maxSubArray } from "./lc53";
import { checkInclusion } from "./lc567";
import { minWindow } from "./lc76";
import { totalFruit } from "./lc904";

export const OptimalSlidingWindSolution = {
  lc3: lengthOfLongestSubstring,
  lc30: findSubstring,
  lc53: maxSubArray,
  lc76: minWindow,
  lc209: smallestSubarrayWithGivenSum,
  lc209alt: smallest_subarray_with_given_sumAlt,
  lc340: longest_substring_with_k_distinct,
  lc438: findAnagramsTwoPointer,
  lc438Alt: findAnagrams,
  ls567: checkInclusion,
  lc904: totalFruit,
  lc1004: longestOnes,
};
