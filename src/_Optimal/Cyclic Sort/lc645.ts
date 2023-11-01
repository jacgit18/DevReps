/*

Problem Statement #

You have a set of integers s, which originally contains all 
the numbers from 1 to n. Unfortunately, due to some error, 
one of the numbers in s got duplicated to another number in 
the set, which results in repetition of one number and loss 
of another number.

You are given an integer array nums representing the data 
status of this set after the error.

Find the number that occurs twice and the number that is
 missing and return them in the form of an array.

 



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

const findErrorNums = function (nums) {}

runTimeStart("Runtime")
log(findErrorNums([1, 2, 2, 4])) // [2,3]
log(findErrorNums([1, 1])) // [1,2]
runTimeEnd("Runtime")
