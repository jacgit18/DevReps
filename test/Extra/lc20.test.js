const ValidParentheses = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc20');

  describe('Test suite for valid parenheses ', () => {
  
    let validParentheses; // good practice tp avoid change in state
    beforeEach(() =>{ 
      validParentheses = ValidParentheses;
    });

    test('Edge Case 1', () => {
      const edgecase1 = validParentheses("()");
     
      console.time("answer time");

      expect(edgecase1).toBe(true);
      console.timeEnd("answer time");

    });

    test('Edge Case 2', () => {
      const edgecase2 = validParentheses("()[]{}");
     

      expect(edgecase2).toBe(true);

    });

    test('Edge Case 3', () => {
      const edgecase3 = validParentheses("(]");
     

      expect(edgecase3).toBe(false);

    });


  });
 