// Problem Statement #

// Given a set with distinct elements, find all of its distinct subsets.

const find_subsets = function (nums) {
  const powerset = []
  generatePowerset([], 0)

  function generatePowerset(path, index) {
    powerset.push(path)
    console.log(powerset) // weird behavior before 3
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1)
    }
  }

  return powerset
}

console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)
