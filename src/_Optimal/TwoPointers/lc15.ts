// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets 
// in it that add up to zero.


// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] such that i != j, i != k, 
// and j != k, and nums[i] + nums[j] + nums[k] == 0.

function search_triplets(arr) {
  triplets = [];
  // TODO: Write your code here
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
