import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";

const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: " " },
  ];

  const testCases: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { params: ["a", "a"], expected: "a" },
    { params: ["a", "aa"], expected: "" },
    // Add more test cases here
  ];


 


  generateTestCases(OptimalSlidingWindowAttempt.lc76, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc76, testCases, ' Solution ');



};

runTestCases();





// const MinimumWindowSubstring = require('../../_Grokking_Algo & Leetcode/Sliding Window/Javascript/lc76');

//   describe('Test suite for min window ', () => {
  
//     let minimumWindowSubstring; // good practice tp avoid change in state
//     beforeEach(() =>{ 
//       minimumWindowSubstring = MinimumWindowSubstring;
//     });

//     test('Edge Case 1', () => {
//       const edgecase1 = minimumWindowSubstring("ADOBECODEBANC", "ABC");
     
//       console.time("answer time");

//       expect(edgecase1).toBe("BANC");
//       console.timeEnd("answer time");

//     });

//     test('Edge Case 2', () => {
//       const edgecase2 =minimumWindowSubstring("a", "a");
     

//       expect(edgecase2).toBe("a");

//     });

//     test('Edge Case 3', () => {
//       const edgecase3 = minimumWindowSubstring("a", "aa");
     

//       expect(edgecase3).toBe("");

//     });


//   });
 