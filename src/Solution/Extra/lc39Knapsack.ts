var combinationSum = function (candidates, target) {
  var result = []

  // edge cases
  // these edge might seem too strict, can be relaxed though
  if (!candidates || !target || target < 1 || candidates.length == 0) {
    return [[]]
  } // when invalid or empty inputs
  else if (candidates.length == 1) {
    // when we have just one candidate
    if (target < candidates[0]) {
      return []
    } // if bad target
    else if (target % candidates[0] === 0) {
      // else good target
      let div = target / candidates[0]
      return [[...Array(div)].fill(candidates[0])] // return immediately
    }
  }

  // else we deploy recursive logic
  combinationSumRecursive(candidates, target, [], candidates.length, result)
  return result
}

/* MAIN LOGIC */
var combinationSumRecursive = function (A, target, temp, n, result) {
  // base case 1
  if (target === 0) {
    /* make sure to copy the array and then push in final result
      since Arrays are PASSED BY REFERENCE */
    result.push([...temp])
    return
  }
  // base case 2
  if (n === 0) {
    return
  }

  // if the element is NOT VALID, then SKIP IT and recurse for rest
  if (A[n - 1] > target) {
    return combinationSumRecursive(A, target, temp, n - 1, result)
  }

  // if the element is VALID, we have two cases : Either we chose it or we donot
  // Case 1: CHOSEN
  temp.push(A[n - 1]) // select it in out temp array
  combinationSumRecursive(A, target - A[n - 1], temp, n, result) // apply the recursive logic, but since it can be reused DONOT SKIP IT
  temp.pop() // donot forget to remove it  from temp after processing

  // Case 2: NOT CHOSEN
  combinationSumRecursive(A, target, temp, n - 1, result) // SKIP IT and recurse for rest
}

console.log(combinationSum([2, 3, 6, 7], 7))
console.log()

console.log(combinationSum([2, 3, 5], 8))
console.log()

console.log(combinationSum([2], 1))
