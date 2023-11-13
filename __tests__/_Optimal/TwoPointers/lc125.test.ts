// import { combinedAttemptExports } from "../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../src/routers/OptimalSolution";


type TestFunction = (sen: string) => boolean;

const generateTestCases = (
  palValidatorFunction: TestFunction,
  sentence: string,
  testName: string,
  expected: boolean
) => {
  describe(`palValidator ${testName}`, () => {
    let palFn: TestFunction;

    beforeEach(() => {
      palFn = palValidatorFunction;
    });

    it(`should return ${expected} for sentence: "${sentence}"`, () => {
      const result = palFn(sentence);
      console.time(`pal${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`pal${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCases = [
    { sentence: "A man, a plan, a canal: Panama", expect: true },
    { sentence: "racecar", expect: true },
    { sentence: "hello", expect: false },
    { sentence: "Was it a car or a cat I saw?", expect: true },
    { sentence: " ", expect: true },

    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
    // generateTestCases(
    //     combinedAttemptExports.OptimalTwoPointerAttempt.,
    //     testCase.sentence,
    //     `Test Case ${index + 1}`,
    //     testCase.expect
    //   );

    generateTestCases(
      combinedSolutionExports.OptimalTwoPointerSolution.lc125,
      testCase.sentence,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });
};

runTestCases();





 