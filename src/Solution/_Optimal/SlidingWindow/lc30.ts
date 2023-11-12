// You are given a string s and an array of strings words of the same length.
// Return all starting indices of substring(s) in s that is a concatenation
// of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

// Intergration test  helper function make just like unit but design it in a way were the test is 
// addressing what helper

const isConcat = (sub: string, map: { [key: string]: number }, wordLength: number): boolean => {
  let seen: { [key: string]: number } = {};
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength);
    seen[word] = seen[word] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] !== seen[key]) return false; // Word freq must match between map and seen
  }
  return true;
};

export const findSubstring = (s: string, words: string[]): number[] => {
  let res: number[] = [];

  let wordLength = words[0].length;
  let wordCount = words.length;
  let len = wordCount * wordLength; // Length of sliding window

  let map: { [key: string]: number } = {};

  for (let word of words) map[word] = map[word] + 1 || 1; // Hash word freq

  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len); // Generate substring of sliding window length
    if (isConcat(sub, map, wordLength)) res.push(i);
  }

  return res;
};

console.time("Sliding");
// console.log(findSubstring("barfoothefoobarman", ["foo","bar"])) // [0,9]
// console.log(findSubstring("wordgoodgoodgoodbestword",  ["word","good","best","word"])) // []
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])) // [6,9,12]
console.timeEnd("Sliding");
