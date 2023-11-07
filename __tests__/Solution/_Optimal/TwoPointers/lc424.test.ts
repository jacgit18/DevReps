

// const LongestRepeatingCharacterReplacement = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc424');

  describe('Test suite for longest repeating character replacement ', () => {
  
    let longestRepeatingCharacterReplacement; // good practice tp avoid change in state
    beforeEach(() =>{ 
      longestRepeatingCharacterReplacement = LongestRepeatingCharacterReplacement;
    });

    test('Edge Case 1', () => {
      const edgecase1 = longestRepeatingCharacterReplacement("ABAB", 2);
     
      console.time("answer time");

      expect(edgecase1).toBe(4);
      console.timeEnd("answer time");

    });

    test('Edge Case 2', () => {
      const edgecase2 = longestRepeatingCharacterReplacement("AABABBA", 1);
     

      expect(edgecase2).toBe(4);

    });

 

  });
 