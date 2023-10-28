// Given two strings s and p, return an array of all the start indices of p's 
// anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.

/**
 * 
 * @param {* long string} s 
 * @param {* short string} p 
 * @returns [all start indices of short string anagram in long string ]
 * anagram a word or sequence of letters Rearrange in different order but contains same letters index returned order doesnt matter
 */
const findAnagramsOG = (s,p) =>{
  // let [longString, shortString] = [s, p];
  let [longString, shortString] = [new Array(26).fill(0), new Array (26).fill(0)];
  let [ windowStart, windowEnd ] = [0,0];
  let sequence = [];
  let [longSequenceLength, shortSequenceLength] = [longString.length, shortString.length];
  let Count = 0;


  if(longSequenceLength === 0 || shortSequenceLength === 0){
    return [stringOneSequenceLength, stringTwoSequenceLength]
  }

  while(windowEnd < longSequenceLength){
    // let shortStringRange = shortString.charCodeAt(windowEnd) - 'c'.charCodeAt(0); // 97-99
 

    // if(windowEnd <= shortSequenceLength){
    //   // longString[windowEnd]
    //   console.log(shortString[windowEnd])

    //   ++windowStart;
    // }

    // let caset = longString[windowStart].charCodeAt(windowStart) === shortString.charCodeAt(windowEnd);

    if(longString.substring(windowStart, windowEnd).length  === shortSequenceLength &&  longString.charCodeAt(windowStart)){
      sequence.push(windowStart)
      // console.log(sequence);
      ++windowStart;

    }

    // console.log(caset, caset.length)
    // if(caset){
    //        return [windowEnd]

    // }
   
    ++windowEnd;

  }

// console.log(sequence)
  return [sequence[windowEnd]];
  // return sequence

  // return sequence.indexOf(sequence[sequence.length - 1])
  
}


// 


// console.log(findAnagramsOG("cbaebabacd","abc")); //  [0,6]
// console.log(findAnagramsOG("abab","ab")); //  [0,1,2]


// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


const findAnagrams = (s, p) =>{
  let [longStringAlpha, shortStringAlpha] = [new Array(26).fill(0), new Array (26).fill(0)];
  let [winEnd, ch] = [0];
  let [longString, shortString] = [s, p];
  let [longSequenceLength, shortSequenceLength] = [s.length, p.length];

  
  for (let start = 0; start <shortSequenceLength; ++start) {
      let index = shortString[start].charCodeAt(0) - 97;
      ++shortStringAlpha[index];
  }
  
  let result = [];
  
  for (let start = 0; start< longSequenceLength; ++start) {
      let index = longString[start].charCodeAt(0) - 97;
      ++longStringAlpha[index];
      
      if((start-winEnd) >= shortSequenceLength) {
          ch = longString.charAt(winEnd).charCodeAt(0) - 97;
           if(longStringAlpha[ch] === 1) {
            longStringAlpha[ch] = 0;
           } else {
            --longStringAlpha[ch];
           }
           ++winEnd;
      }
      
      if(areArrayEqual(longStringAlpha, shortStringAlpha)) {
          result.push(start - shortSequenceLength + 1);
      }
  }
  
  return result;
}

 const areArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let parallelStart = 0;
  let bool = true;
  for (let start = 0; start < arr1.length; ++start) {
          if (arr1[start] !== arr2[parallelStart]) {
              bool = false;
          }
      ++parallelStart;
  }
  return bool;
}





console.log(findAnagrams("cbaebabacd","abc")); //  [0,6]

try {
  module.exports = findAnagrams;
} catch (error) {}