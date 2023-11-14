// import { combinedAttemptExports } from "../../../src/routers/OptimalAttempt";
import { combinedOptimalSolutionExports } from "../../../src/routers/OptimalSolution";



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
  const testCases = [
    { fruits: ["A", "B", "C", "A", "C"], expect: 3 },
    { fruits: ["A", "B", "X", "Y", "C", "A", "A", "A"], expect: 4 },
    { fruits: ["A", "B", "C", "B", "B", "C"], expect: 5 },
    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
    // generateTestCases(
    //     combinedAttemptExports,
    //   testCase.fruits,
    //   `Test Case ${index + 1}`,
    //   testCase.expect
    // );
    generateTestCases(
      combinedOptimalSolutionExports.OptimalSlidingWindSolution.lc904,
      testCase.fruits,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });
};

runTestCases();
