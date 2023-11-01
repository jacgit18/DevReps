// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

class LongestSubstring {
  twoPointerLongestSubstring = (substring) => {
    //iterate through string push to array or other string that if we passed we return current letter count
    if (substring.length < 2) return substring.length // because 1 character isnt enough

    let dupFilter = new Set(substring[0]) // initially just add the first char to the set.
    let left = 0
    let maxSubarraySize = 0
    let count = 0

    for (let right = 1; right < substring.length; right++) {
      // Check for duplicates, remove them, update left pointer
      let dupcheck = dupFilter.has(substring[right])
      // console.log(dupFilter)
      // console.log('The max sub is ' + maxSubarraySize )

      while (dupFilter.has(substring[right])) {
        // console.log('Delete current substring value from set ', substring[left])

        dupFilter.delete(substring[left])
        left++ // update left pointer
      }
      // console.log(dupcheck, count++ )
      // console.log('Add current right pointer substring value from set ', substring[right])
      dupFilter.add(substring[right])

      maxSubarraySize = Math.max(maxSubarraySize, dupFilter.size)
    }
    return maxSubarraySize
  }

  slidingWindowLongestSubstring = (substring) => {
    const windowSize = substring.length
    const dupFilter = new Set()
    let left = 0
    let right = 0
    let maxSubarraySize = 0
    let count = 0

    while (right < windowSize) {
      const char = substring[right]
      let dupcheck = dupFilter.has(char)

      if (dupFilter.has(char)) {
        dupFilter.delete(substring[left++])
      } else {
        dupFilter.add(char)
        maxSubarraySize = Math.max(dupFilter.size, maxSubarraySize)
        right++
        //  console.log(dupFilter)
      }
      // console.log(dupcheck, count++)
    }
    // console.log(maxSubarraySize)

    return maxSubarraySize
  }

  methodRunner = () => {
    let edgecase1 = "abcabcbb" // 3
    let edgecase2 = "bbbbb" // 1
    let edgecase3 = "pwwkew" // 3
    let edgecase4 = "" // 0

    // console.time("TwoPointer");

    this.twoPointerLongestSubstring(edgecase1)
    // console.log(`${this.twoPointerLongestSubstring(edgecase1)}`);

    // console.timeEnd("TwoPointer");

    // console.time("SlidingWindow");
    // console.log("------------------^");
    // more effiecient less looping
    this.slidingWindowLongestSubstring(edgecase1)

    // console.timeEnd("SlidingWindow");
    // console.log("------------------^");
  }
}

// const longClass = new LongestSubstring();
// longClass.methodRunner();

// module.exports = longClass;
module.exports = new LongestSubstring()
