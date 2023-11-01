/*

Problem Statement #

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.


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

const log = (pre = "", arg = "", post = "") => {
  console.log(`${pre} ${arg} ${post} `)
}
const info = (pre = "", arg = "", post = "") => {
  console.info(`${pre} ${arg} ${post} `)
}
const warn = (pre = "", arg = "", post = "") => {
  console.warn(`${pre} ${arg} ${post} `)
}
const error = (pre = "", arg = "", post = "") => {
  console.error(`${pre} ${arg} ${post} `)
}
const table = (pre = "", arg = "", post = "") => {
  console.table(`${pre} ${arg} ${post} `)
}
const runTimeStart = (arg) => console.time(arg)
const runTimeEnd = (arg) => console.timeEnd(arg)

const find_missing_number = (nums) => {
  let index = 0
  const ArrayLength = nums.length

  while (index < ArrayLength) {
    // let decrementedSubarray = nums[index] -1;

    let currentSubarray = nums[index] // 3 0 1

    //         3>0>1 !== nums[currentSubarray]   = undefined 3 0
    if (nums[index] !== nums[currentSubarray]) {
      // not really needed nums[index] < CurrentIndexLength
      // if (nums[index] < CurrentIndexLength && nums[index] !== nums[currentSubarray]){

      // let nextIndex = nums[index] - 1;
      // let nextIndex = decrementedSubarray;
      // nums[index] = nums[nextIndex];
      // nums[nextIndex] = currentSubarray;
      ;[nums[index], nums[currentSubarray]] = [nums[currentSubarray], nums[index]] // swap indexs
    } else {
      index++
    }
  }

  for (index = 0; index < ArrayLength; index++) {
    if (nums[index] !== index) {
      return index
    }
  }

  return ArrayLength
}

runTimeStart("Runtime")
// log(find_missing_number([3, 1, 5, 4, 2]))
log(find_missing_number([3, 0, 1])) // 2
log(find_missing_number([0, 1])) // 2
log(find_missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
runTimeEnd("Runtime")

const find_missing_numberSol = function (nums) {
  let index = 0
  const CurrentIndex = nums.length
  while (index < CurrentIndex) {
    let currentSubarray = nums[index]
    if (nums[index] < CurrentIndex && nums[index] !== nums[currentSubarray]) {
      ;[nums[index], nums[currentSubarray]] = [nums[currentSubarray], nums[index]] // swap indexs
    } else {
      index++
    }
  }

  for (index = 0; index < CurrentIndex; index++) {
    if (nums[index] !== index) {
      return index
    }
  }

  return CurrentIndex
}

// log(find_missing_numberSol([3, 0, 1])) // 2
// log(find_missing_numberSol([0, 1])); // 2
// log(find_missing_numberSol([9,6,4,2,3,5,7,0,1])); // 8
