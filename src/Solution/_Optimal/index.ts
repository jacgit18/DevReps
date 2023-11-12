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


// Subset/ Backtracking pattern
import { robotPaths } from "./Subsets/BacktrackMatrix";
import { matrix } from "./Subsets/MockIntMatrix";
import { letterCombinationsBackTrack } from "./Subsets/lc17";
import { diffWaysToCompute } from "./Subsets/lc241";
import { findDuplicatesBackTrack, findDuplicatesCyclic } from "./Subsets/lc442";
import { permute } from "./Subsets/lc46";
import { subsets } from "./Subsets/lc78";
import { letterCasePermutation } from "./Subsets/lc784";
import { subsetsWithDup } from "./Subsets/lc90";


// Modified Binary Search
import { findMin } from "./Modified Binary Search/lc153";
import { searchRanger } from "./Modified Binary Search/lc33";
import { searchRange } from "./Modified Binary Search/lc34";
import { searchInsert } from "./Modified Binary Search/lc35";
import { findClosestElements } from "./Modified Binary Search/lc658";
import { searchtargetinnums } from "./Modified Binary Search/lc702";
import { searchBin } from "./Modified Binary Search/lc704";
import { nextGreatestLetter } from "./Modified Binary Search/lc744";
import { search } from "./Modified Binary Search/lc81";


// Cyclic Sort
import { cyclic_sort } from "./Cyclic Sort/cyclicSortEasy";
import { findKthPositive } from "./Cyclic Sort/lc1539";
import { find_missing_number } from "./Cyclic Sort/lc268";
import { findDuplicate } from "./Cyclic Sort/lc287";
import { firstMissingPositive } from "./Cyclic Sort/lc41";
import { findDuplicates } from "./Cyclic Sort/lc442";
import { findDisappearedNumbers } from "./Cyclic Sort/lc448";
import { findErrorNums } from "./Cyclic Sort/lc645";


// Fast Slow  Pointer
import { hasCycle } from "./Fast Slow(LinkedList)/lc141CyclicLL";
import { isDoublyCyclic } from "./Fast Slow(LinkedList)/lc141DoubleVer";
import { isHappy } from "./Fast Slow(LinkedList)/lc202";


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
import { cloneGrapher } from "./Topological Sort Graphs/lc133";


// Top K Elements
import { findKthLargest } from "./Top K Elements/lc215";



// K-way Merge
// import { findKthLargest } from "./K-way Merge Dynamic Programing/lc23";


// Knapsack
import { findMaxForm } from "./Knapsack Dynamic Programing/lc474";





export const combinedSolutionExports = {


 OptimalTwoPointerSolution: {
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
},



 OptimalSlidingWindSolution: {
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
  },

   MergeIntervalSolution: {
    lc56: merge,
    lc57: insertInterval,
    lc252: canAttendMeetings,
    lc253: minMeetingRooms,
    lc621: leastInterval,
    lc986: intervalIntersection,

  },


  OptimalSubsetSolution: {
    backtrackOne: matrix,
    backtrackTwo:robotPaths,
    lc17: letterCombinationsBackTrack,
    lc46: permute,
    lc78: subsets,
    lc90: subsetsWithDup,
    lc241: diffWaysToCompute,
    lc442: findDuplicatesBackTrack,
    lc442Alt: findDuplicatesCyclic,
    lc784: letterCasePermutation,

  },

  OptimalModifiedBinarySearch: {
    lc33: searchRanger,
    lc34: searchRange,
    lc35: searchInsert,
    lc81: search,
    lc153: findMin,
    lc658: findClosestElements,
    lc702: searchtargetinnums,
    lc704: searchBin,
    lc744: nextGreatestLetter,
  },

  OptimalCycSort:{
    sort: cyclic_sort,
    lc41: firstMissingPositive,
    lc268: find_missing_number,
    lc287: findDuplicate,
    lc442: findDuplicates,
    lc448: findDisappearedNumbers,
    lc645: findErrorNums,
    lc1539: findKthPositive,
  },


  OptimalFastSlowPointers:{
    lc141: hasCycle,
    lc141Double: isDoublyCyclic,
    lc202: isHappy,

 
  },


  // OptimalBFS:{
  //   lc141: hasCycle,
  

 
  // },

  // OptimalDFS:{
  //   lc141: hasCycle,

 
  // },

  OptimalTopologicalSort:{
    lc133: cloneGrapher,
   

 
  },

  OptimalTop_K_Elements:{
    lc215: findKthLargest,
   

 
  },


  // Optimal_KwayMerge:{
  //   lc23: findKthLargest,


  // },

  OptimalKnapSack:{
    lc474: findMaxForm,


  }





};





