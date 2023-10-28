// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

const groupAnagrams = (s) =>{
  const anagrams = new Map();
    for(str of s) {

        const sortedLetters = str.split('').sort().join('');

        if(anagrams.has(sortedLetters)) anagrams.get(sortedLetters).push(str);
        else anagrams.set(sortedLetters, [str]);
        console.log(anagrams);
    }
    return Array.from(anagrams.values());
}

// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

try {
  module.exports = groupAnagrams;
} catch (error) {}