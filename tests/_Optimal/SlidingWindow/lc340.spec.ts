import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow/index";

type TestFunction = (str: string, k: number) => number;

const generateTestCases = (
  substringFunction: TestFunction,
  str: string,
  k: number,
  testName: string,
  expected: number
) => {
  describe(`longest_substring_with_k_distinct ${testName}`, () => {
    let subFn: TestFunction;

    beforeEach(() => {
      subFn = substringFunction;
    });

    it(`should return ${expected} for input: "${str}" and k = ${k}`, () => {
      const result = subFn(str, k);
      console.time(`substring${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`substring${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCasePlaceholder = [
    { str: "araaci", k: 2, expect: 0 },
  ];

  const testCases = [
    { str: "araaci", k: 2, expect: 4 },
    { str: "araaci", k: 2, expect: 4 },
    { str: "araaci", k: 1, expect: 2 },
    { str: "cbbebi", k: 3, expect: 5 },
    // Add more test cases here
  ];

  testCasePlaceholder.forEach((testCase, index) => {
    generateTestCases(
      OptimalSlidingWindowAttempt.lc340,
      testCase.str,
      testCase.k,
      `Test Case ${index + 1}`,
      testCase.expect
    );

  });


  testCases.forEach((testCase, index) => {

    generateTestCases(
      OptimalSlidingWindSolution.lc340,
        testCase.str,
        testCase.k,
        `Test Case ${index + 1}`,
        testCase.expect
      );
  });

};

runTestCases();
