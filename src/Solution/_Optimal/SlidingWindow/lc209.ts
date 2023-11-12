export const smallest_subarray_with_given_sumAlt = (target: number, nums: number[]): number => {
    let start = 0;
    let end = 0;
    let sum = nums[0];
    let flag = false;
    const length = nums.length;
    let minLength = length;
  
    while (end < length) {
      if (sum >= target) {
        if (end - start + 1 < minLength) {
          minLength = end - start + 1; // Corrected condition here
        }
        sum -= nums[start];
        flag = true;
        start++;
      } else {
        end++;
        if (end < length) {
          sum += nums[end];
        }
      }
    }
  
    if (!flag) {
      return 0;
    }
  
    return minLength; // Return the count of elements in the subarray
  }



  export const smallestSubarrayWithGivenSum = (s: number, arr: number[]): number =>{

  let winSum = 0;
  let minLength = Infinity;
  let windowSizeStart = 0;
  let counter = 0;
  let subCounter = 0;

  for (let start = 0; start < arr.length; start++) {
    winSum += arr[start];

    while (winSum >= s) {
      let windowResize = start - windowSizeStart + 1;
      minLength = Math.min(minLength, windowResize);

      winSum -= arr[windowSizeStart];
      windowSizeStart++;
      subCounter++;
    }

    counter++;
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}



console.log(smallestSubarrayWithGivenSum(3,[4,6,6,8]));

  
    





