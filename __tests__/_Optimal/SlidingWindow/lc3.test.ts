// import { combinedAttemptExports } from "../../../src/routers/OptimalAttempt";
import { combinedOptimalSolutionExports } from "../../../src/routers/OptimalSolution";


type TestFunction = (s: string) => number;

const generateTestCases = (
  lengthOfSubstringFunction: TestFunction,
  s: string,
  testName: string,
  expected: number
) => {
  describe(`lengthOfLongestSubstring ${testName}`, () => {
    let lengthOfSubstringFn: TestFunction;

    beforeEach(() => {
      lengthOfSubstringFn = lengthOfSubstringFunction;
    });

    it(`should return ${expected} for input: "${s}"`, () => {
      const result = lengthOfSubstringFn(s);
      console.time(`lengthOfSubstring${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`lengthOfSubstring${testName}`);
    });
  });
};



const runTestCases = () => {
    const testCases = [
      { s:"abcabcbb", expect: 3 },
      { s:"bbbbb", expect: 1 },
      { s:"pwwkew", expect: 3 },

      // Add more test cases here
    ];
  
    testCases.forEach((testCase, index) => {
  //     generateTestCases(
  //         combinedAttemptExports,
  //       testCase.s,
  //       `Test Case ${index + 1}`,
  //       testCase.expect
  //     );
  
      generateTestCases(
        combinedOptimalSolutionExports.OptimalSlidingWindSolution.lc3,
        testCase.s,
        `Test Case ${index + 1}`,
        testCase.expect
      );
    });
  
  
  };
  
  runTestCases();
  