const GroupAnagrams = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc49');

  describe('Test suite for group anagram ', () => {
  
    let groupAnagrams; // good practice tp avoid change in state
    beforeEach(() =>{ 
      groupAnagrams = GroupAnagrams;
    });

    test('Edge Case 1', () => {
      const edgecase1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
     
      console.time("answer time");

      expect(edgecase1).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
      console.timeEnd("answer time");

    });

    test('Edge Case 2', () => {
      const edgecase2 = groupAnagrams([""]);
     

      expect(edgecase2).toStrictEqual([[""]]);

    });

    test('Edge Case 3', () => {
      const edgecase3 = groupAnagrams(["a"]);
     

      expect(edgecase3).toStrictEqual([["a"]]);

    });


  });
 