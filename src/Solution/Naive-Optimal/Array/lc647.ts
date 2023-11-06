// const countSubstrings = (subStringEx) => {

//   const helper = (low, high) => {
//     while (
//       low >= 0 &&
//       high <= subStringEx.length &&
//       subStringEx[low] === subStringEx[high]
//     ) {
//       count++;
//       low--;
//       high++;
//     }
//   };

//   let count = 0;
//   for (let start = 0; start < subStringEx.length; start++) {
//    let callOne = helper(start, start);// odd length
//    let callTwo = helper(start, start + 1);// even length
//   }
//   return count;
// };

// First off, I did not come up with this by myself. After seeing this solution I had this big "duh" moment. Anyways, before we go on there are two important things to point out:

// A palindrome can start from a single letter
// A single letter by itself is a palindrome
// A palinfrome can start from two letters
// So for this code, we are going from i to s.length - 1. Each time we are fanning out from the single letter, then from the double letter. Each time we find a new palindrome
// (it's the same forward and backwords), we add to our count.

// For the last iterations where i === s.length - 1, it's important to point out that the double letter fan-out case will not happen since the while loop in fanOut will never execute.

const countSubstrings = (s) => {
  let total = 0

  for (var i = 0; i <= s.length - 1; i++) {
    // Single letter to fan out from
    total += fanOut(i, i, s)
    // Double letter to fan out from
    total += fanOut(i, i + 1, s)
  }

  return total
}

const fanOut = (left, right, s) => {
  let count = 0

  // Fanning out
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    count++
    left--
    right++
  }

  return count
}

console.log(countSubstrings("abc"))
console.log(countSubstrings("aaa"))

try {
  module.exports = countSubstrings
} catch (error) {}
