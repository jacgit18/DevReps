import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow/index";


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


  const testCasePlaceholder = [
    { s:"abcabcbb", expect: 0 },
  ];
  
    const testCases = [
      { s:"abcabcbb", expect: 3 },
      { s:"bbbbb", expect: 1 },
      { s:"pwwkew", expect: 3 },

      // Add more test cases here
    ];


    testCasePlaceholder.forEach((testCase, index) => {
      generateTestCases(
        OptimalSlidingWindowAttempt.lc3,
        testCase.s,
        `Test Case ${index + 1}`,
        testCase.expect
      );
  
    });
  
    testCases.forEach((testCase, index) => {
  
      generateTestCases(
        OptimalSlidingWindSolution.lc3,
        testCase.s,
        `Test Case ${index + 1}`,
        testCase.expect
      );
    });
  

 
  
  };
  
  runTestCases();
  