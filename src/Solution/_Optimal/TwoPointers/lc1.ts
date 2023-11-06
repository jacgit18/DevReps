// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

/**
 * Given an array iterate get the sum of each contigous subarray and compare to target
 *
 * if more then target increment to the left thne decrement to the right and repeat until sum equal target an return the index
 * of numbers that equaled the sum the mathed the target
 *
 */

/**
 *
 * Input: array, targetSUm
 * Output: index numbers that match 9 when added together
 *
 * Naive Approach
 * ---------------
 * Variables:
 *
 * loop through the array subtract the current[index] the target sum
 *
 *
 */
// Test Cases are conditions for inputs

const pair_with_target_sum_map = (nums, target) => {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    console.log(map)

    let complement = target - nums[i]
    if (map.has(complement)) {
      map.set(nums[i], i)

      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
}
console.time("Pair time map")
console.log(pair_with_target_sum_map([1, 2, 3, 4, 6], 6))
console.timeEnd("Pair time map")

function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length - 1
  // console.log(right)
  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === targetSum) {
      return [left, right]
    }

    if (targetSum > currentSum) {
      left += 1 // we need a pair with a bigger sum
    } else {
      right -= 1 // we need a pair with a smaller sum
    }
  }
  return [-1, -1]
}

console.time("Pair time")
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6))
console.timeEnd("Pair time")

// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

console.log(`\n ------- Edge Case -------- `)
// console.log(`Edge 1: [${pair_with_target_sum([], 6)}]`)
// console.log(`Edge 1: [${pair_with_target_sum([3], 6)}]`)

/**
 *  Optimal Approach
 * -----------------
 *  Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 *
 *
 */
