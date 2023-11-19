import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers";

type TestFunction = (s: string, num: number) => number;

const generateTestCases = (
  lcFunction: TestFunction,
  testCases: { input: string, k: number, expected: number }[],
  testName: string
) => {
  describe(testName, () => {
    testCases.forEach((testCase, index) => {
      const { input, k, expected } = testCase;

      it(`Test Case ${index + 1}`, () => {
        const result = lcFunction(input, k);
        console.time("lc424")
        expect(result).toBe(expected); // should fail by default since returning only param
        console.timeEnd("lc424")

      });
    });
  });
};

const runTestCases = () => {
  const testCases: { input: string, k: number, expected: number }[] = [
    { input: "ABAB", k: 2, expected: 4 },
    { input: "AABABBA", k: 1, expected: 4 },
    { input: "ABCDE", k: 1, expected: 2 },
    { input: "AAAA", k: 2, expected: 4 },
    { input: "AAAB", k: 0, expected: 3 },
    { input: "AABA", k: 0, expected: 2 },
  ];

  const testCasePlaceholder: { input: string, k: number, expected: number }[] = [
    { input: "ABAB", k: 2, expected: 0 },
  ];

  generateTestCases(OptimalTwoPointerAttempt.lc424, testCasePlaceholder, 'Attempt');
  generateTestCases(OptimalTwoPointerSolution.lc424, testCases, 'Solution');
};

runTestCases();

