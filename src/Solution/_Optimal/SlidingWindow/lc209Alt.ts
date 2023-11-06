function smallest_subarray_with_given_sum(target: number, nums: number[]): number {
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

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])); // This will return 3


export { smallest_subarray_with_given_sum as lc209Alt };
