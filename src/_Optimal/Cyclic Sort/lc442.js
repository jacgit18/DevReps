/*

Problem Statement #

Given an integer array nums of length n where all the
integers of nums are in the range [1, n] and each 
integer appears once or twice, return an array of 
all the integers that appears twice.

You must write an algorithm that runs in O(n) time and 
uses only constant extra space.



Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()





Return

|
V IDENTIFY EDGE to Identify TEST CASES in 10 min or less

Properties of Edgecase:





Alt EdgeCase & similarities:

		


|
V Define Naïve-Approach/Psuedocode on whiteboard under 20 min or less:

List out properties of problem you have gotten so far with order in mind:

Define Variables(to store reference manipulate) & Identify CRUD:


Identify Test Case with Control Flow in mind:


|
V Code if stuck check past steps & Identify Runtime & Optimizations 15 min or less




Control flow(Break, Continue) based on defined steps & edge cases

    Simple Test case: Rules:
     ---------------------------------------------
      new customer -> 15% off
      repeat customer -> 10% off
      coupon customer -> 30% off

     num of test case = num of rules = 2^num of conditions = 2^3 = 8 rules

     n = not likely p = probably
     Identify commonalities between test case
     Follow Discrete math De-Morgan's Law
     new cus T T T T F F F F
     repeat cus T T F F T T F F
     coupon cus T F T F T F T F
     result N N P P P N N

         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}

*/


const log = (pre="", arg="", post="") => {console.log(`${pre} ${arg} ${post} `)}
const info = (pre="", arg="", post="") => {console.info(`${pre} ${arg} ${post} `)}
const warn = (pre="", arg="", post="") => {console.warn(`${pre} ${arg} ${post} `)}
const error = (pre="", arg="", post="") => {console.error(`${pre} ${arg} ${post} `)}
const table = (pre="", arg="", post="") => {console.table(`${pre} ${arg} ${post} `)}
const runTimeStart = (arg) => console.time(arg)
const runTimeEnd = (arg) => console.timeEnd(arg)

const find_all_duplicates = function(nums) {
  let index = 0;
  const ArrayLength = nums.length;
  
  while (index < ArrayLength){
    const currentSubarray = nums[index];
    const decrementedSubarray = currentSubarray -1; 
  
  
      if (currentSubarray != nums[decrementedSubarray]){
  
  
      
      [ nums[decrementedSubarray], nums[index]] = [nums[index], nums[decrementedSubarray]]; 
  
  
  
    } else{
  
      ++index;
  
    }
    
  }

  
   
  
    return nums;
};

runTimeStart("Runtime")
log(find_all_duplicates([4,3,2,7,8,2,3,1])); // [2,3] missing num in range 
log(find_all_duplicates([1, 1, 2])); // [1]
log(find_all_duplicates([1])); // []
runTimeEnd("Runtime")


// Solution
// -----
// function find_all_duplicates(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     j = nums[i] - 1;
//     if (nums[i] != nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i++;
//     }
//   }

//   duplicateNumbers = [];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       duplicateNumbers.push(nums[i]);
//     }
//   }

//   return duplicateNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
