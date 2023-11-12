// Two Pointer 
import { pair_with_target_sum_Two_Pointer, pair_with_target_sum_map } from "./TwoPointers/lc1";
import { maxArea } from "./TwoPointers/lc11";
import { palVaidaor } from "./TwoPointers/lc125";
import { search_triplets } from "./TwoPointers/lc15";
import { triplet_sum_close_to_target } from "./TwoPointers/lc16";
import { fourSum } from "./TwoPointers/lc18";
import { triplet_with_smaller_sum } from "./TwoPointers/lc259";
import { remove_element } from "./TwoPointers/lc26";
import { characterReplacementTwoPointer } from "./TwoPointers/lc424";
import { findUnsortedSubarray } from "./TwoPointers/lc581";
import { numSubarrayProductLessThanK } from "./TwoPointers/lc713";
import { sortColors } from "./TwoPointers/lc75";
import { backspaceCompare } from "./TwoPointers/lc844";
import { make_squares } from "./TwoPointers/lc977";



// Sliding Window
import { longestOnes } from "./SlidingWindow/lc1004";
import { smallestSubarrayWithGivenSum, smallest_subarray_with_given_sumAlt } from "./SlidingWindow/lc209";
import { lengthOfLongestSubstring } from "./SlidingWindow/lc3";
import { findSubstring } from "./SlidingWindow/lc30";
import { longest_substring_with_k_distinct } from "./SlidingWindow/lc340";
import { findAnagrams } from "./SlidingWindow/lc438";
import { max_subarray_size_k } from "./SlidingWindow/lc53";
import { checkInclusion } from "./SlidingWindow/lc567";
import { minWindow } from "./SlidingWindow/lc76";
import { fruits_into_baskets } from "./SlidingWindow/lc904";


// Merge Interval
import { canAttendMeetings } from "./Merge Intervals/lc252";
import { minMeetingRooms } from "./Merge Intervals/lc253";
import { merge } from "./Merge Intervals/lc56";
import { insertInterval } from "./Merge Intervals/lc57";
import { leastInterval } from "./Merge Intervals/lc621";
import { intervalIntersection } from "./Merge Intervals/lc986";


// Subset
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";
// import {  } from "./Subsets/";


// Modified Binary Search
// import {  } from "./Modified Binary Search/";
// import {  } from "./Modified Binary Search/";
// import {  } from "./Modified Binary Search/";
// import {  } from "./Modified Binary Search/";
// import {  } from "./Modified Binary Search/";
// import {  } from "./Modified Binary Search/";



// Fast Slow  Pointer
// import {  } from "./Fast Slow(LinkedList)/";
// import {  } from "./Fast Slow(LinkedList)/";
// import {  } from "./Fast Slow(LinkedList)/";
// import {  } from "./Fast Slow(LinkedList)/";
// import {  } from "./Fast Slow(LinkedList)/";


// Cyclic Sort
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";
// import {  } from "./Cyclic Sort/";


// BFS
// import {  } from "./BFS";
// import {  } from "./BFS";
// import {  } from "./BFS";
// import {  } from "./BFS";
// import {  } from "./BFS";

// DFS
// import {  } from "./DFS";
// import {  } from "./DFS";
// import {  } from "./DFS";
// import {  } from "./DFS";
// import {  } from "./DFS";
// import {  } from "./DFS";


// Topological Sort
// import { } from "./Topological Sort Graphs/"
// import { } from "./Topological Sort Graphs/"
// import { } from "./Topological Sort Graphs/"
// import { } from "./Topological Sort Graphs/"
// import { } from "./Topological Sort Graphs/"


// Top K Elements
// import {  } from "./Top K Elements/";
// import {  } from "./Top K Elements/";
// import {  } from "./Top K Elements/";
// import {  } from "./Top K Elements/";
// import {  } from "./Top K Elements/";


// K-way Merge
// import {  } from "./K-way Merge Dynamic Programing/";
// import {  } from "./K-way Merge Dynamic Programing/";
// import {  } from "./K-way Merge Dynamic Programing/";
// import {  } from "./K-way Merge Dynamic Programing/";
// import {  } from "./K-way Merge Dynamic Programing/";

// Knapsack
// import {  } from "./Knapsack Dynamic Programing/";
// import {  } from "./Knapsack Dynamic Programing/";
// import {  } from "./Knapsack Dynamic Programing/";
// import {  } from "./Knapsack Dynamic Programing/";
// import {  } from "./Knapsack Dynamic Programing/";






const OptimalTwoPointerSolution = {
  lc1: pair_with_target_sum_Two_Pointer,
  lc1Alt: pair_with_target_sum_map,
  lc11: maxArea,
  lc15: search_triplets,
  lc16: triplet_sum_close_to_target,
  lc18: fourSum,
  lc26: remove_element,
  lc75: sortColors,
  lc125: palVaidaor,
  lc259: triplet_with_smaller_sum,
  lc424: characterReplacementTwoPointer,
  lc581: findUnsortedSubarray,
  lc713: numSubarrayProductLessThanK,
  lc844: backspaceCompare,
  lc977: make_squares,
};



const OptimalSlidingWindSolution = {
    lc3:lengthOfLongestSubstring,
    lc30:findSubstring,
    lc53: max_subarray_size_k,
    lc76: minWindow,
    lc209: smallestSubarrayWithGivenSum,
    lc209alt: smallest_subarray_with_given_sumAlt,
    lc340: longest_substring_with_k_distinct,
    lc438: findAnagrams,
    ls567: checkInclusion,
    lc904: fruits_into_baskets,
    lc1004: longestOnes
  };

  const MergeIntervalSolution = {
    lc56: merge,
    lc57: insertInterval,
    lc252: canAttendMeetings,
    lc253: minMeetingRooms,
    lc621: leastInterval,
    lc986: intervalIntersection,

  };








  export const combinedSolutionExports = {
    OptimalTwoPointerSolution,
    OptimalSlidingWindSolution,
    MergeIntervalSolution,

};




// export const combinedSolutionExports = {
//   // ... (previous exports)
//   SubsetsBacktracking: {
//     subsets,
//     subsetsWithDuplicates,
//     permutations,
//     stringPermutationsChangingCase,
//     balancedParentheses,
//     uniqueGeneralizedAbbreviations,
//     evaluateExpression,
//     structurallyUniqueBST,
//     countStructurallyUniqueBST,
//   },

// }

