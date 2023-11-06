/*
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()
index of 3 

Assume that the array data is sorted in an ascending order by the timestamp.
timestamps, vistor count , boolean of enter or exit

which the mall reached its busiest moment 
                  00:00:00 
               [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1], // 3 return 10 with entered
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]
                 
                 compare diff between vistor count  add to and subtract based on weather vistors entered or exit
                 
                 compare imestamps greater then or less then maybe?
                 
                 we can iterate through anything after timestamp and check the values determine 
                 
                 limit is 3 


output: 1487800378 # since the increase in the number of people
                   # in the mall is the highest at that poi


Return large INteger 1487800378

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

function findBusiestPeriod(data) {
  // your code goes here
  let Vistor = 0
  //console.log(data.length)
  //data[0].length
  let move = 0

  for (let start = 0; start < data.length; ++start) {
    if (data[start][move + 1]) {
      ++move

      console.log(`num of vistors ${data[start][2]}`)
      if (data[start][2] === 1) {
        Vistor += data[start][1]
        console.log(`vistors True ${Vistor}`)
      }
      continue

      if (data[start][2] === 0) {
        Vistor -= data[start][1]
        console.log(`vistors False ${Vistor}`)
      }

      //console.log(data[start][move])
    }
  }
}

let data = [
  [1487799425, 14, 1], // 14
  [1487799425, 4, 0], // 10
  [1487799425, 2, 0], // 8
  [1487800378, 10, 1], // 18
  [1487801478, 18, 0], // 0
  [1487801478, 18, 1], // 18
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
]

findBusiestPeriod(data)
