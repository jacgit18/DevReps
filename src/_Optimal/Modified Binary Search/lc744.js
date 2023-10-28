// Given a characters array letters that is sorted in non-decreasing order and a character target,
//  return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

const nextGreatestLetterBin = (letters, target) => {
  if (letters[0] > target || target >= letters[letters.length - 1]) return letters[0];

  let left = 0,
    right = letters.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) left = mid + 1;
    else if (letters[mid] > target) right = mid;
  }

  return letters[left];
};

const nextGreatestLetter = (letters, target) => {
  // console.log(target.charCodeAt())
  // console.log(letters[letters.length - 1])

  if (letters[0] > target || target >= letters[letters.length - 1]) return letters[0];

  for (let start = 0; start < letters.length; ++start) {
    // console.log(letters[start].charCodeAt()) can be done without charCodeAt but runs a little less efficient
    if (letters[start].charCodeAt() > target.charCodeAt()) {
      return letters[start];
    }
  }
};



console.time("bin");
console.log(nextGreatestLetterBin(["c", "f", "j"], "d")); // f
console.timeEnd("bin");

console.time("reg");
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // f
console.timeEnd("reg");

// console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
// console.log(nextGreatestLetter(["c","f","j"], "c")) // f
// console.log(nextGreatestLetter(["c","f","j"], "d")) // f
// console.log(nextGreatestLetter(["c","f","j"], "j")) // c
