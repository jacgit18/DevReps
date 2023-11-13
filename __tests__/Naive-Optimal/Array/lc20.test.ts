// const ValidParentheses = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc20');

//   describe('Test suite for valid parenheses ', () => {
  
//     let validParentheses; // good practice tp avoid change in state
//     beforeEach(() =>{ 
//       validParentheses = ValidParentheses;
//     });

//     test('Edge Case 1', () => {
//       const edgecase1 = validParentheses("()");
     
//       console.time("answer time");

//       expect(edgecase1).toBe(true);
//       console.timeEnd("answer time");

//     });

//     test('Edge Case 2', () => {
//       const edgecase2 = validParentheses("()[]{}");
     

//       expect(edgecase2).toBe(true);

//     });

//     test('Edge Case 3', () => {
//       const edgecase3 = validParentheses("(]");
     

//       expect(edgecase3).toBe(false);

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

 