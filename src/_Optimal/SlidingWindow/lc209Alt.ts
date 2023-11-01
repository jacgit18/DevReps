function smallest_subarray_with_given_sum(target, nums) {
  // you can basically use if and else statements or min max methods for these situations
  let start = 0
  let end = 0
  let sum = nums[0]
  let flag = false
  let length = nums.length
  while (end < nums.length) {
    if (sum >= target) {
      if (length > end - start + 1) {
        length = end - start + 1
      }
      sum -= nums[start]
      flag = true
      start++
    } else {
      end++
      sum += nums[end]
    }
  }
  if (!flag) {
    return 0
  }
  return length
}

console.time("answer time")

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])}\n`,
)
console.timeEnd("answer time")
