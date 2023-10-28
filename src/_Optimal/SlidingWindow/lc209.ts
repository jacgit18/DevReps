// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length 
// of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.



  /**
   * 
   * Input: array of pos nums and targetSum
   * Output: least amount of numbers that is greater than or equal to targetSum when combined basically the smallest subarray
   *  
   * Naive Brute Force Approach
   * --------------- 
   * Variables: 
   * 
   * */
    /**
   *  Optimal Approach
   * -----------------
   *  Variables: 
   * 
   * 
   */
function smallest_subarray_with_given_sum(s, arr) {
  console.log(`------ Test Cases ------`)
  // Properties: head, next pointer, Node value, null, current position, next position, last position
  
  // Pre-Condition: if list empty or only has null
  // 
  // Conditions: while current head not equal to null

  let winSum = 0, 
  minLength = Infinity,
  windowSizeStart = 0;
  let counter = 0;
  let subCounter = 0;


  for (let start = 0; start < arr.length; start++){

    winSum += arr[start];
    // console.log(`winSum value Before while loop iteration ${winSum}, current iteration count: (${counter})`)
    // console.log(`\n`)


    while (winSum >= s){
      // console.log(`winSum value start of while ${winSum}, current sub iteration count: (${subCounter})`)

      // console.log(`minLength value before ${minLength}, current sub iteration count: (${subCounter})`)
      let windowResize = start - windowSizeStart + 1;
      minLength = Math.min(minLength, windowResize);
      // console.log(`Resize is  ${windowResize}, and the current sub iteration count: (${subCounter})`)

      // console.log(`minLength after ${minLength}, current sub iteration count: (${subCounter})`)

      winSum -= arr[windowSizeStart];
      // console.log(`winSum value before next start of while ${winSum}, current sub iteration count: (${subCounter})`)
      // console.log(`minLength check ${minLength}, current sub iteration count: (${subCounter})`)


      windowSizeStart++;
      subCounter++;
      // console.log(`\n Current outer loop iteration count: (${counter})`)

    }

    counter++;
    // console.log(`winSum value Before while loop iteration ${arr[start]}, current iteration count: (${counter})`)



  }
  // console.log(`WinSum value end ${winSum}`)

  // console.log(`minLength value end ${minLength}`)

  if(minLength === Infinity){
    return 0;
  }
return minLength;



}


console.time("answer time");

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 1]
  )}\n`
);
console.timeEnd("answer time");



try {
  module.exports = smallest_subarray_with_given_sum;

} catch (error) {
  
}


