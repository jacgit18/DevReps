// Given a binary array nums and an integer k, return the maximum number
// of consecutive 1's in the array if you can flip at most k 0's.

export const longestOnes = (nums: number[], k: number):number => {

return 0
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
k = 2

console.time("Sliding")
console.log(longestOnes(nums, k)) // 6
console.timeEnd("Sliding")


