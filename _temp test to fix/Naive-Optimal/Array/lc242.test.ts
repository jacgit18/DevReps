const ValidAnagram = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc242');

  describe('Test suite for valid anagram ', () => {
  
    let validAnagram; // good practice tp avoid change in state
    beforeEach(() =>{ 
      validAnagram = ValidAnagram;
    });

    test('Edge Case 1', () => {
      const edgecase1 = validAnagram("anagram", "nagaram");
     
      console.time("answer time");

      expect(edgecase1).toBe(true);
      console.timeEnd("answer time");

    });

    test('Edge Case 2', () => {
      const edgecase2 = validAnagram("rat", "car");
     

      expect(edgecase2).toBe(false);

    });
    

  });
 