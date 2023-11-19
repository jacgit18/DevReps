import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";


type TestFunction = (k: any, arr: any[]) => any;

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
  const testCasePlaceholder = [
    { k: 3, arr: [2, 3, 4, 1, 5], expect: 0 },
  ];

  const testCases = [
    { k: 3, arr: [2, 3, 4, 1, 5], expect: 10 },

    // Add more test cases here
  ];


  testCasePlaceholder.forEach((testCase, index) => {
    generateTestCases(
      OptimalSlidingWindowAttempt.lc53,
      testCase.k,
      testCase.arr,
      `Test Case ${index + 1}`,
      testCase.expect
    );

    
  });

  // Solution Bug
  // testCases.forEach((testCase, index) => {
  //   generateTestCases(
  //     OptimalSlidingWindSolution.lc53,
  //     testCase.k,
  //     testCase.arr,
  //     `Test Case ${index + 1}`,
  //     testCase.expect
  //   );

  // });


};

runTestCases();
