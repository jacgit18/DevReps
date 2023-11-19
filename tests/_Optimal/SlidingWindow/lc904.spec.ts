import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow/index";



type TestFunction = (fruits: any[]) => any;

const generateTestCases = (
  fruitsFunction: TestFunction,
  fruits: string[],
  testName: string,
  expected: number
) => {
  describe(`fruits_into_baskets ${testName}`, () => {
    let fruitsFn: TestFunction;

    beforeEach(() => {
      fruitsFn = fruitsFunction;
    });

    it(`should return ${expected} for fruits: [${fruits}]`, () => {
      const result = fruitsFn(fruits);
      console.time(`fruits${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`fruits${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCasePlaceholder = [
    { fruits: ["A", "B", "C", "A", "C"], expect: 0 },

  ];

  const testCases = [
    { fruits: ["A", "B", "C", "A", "C"], expect: 3 },
    { fruits: ["A", "B", "X", "Y", "C", "A", "A", "A"], expect: 4 },
    { fruits: ["A", "B", "C", "B", "B", "C"], expect: 5 },
    // Add more test cases here
  ];

  testCasePlaceholder.forEach((testCase, index) => {
    generateTestCases(
      OptimalSlidingWindowAttempt.lc904,
      testCase.fruits,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });



  testCases.forEach((testCase, index) => {

    generateTestCases(
      OptimalSlidingWindSolution.lc904,
      testCase.fruits,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });



};

runTestCases();
