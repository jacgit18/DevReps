/*

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.

Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem and Prioritize VISUAL THINKING OVERALL especially before writing


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()

[ 
[0,    1,    0,    1,    0],
[0,    0,    1,    1,    1],
[1,    0,    0,    1,    0],
[0,    1,    1,    0,    0],
[1,    0,    1,    0,    1] 

]

// count
// mark the spot
    0
    |
0 - 0 - 0 - 0
    |
    0
    

1 = island
1, 1 = island

   3
  [1]
   3  
[1,1,1]
   3
  [1]
  
  map = {
  
  1: [1]: 
  
  2: [
      [1,1],
      [0,1]
      ] 
  
  3: [
        [0,1,0],
      [0,1,1,1,0]
        [0,1,0]
      ] 
  }

 

Return

binaryMatrix[-1].Length 
binaryMatrix[binaryMatrix-1].Length 
binaryMatrix[-1][0].Length 
binaryMatrix[0][-1].Length 

if exceed length of row which is 5 
if exceed length of row, col which is 5 



(binaryMatrix[-1][0]) leftBound
(binaryMatrix[-1]) 
(binaryMatrix[0]) 

(binaryMatrix[0][-1]) rightBOund



|
V Define Naïve-Approach/Psuedocode on whiteboard under 20 min or less:

List out properties of problem you have gotten so far with order in mind:

Define Variables(to store reference manipulate) & Identify CRUD:


Identify Test Case with Control Flow in mind:


|
V IDENTIFY EDGE to Identify TEST CASES in 10 min or less

Properties of Edgecase:





Alt EdgeCase & similarities:

		


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

function getNumberOfIslands(binaryMatrix) {
  // your code goes here
}
