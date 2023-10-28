// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/**
 *
 * Input:
 * Output:
 *
 * Naive Brute Force Approach
 * ---------------
 * Variables:
 *
 * */
/**
 *  Optimal Approach
 * -----------------
 *  Variables:
 *
 *
 */
function longest_substring_with_k_distinct(str, k) {
  // console.log(`------ Test Cases ------`)
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {


    const rightChar = str[windowEnd];
    // notes
    const a = 3;
    const b = -2;
    
    // console.log(!(a > 0 || b > 0));
    // expected output: false

    // without Grouping operator ( ) only rightchar would be negated
    // not the boolean result of rightChar n charFrequency
    if (!(rightChar in charFrequency)) {

      charFrequency[rightChar] = 0; // appending array index current value to the object as a property with a intial value of 0
      // arrays are basically  at type of object where the index is like the property name and subarray is the key 

    }

    
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }

      windowStart += 1; 
    

    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  

  }

  return maxLength;
}

module.exports = longest_substring_with_k_distinct;


// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     2
//   )}`
// );


// console.log(longest_substring_with_k_distinct("araaci",2))



// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     'araaci',
//     1
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     'cbbebi',
//     3
//   )}`
// );



// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};

// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
