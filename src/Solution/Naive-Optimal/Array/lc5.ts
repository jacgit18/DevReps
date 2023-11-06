const longestPalindrome = (s) => {
  // Return immediately for single characters
  if (s.length < 2) {
    return s
  }

  let palindromeStart = null
  let palindromeLength = null

  // Function within function so it has access to palindromeStart and palindromeLength variables without
  //  having to pass more than 3 paramters.
  const searchFromMiddle = (str, left, right) => {
    // While the two characters are equal, and the left & right characters exist:
    while (str[left] === str[right] && left >= 0 && right < str.length) {
      // shift the left character further left, and vice versa for right to expand the current phrase
      left -= 1
      right += 1
    }

    // Once out of the while loop, check if the length of the phrase is greater than the length of the saved
    //    palindrome
    let stringMiddle = right - left - 1
    // console.log(`Results of mathofDirection ${mathofDirection}`)
    // console.log(`Results of palindromeLength ${palindromeLength}`)
    if (palindromeLength < stringMiddle) {
      // If it is, set this phrase as the new largest palindrome by saving its start and end values
      palindromeStart = left + 1
      // console.log(`Results of palindromeStart ${palindromeStart}`)
      palindromeLength = right - left - 1
    }
  }

  // This is the main for loop which calls the search function
  for (let start = 0; start < s.length - 1; start++) {
    // Called twice because we want to check for both odd and even length phrases. We can't just optionally
    //   call one or the other because in both cases (even or odd), there may be palindromes hidden at the edges
    //   of the phrase. Calling twice captures those edge cases (pun intended).
    searchFromMiddle(s, start, start)
    searchFromMiddle(s, start, start + 1)
  }

  // Finally, as we have been setting the start and end values of the palindrome as we went through the function,
  //  we just find the substring from the initial phrase at those indices.
  return s.substring(palindromeStart, palindromeStart + palindromeLength)
}

console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"));

try {
  module.exports = longestPalindrome
} catch (error) {}
