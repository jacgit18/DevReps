/*
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param([-8,0,2,5])


no unique values 


Return any whole number that matches its index if no values matches return - 1

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

// binary search
function indexEqualsValueSearch(arr) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor(low + high / 2)

    if (arr[mid] === mid) {
      return mid
    }

    if (arr[mid] !== mid) {
      low++
    }

    // [-8, 0, 2, 5]
    //      ^     ^
    //   0, 1, 2, 3
    //      ^     ^
  }

  return -1
}

let arr = [-8, 0, 2, 5]

console.log(indexEqualsValueSearch(arr))

function indexEqualsValueLinearSearch(arr) {
  let low = 0
  let high = arr.length
  let mid = arr.length / 2
  let min = Infinity

  for (let start = 0; start < high; ++start) {
    if (arr[start] === start) {
      min = Math.min(min, arr[start])
    }
  }

  return min === Infinity ? -1 : min
}
console.log(indexEqualsValueLinearSearch([-1, 0, 3, 6]))
