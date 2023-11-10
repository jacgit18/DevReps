// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

/**
 *
 * Input:
 * Output:
 *
 * Naive Brute Force Approach
 * ---------------
 * Variables:
 *
 *  So we are given an array that we loop through and as we iterate intially we add zero to the intial index
 *
 * then if the window intial end isnt greater then the target window -1
 *
 * set max Sum and ahead
 *
 * could sort to make faster
 * */

/**
 *  Optimal Approach
 * -----------------
 *  Variables:
 * Sliding Window
 *
 */
export const max_subarray_size_k = (k: number, arr:number[]):number => {
  // console.log(`------ Test Cases ------`)
  // Properties: head, next pointer, Node value, null, current position, next position, last position

  // Pre-Condition: if list empty or only has null
  //
  // Conditions: while current head not equal to null

  let maxSum: number = 0,
    windowSum = 0,
    windowStart = 0

  for (let window_end:number = 0; window_end < arr.length; window_end++) {
    // add the next element
    windowSum += arr[window_end]
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k--) {
      maxSum = Math.max(maxSum, windowSum)
      // subtract the element going out
      windowSum -= arr[windowStart]
      // slide the window ahead
      windowStart++
    }
  }
  return maxSum
}

// console.time("answer time");
// console.timeLog("answer time"); // time in middle

console.log(`Maximum sum of a subarray of size K: ${max_subarray_size_k(3, [2, 1, 5, 1, 3, 2])}`)
// console.timeEnd("answer time");

