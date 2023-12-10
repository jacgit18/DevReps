import { longestOnes } from "./lc1004"
import { smallestSubarrayWithGivenSum } from "./lc209"
import { lengthOfLongestSubstring } from "./lc3"
import { findSubstring } from "./lc30"
import { longest_substring_with_k_distinct } from "./lc340"
import { findAnagrams } from "./lc438"
import { maxSubArray } from "./lc53"
import { checkInclusion } from "./lc567"
import { minWindow } from "./lc76"
import { totalFruit } from "./lc904"

export const AttemptSlidingWindow = {
  lc3: lengthOfLongestSubstring,
  lc30: findSubstring,
  lc53: maxSubArray,
  lc76: minWindow,
  lc209: smallestSubarrayWithGivenSum,
  lc340: longest_substring_with_k_distinct,
  lc438: findAnagrams,
  ls567: checkInclusion,
  lc904: totalFruit,
  lc1004: longestOnes,
}
