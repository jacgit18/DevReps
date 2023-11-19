import { findMin } from "../Modified Binary Search/lc153"
import { lengthOfLIS } from "../Modified Binary Search/lc300"
import { searchRanger } from "../Modified Binary Search/lc33"
import { searchRange } from "../Modified Binary Search/lc34"
import { searchInsert } from "../Modified Binary Search/lc35"
import { findClosestElements } from "../Modified Binary Search/lc658"
import { searchInArrayReader } from "../Modified Binary Search/lc702"
import { searchBin } from "../Modified Binary Search/lc704"
import { nextGreatestLetter } from "../Modified Binary Search/lc744"
import { search } from "../Modified Binary Search/lc81"


export const OptimalModifiedBinarySearchSolution = {
  lc33: searchRanger,
  lc34: searchRange,
  lc35: searchInsert,
  lc81: search,
  lc153: findMin,
  lc300: lengthOfLIS,
  lc658: findClosestElements,
  lc702: searchInArrayReader,
  lc704: searchBin,
  lc744: nextGreatestLetter,
}
