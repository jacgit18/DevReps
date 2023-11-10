// const EncodeDecodeStrings  = require('../../_Grokking_Algo & Leetcode/_Extra todo/Array or String/lc271');

// // Input: ["lint","code","love","you"]
// // Output: ["lint","code","love","you"]
// // Explanation:
// // One possible encode method is: "lint:;code:;love:;you"


// // Input: ["we", "say", ":", "yes"]
// // Output: ["we", "say", ":", "yes"]
// // Explanation:
// // One possible encode method is: "we:;say:;:::;yes"

//   describe('Test suite for checking palindrome ', () => {
  
//     let encodeDecodeStrings; // good practice tp avoid change in state
//     beforeEach(() =>{ 
//         encodeDecodeStrings = EncodeDecodeStrings;
//     });

//     test('Edge Case 1', () => {
//       const edgecase1 = encodeDecodeStrings("A man, a plan, a canal: Panama");
     
//       console.time("answer time");

//       expect(edgecase1).toBe(true);
//       console.timeEnd("answer time");

//     });

//     test('Edge Case 2', () => {
//       const edgecase2 = validPalindrome("race a car");
     

//       expect(edgecase2).toBe(false);

//     });



//   });
 


// Update to problem solution
import { combinedAttemptExports } from "../../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../../src/routers/OptimalSolution";


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

 