import { smallestSubarrayWithGivenSum, smallest_subarray_with_given_sumAlt } from "./SlidingWindow/lc209";
import { longest_substring_with_k_distinct } from "./SlidingWindow/lc340";
import { max_subarray_size_k } from "./SlidingWindow/lc53"
import { fruits_into_baskets } from "./SlidingWindow/lc904";
import { minWindow } from "./SlidingWindow/lc76"

import { characterReplacementTwoPointer } from "./TwoPointers/lc424";
import { palVaidaor } from "./TwoPointers/lc125";
// import { name,  } from "./Modified Binary Search/";





const OptimalSlidingWindSolution = {
    lc53: max_subarray_size_k,
    lc76: minWindow,
    lc209: smallestSubarrayWithGivenSum,
    lc209alt: smallest_subarray_with_given_sumAlt,
    lc340: longest_substring_with_k_distinct,
    lc904: fruits_into_baskets
  };




const OptimalTwoPointerSolution = {
    lc424:characterReplacementTwoPointer ,
    lc125: palVaidaor,
  };


  const OptimalModifiedBinarySearchSolution = {
    // lc: ,
    // lcalt: 
  };

  const OptimalNameSolution = {
    // lc: ,
    // lcalt: 
  };


  export const combinedSolutionExports = {
    OptimalModifiedBinarySearchSolution,
    OptimalNameSolution,
    OptimalSlidingWindSolution,
    OptimalTwoPointerSolution
};




