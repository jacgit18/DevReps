// import { combinedAttemptExports } from "../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../src/routers/OptimalSolution";


type TestFunction = (str: string, targets: string) => string;

const generateTestCases = (
  minWindowFunction: TestFunction,
  str: string,
  targets: string,
  testName: string,
  expected: string
) => {
  describe(`minWindow ${testName}`, () => {
    let minWindowFn: TestFunction;

    beforeEach(() => {
      minWindowFn = minWindowFunction;
    });

    it(`should return "${expected}" for str: "${str}" and targets: "${targets}"`, () => {
      const result = minWindowFn(str, targets);
      console.time(`minWindow${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`minWindow${testName}`);
    });
  });
};

const runTestCases = () => {

  const testCases = [
    { str: "ADOBECODEBANC", target: "ABC", expect: "BANC" },
    { str: "a", target: "a", expect: "a" },
    { str: "a", target: "aa", expect: "" },


    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
  //   generateTestCases(
  //     combinedAttemptExports,
  //     testCase.str,
  //     testCase.target,
  //     `Test Case ${index + 1}`,
  //     testCase.expect
  //   );
  

  generateTestCases(
    combinedSolutionExports.OptimalSlidingWindSolution.lc76,
    testCase.str,
    testCase.target,
    `Test Case ${index + 1}`,
    testCase.expect
  );



  });
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
 