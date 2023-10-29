const MaximumSumOfSubarray = require('../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc53');

  describe('Test suite maximum sum of any contiguous subarray of size ‘k’ ', () => {
  
    let maximumSumOfSubarray; // good practice tp avoid change in state
    beforeEach(() =>{ 
      maximumSumOfSubarray = MaximumSumOfSubarray;
    });

    test('Sliding Window', () => {
      const edgecase1 = maximumSumOfSubarray(3, [2, 1, 5, 1, 3, 2]);
      
      console.time("answer time");
      expect(edgecase1).toBe(9);
  // console.timeLog("answer time"); // time in middle
      // expect(edgecase3).toEqual(3);
      // expect(edgecase4).toEqual(0);
      console.timeEnd("answer time");

    });
  
    test('Sliding Window Test Case 2', () => {
      const edgecase2 = maximumSumOfSubarray(2, [2, 3, 4, 1, 5]);
      
      expect(edgecase2).toBe(7);
    

    });

  });
 