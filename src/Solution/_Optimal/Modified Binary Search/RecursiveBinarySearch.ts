var search = function (nums, target) {
  // Using Array.prototype.includes is not optimal because
  // it does not use a binary search.
  // Binary Search only works on sorted arrays and
  // Array.prototype.includes is designed to work on any array.

  // We can use recursion if we supply lower and higher bounds in function.
  let startIndex = 0
  let endIndex = nums.length - 1
  return recursiveSearch(nums, target, startIndex, endIndex)
}

function recursiveSearch(nums, target, startIndex, endIndex) {
  // + because you are not changing the array.
  let midIndex = Math.floor((startIndex + endIndex) / 2)
  let midValue = nums[midIndex]

  // Use startIndex === endIndex and not target === midValue because
  // in case value does not exist. For example, 10 in [-1,0,3,5,9,12]
  // will be infinite calls as 10 is always bigger than 9.
  if (startIndex === endIndex) {
    // Check if it's a one-element array: [5]
    if (midValue === target) {
      return midIndex
    } else {
      return -1
    }
  } else if (target > midValue) {
    // midIndex + 1 because we used Math.floor. Which rounds down. Hence,
    // the last MidIndex (assuming target is the last value in a n = 10 array)
    // will always be 8. Which is not correct. It should be 9 for startIndex === endIndex
    // to ever evaluate to true.
    return recursiveSearch(nums, target, midIndex + 1, endIndex)
  } else if (target < midValue) {
    return recursiveSearch(nums, target, startIndex, midIndex)
  } else {
    return midIndex
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
