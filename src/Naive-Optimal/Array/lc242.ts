// Given a string s, return true if it is a palindrome, or false otherwise.

// short version
// var isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

// Build sorted array (char[] ) of s and t
// Compare poped element from a and b array
// After loop return true if there are no remaining in a or b else return false


// let fruitCount = { 
//   apple : 2, 
//   orange: 3, 
//   grape: 6 
// }

// let totalCount = 0
// for(let key in fruitCount){
//       totalCount += fruitCount[key]
//   }
// console.log(totalCount); // 11

// Here we are iterating through each object property using a for..in loop. By using this method, 
// we have now access to the values using the bracket notation on the object itself.
// We usually use for..in loop to iterate over the properties of an object. Check if
//  a value exists for a key, display the key-value pairs using console.log. 
//  This is actually a great debugging tool. A key thing to remember is, 
//  for..in is not recommended to use with arrays because the index order is important.

const isAnagram = (s, t) =>{
  let hash = {};
  for (let char of s) {
      hash[char] = hash[char]+1||1;// add object key to object if it exists then added one to value
  }
  // console.log([...Object.keys(hash)])
  // console.log([hash])

  // console.log([...Object.values(hash)])


  for (let char of t) {
      if (!hash[char]) return false;
      hash[char]--;
      if (hash[char] == 0) delete hash[char];
  }
  return [...Object.keys(hash)].length==0
}



console.log(isAnagram("anagram", "nagaram" )); // returns true 

try {
  module.exports = isAnagram;
} catch (error) {}