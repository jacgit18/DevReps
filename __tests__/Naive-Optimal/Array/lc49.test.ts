// const GroupAnagrams = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc49');

//   describe('Test suite for group anagram ', () => {
  
//     let groupAnagrams; // good practice tp avoid change in state
//     beforeEach(() =>{ 
//       groupAnagrams = GroupAnagrams;
//     });

//     test('Edge Case 1', () => {
//       const edgecase1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
     
//       console.time("answer time");

//       expect(edgecase1).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
//       console.timeEnd("answer time");

//     });

//     test('Edge Case 2', () => {
//       const edgecase2 = groupAnagrams([""]);
     

//       expect(edgecase2).toStrictEqual([[""]]);

//     });

//     test('Edge Case 3', () => {
//       const edgecase3 = groupAnagrams(["a"]);
     

//       expect(edgecase3).toStrictEqual([["a"]]);

//     });


//   });
 


// Update to problem solution
// import { combinedAttemptExports } from "../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../src/routers/OptimalSolution";


type TestFunction = (k: number, arr: number[]) => number;

const generateTestCases = (
  maxSubarrayFunction: TestFunction,
  k: number,
  arr: number[],
  testName: string,
  expected: number
) => {
  describe(`max_subarray_size_k ${testName}`, () => {
    let maxSubFn: TestFunction;

    beforeEach(() => {
      maxSubFn = maxSubarrayFunction;
    });

    it(`should return ${expected} for k = ${k} and arr = [${arr}]`, () => {
      const result = maxSubFn(k, arr);
      console.time(`maxSubarray${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`maxSubarray${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCases = [
    { k: 3, arr: [2, 3, 4, 1, 5], expect: 10 },

    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
//     generateTestCases(
//         combinedAttemptExports,
//       testCase.k,
//       testCase.arr,
//       `Test Case ${index + 1}`,
//       testCase.expect
//     );

    generateTestCases(
      combinedSolutionExports.OptimalSlidingWindSolution.lc53,
      testCase.k,
      testCase.arr,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });


};

runTestCases();

 