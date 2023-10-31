const longest_substring_with_k_distinct = require('../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc340');

  describe('Test suite longest substring with k distinct characters ', () => {
  
    let longestSubstringDistinct; // good practice tp avoid change in state
    beforeEach(() =>{ 
      longestSubstringDistinct = longest_substring_with_k_distinct;
    });

    test('Sliding Window', () => {
      const edgecase1 = longestSubstringDistinct("araaci",2);
     
      console.time("answer time");

      expect(edgecase1).toBe(4);
      console.timeEnd("answer time");

    });
  
    test('Sliding Window', () => {
      const edgecase2 = longestSubstringDistinct("araaci",1);
     

      expect(edgecase2).toBe(2);

    });

    test('Sliding Window', () => {
      const edgecase3 = longestSubstringDistinct("cbbebi",3);

      expect(edgecase3).toBe(5);

    });

  });
 