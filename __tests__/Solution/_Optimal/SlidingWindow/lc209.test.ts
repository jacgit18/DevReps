import { combinedAttemptExports } from "../../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../../src/routers/OptimalSolution";

type TestFunction = (s: number, arr: number[]) => number;

const generateTestCases = (
  lcFunction: TestFunction,
  input: number,
  arr: number[],
  testName: string,
  expected: number
) => {
  describe(`smallest_subarray_with_given_sum ${testName}`, () => {
    let lcFn: TestFunction;

    beforeEach(() => {
      lcFn = lcFunction;
    });

    it(`should output ${expected} when input is ${input} and arr is [${arr}]`, () => {
      const result = lcFn(input, arr);
      console.time(`lc${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`lc${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCases = [
    { input: 7, arr: [2, 1, 5, 2, 3, 1], expect: 2 },
    
    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
    // Test the Attempt approach
    // generateTestCases(
    //   combinedAttemptExports.OptimalSlidingWindAttempt.lc209,
    //   testCase.input,
    //   testCase.arr,
    //   `209 Attempt - Test Case ${index + 1}`,
    //   testCase.expect
    // );

    // Test the Solution approach
    generateTestCases(
      combinedSolutionExports.OptimalSlidingWindSolution.lc209,
      testCase.input,
      testCase.arr,
      `209 Solution - Test Case ${index + 1}`,
      testCase.expect
    );

    // Test the Alt Approach
    generateTestCases(
      combinedSolutionExports.OptimalSlidingWindSolution.lc209alt,
      testCase.input,
      testCase.arr,
      `209 Alt Solution - Test Case ${index + 1}`,
      testCase.expect
    );
  });
};

runTestCases();
