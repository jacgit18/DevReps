// Problem Statement #

// Given a set of distinct numbers, find all of its permutations.

// Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}

// If a set has ‘n’ distinct elements it will have n!n! permutations.

const find_permutations = (nums) => {
  let res = []
  dfs(nums, new Set(), res)
  return res
}
const dfs = (nums, curr, res) => {
  if (curr.size == nums.length) {
    res.push(Array.from(curr))
    return
  }
  for (let i = 0; i < nums.length; ++i) {
    if (curr.has(nums[i])) continue
    curr.add(nums[i])
    dfs(nums, curr, res)
    curr.delete(nums[i])
  }
}

console.log(`Here are all the permutations: ${find_permutations([1, 2, 3])}`)
