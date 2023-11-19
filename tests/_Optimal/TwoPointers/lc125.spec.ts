import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers";

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

  const testCasePlaceholder = [
    { sentence: "A man, a plan, a canal: Panama", expect: true },
  ];

  const testCases = [
    { sentence: "A man, a plan, a canal: Panama", expect: true },
    { sentence: "racecar", expect: true },
    { sentence: "hello", expect: false },
    { sentence: "Was it a car or a cat I saw?", expect: true },
    { sentence: " ", expect: true },

    // Add more test cases here
  ];


  testCasePlaceholder.forEach((testCase, index) => {
    generateTestCases(
      OptimalTwoPointerAttempt.lc125,
      testCase.sentence,
      `Test Case ${index + 1}`,
      testCase.expect
    );

  });

  testCases.forEach((testCase, index) => {
    generateTestCases(
      OptimalTwoPointerSolution.lc125,
      testCase.sentence,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });


  

};

runTestCases();
