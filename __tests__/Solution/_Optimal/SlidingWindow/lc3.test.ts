// const LongestSubstring = require('../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc3');
// // import LongestSubstring from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc3';
// // import { LongestSubstring } from '../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc3';
  
//   // You can also group tests together using a describe block. When they are inside a describe
//   //  block, the before and after blocks only apply to the tests within that describe block.
//   // beforeEach(() => console.log('1 - beforeEach'));
//   describe('Test suite for different algo approaches', () => {
//     // Applies only to tests in this describe block
//     // beforeEach(() => {
//     //   return initializeFoodDatabase(); // like if db is need
//     // });
//     // beforeAll(() => console.log('1 - beforeAll'));
//     let longestSubstring; // good practice tp avoid change in state
//     beforeEach(() =>{ 
//       // longestSubstring = new LongestSubstring();
//       longestSubstring = LongestSubstring;

//     });

//     test('Two Pointers', () => {
//       const edgecase1 = longestSubstring.twoPointerLongestSubstring("abcabcbb");
//       const edgecase2 = longestSubstring.twoPointerLongestSubstring("bbbbb");
//       const edgecase3 = longestSubstring.twoPointerLongestSubstring("pwwkew");
//       const edgecase4 = longestSubstring.twoPointerLongestSubstring("");
  
//       expect(edgecase1).toBe(3);
//       expect(edgecase2).toBe(1);
//       expect(edgecase3).toEqual(3);
//       expect(edgecase4).toEqual(0);
//       // toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
//     });
  
//     test('Sliding Windows', () => {
//       const edgecase1 = longestSubstring.slidingWindowLongestSubstring("abcabcbb");
//       const edgecase2 = longestSubstring.slidingWindowLongestSubstring("bbbbb");
//       const edgecase3 = longestSubstring.slidingWindowLongestSubstring("pwwkew");
//       const edgecase4 = longestSubstring.slidingWindowLongestSubstring("");
  
//       expect(edgecase1).toEqual(3);
//       expect(edgecase2).toEqual(1);
//       expect(edgecase3).toEqual(3);
//       expect(edgecase4).toEqual(0);
  
//     });
  


//     // afterAll(() => console.log('1 - afterAll'));

//   });
//   // afterEach(() => console.log('1 - afterEach'));
//   // Note that the top-level beforeEach is executed before the beforeEach inside the describe block. 
//   // It may help to illustrate the order of execution of all hooks.

  
  