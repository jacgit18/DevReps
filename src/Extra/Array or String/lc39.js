/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/* 
 Notes:
 -------
 Constraints: You can use any number in the array as many time as you want 
 
 Two combinations are unique if the frequency of at least one of the chosen numbers is different.

 It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 

 DataStructure&Algo to Leverage & Rule out:
 
 
Functions to Leverage & Rule out:


 I/O: array of unique numbers and target value return nested array of all unique combo of values that add up to the sum of the target from array of unique numbers 



 
 Pseudocode:
 
 if candites length === 0 || if target is <= 0 return [0]
 let sum = 0
 let combo = [];
 
 iterate throughs candiates // this process can be done recursively
 if the initial addition sum is less then push 
  if the initial addition sum diff target doesnt equal target we just go to next index do math and push
    
if equal to target push 

 if candiate[idex] + candiate[idex]  === target combo.push(both values to a subarray)
 
 if candiate[idex]  + candiate[idex] < target  sum += candiate[idex] 
 
 return 

  
 Steps:
 1.compare sum of each subarray to target 
 2.add each element at its current index by itelf until it is equal or greater then seven
 3. if equal push array of those nums to an empty array 
 4. otherwise go to the next index do the same math if greater then do math with last index we were at
 5. if greater move on if less check diff between target and current sum and see if it equals on the last or current index value then push otherwise continue and repeat until end of the array
 


*/
const combinationSum = (candidates, target) =>{
  let sum = 0;
  let diff = 0;
  let combo = [];

  for (let i = 0; i < candidates.length; ++i) {
    let testcaseZero = candidates[i] === target;
    if (testcaseZero) {
      combo.push([candidates[i]]);
    }
    let testcaseOne = sum !== target;
    //   console.log(testcaseOne)
    let testcaseTwo = candidates.length < 1;
    if (testcaseTwo) {
      return [];
    }
    if (testcaseOne) {
      sum += candidates[i] + candidates[i];
      if (sum < target) {
        combo.push([candidates[i], candidates[i]]);
      }

      if (testcaseOne) {
        diff = target - sum;
        if (diff === candidates[i]) {
          combo.push([candidates[i]]);
          console.log(combo);
        } else if (candidates[i + 1] === diff) {
          combo[i].push(diff);
          console.log(combo);
        }
      }
    }

    // return (candidates.length < 2 && candidates[i] > target ) ? [] : combo.push(candidates[i] + )

    // }
    // console.log(candidates[i])
  }

  return combo;
};

// const comboMath = (sum) => {
//     // console.log(sum)
//         return sum + sum

// }

console.log(combinationSum([2,3,6,7], 7))
console.log()

console.log(combinationSum([2,3,5], 8))
console.log()

console.log(combinationSum([2], 1));
