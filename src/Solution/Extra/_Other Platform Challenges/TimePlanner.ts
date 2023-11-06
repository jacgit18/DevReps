/*  
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem
|
V Break down problem into English & Identify I/O:
ParametersMainCase() 





Return
 
|  
V Identify Constraints:


|
V IDENTIFY EDGE CASE 
ParametersMainCase() 



|
V Define Naïve-Approach/Psuedocode break into small problems:
    Visualize on Whiteboard 


|
V Convert approach into actionable steps with order in mind:
    Steps: 
             

|
V Identify & Define Variables(to store reference manipulate) & Control Flow:
 
 
| 
V Code if stuck check past steps 

|
V Identify Runtime


Identify Control flow(Break, Continue) based on defined steps 

    Simple Test case:      Rules:
     ---------------------------------------------
      new customer ->     15% off
      repeat customer ->   10% off
      coupon customer ->   30% off
  
     num of test case = num of rules = 2^num of conditions = 2^3 = 8 rules

     n = not likely  p = probably 
     Identify commonalities between test case
     Follow Discrete math De-Morgan's Law 
     new cus     T T T T F F F F
     repeat cus  T T F F T T F F
     coupon cus  T F T F T F T F
     result      n n p p p p n p

         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}      
*/

function meetingPlanner(slotsA, slotsB, MeetingDuration) {
  const result = []

  let [PersonOneCurrentBlockIdx, PersonTwoCurrentBlockIdx] = [0, 0]
  let [PersonOneTimeBlockLength, PersonTwoTimeBlockLength] = [slotsA.length, slotsB.length]

  while (
    PersonOneCurrentBlockIdx < PersonOneTimeBlockLength &&
    PersonTwoCurrentBlockIdx < PersonTwoTimeBlockLength
  ) {
    const [PersonOneStartTime, PersonOneEndTime] = slotsA[PersonOneCurrentBlockIdx]
    const [PersonTwoStartTime, PersonTwoEndTime] = slotsB[PersonTwoCurrentBlockIdx]
    let firstCompare =
      PersonOneStartTime >= PersonTwoStartTime && PersonOneStartTime <= PersonTwoEndTime
    let secondCompare =
      PersonTwoStartTime >= PersonOneStartTime && PersonTwoStartTime <= PersonOneEndTime

    // if first list's ith and second list's jth intervals intersect, add the intersection to the result
    if (firstCompare || secondCompare) {
      result.push([
        Math.max(PersonOneStartTime, PersonTwoStartTime),
        Math.min(PersonOneEndTime, PersonTwoEndTime),
      ])
    }
    // if first interval is ended before second interval, move to the next interval of the first list
    if (PersonOneEndTime < PersonTwoEndTime) {
      ++PersonOneCurrentBlockIdx
    } else {
      // if the second interval is ended before the first interval, move to the next interval of the second list
      ++PersonTwoCurrentBlockIdx
    }
  }

  return result
}

let slotsA = [
  [10, 50],
  [60, 120],
  [140, 210],
]
let slotsB = [
  [0, 15],
  [60, 70],
]
let dur = 8

let slotsC = [
  [10, 50],
  [60, 120],
  [140, 210],
]
let slotsD = [
  [0, 15],
  [60, 70],
]
let dur2 = 12
console.log(meetingPlanner(slotsA, slotsB, dur))
console.log(meetingPlanner(slotsC, slotsD, dur2))
