// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

const permut = (string) => {
  if (string.length < 2) return string // This is our break condition

  var permutations = [] // This array will hold our permutations
  for (var i = 0; i < string.length; i++) {
    var char = string[i]

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i)
      // if char was used already
      continue // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length) //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString)) permutations.push(char + subPermutation)
  }
  return permutations
}

// console.log(permut("ab"))

/* 

Problem/Notes:


I/O:

EdgeCase:{

}

Naïve-Approach:


Constraints:


Variables:


Control flow
         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:

}        switch case()



 Steps:
 1.
 2.


To Leverage & Rule out

 DataStructure&Algo :


 Functions:





 
 
*/

const checkInclusion = (s1, s2) => {
  // <<<<<<< Updated upstream
  // let permutation=  permut(s1).slice(1)
  if (s1.length > s2.length) return false

  const s1CharCount = new Array(26).fill(0)
  const window = new Array(26).fill(0)

  for (let char of s1) {
    //'a'.charCodeAt() === 97;
    const idx = char.charCodeAt() - 97
    s1CharCount[idx]++
  }

  // construct window
  for (let i = 0; i < s1.length; i++) {
    const idx = s2[i].charCodeAt() - 97
    window[idx]++
  }

  let start = 0
  let end = s1.length - 1

  while (end < s2.length) {
    if (window.join("") === s1CharCount.join("")) return true
    end++
    if (end === s2.length) break
    const startIdx = s2[start].charCodeAt() - 97
    const endIdx = s2[end].charCodeAt() - 97
    window[startIdx]--
    window[endIdx]++
    start++
  }
  return false
  // =======
  //   let permutation=  permut(s1).slice(1)
  //   for(let i=0; i<s2.length-1; i++){
  //     let partOne = s2[i].startsWith(permutation[0].substring(0,1));
  //     let partTwo = s2[i+1].startsWith(permutation[1].substring(1,1))
  //     // console.log(permutation)

  //     if(partOne && partTwo){
  //       return true
  //       // if(s2[i]=== permutation[0]){

  //       // }
  //     }
  //     // console.log( s2[i])

  //   }
  // >>>>>>> Stashed changes
}

let s1 = "ab",
  s2 = "eidbaooo",
  s3 = "eidboaoo" // swap a with a for s3 would be false
// console.time("Sliding")
// console.log(checkInclusion(s1, s2)) //true one instance of ab = ba permutation a variation of a variation of the sring
// console.timeEnd("Sliding")

// console.time("Pointer")
// console.log(checkInclusion(s1, s2))

// console.timeEnd("Pointer")

console.log(checkInclusion(s1, s2)) //true one instance of ab = ba permutation a variation of a variation of the sring
console.log(checkInclusion(s1, s3))

try {
  module.exports = checkInclusion
} catch (error) {}
