const findAnagrams = (s, p) => {
  let hash = new Map()
  // let hash = {};

  let uniqueChars = 0
  for (let char of p) {
    if (hash[char] == null) {
      ++uniqueChars
      hash[char] = 1
    } else {
      ++hash[char]
    }
  }
  // === considers type & value == considers only value
  let res = []
  let windowStart = 0
  let windowEnd = 0
  let count = 0
  for (windowEnd; windowEnd < s.length; ++windowEnd) {
    //  if (hash[s[windowEnd]]!==null) hash[s[windowEnd]]--;

    if (hash.has(s[windowEnd]) !== null) --hash[s[windowEnd]]
    if (hash[s[windowEnd]] === 0) --uniqueChars

    //  if (hash[s[windowEnd]]===0) uniqueChars--;
    if (uniqueChars === 0) res.push(windowStart)

    if (windowEnd - windowStart + 1 === p.length) {
      if (hash.has(s[windowStart]) !== null) ++hash[s[windowStart]]
      //  console.log(count++, " sec " ,hash[s[windowStart++]])
      //  console.log(count++, " sec " ,s[windowStart++])
      //  console.log(count++, " sec " ,s[windowStart])
      //  console.log(count++, " sec " ,windowStart++)

      if (hash[s[windowStart++]] === 1) ++uniqueChars
    }
  }
  return res
}

console.log(findAnagrams("cbaebabacd", "abc")) //  [0,6]
console.log(findAnagrams("abab", "ab")) //  [0,1,2]
