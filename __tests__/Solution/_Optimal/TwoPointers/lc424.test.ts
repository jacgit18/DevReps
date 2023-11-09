import { combinedAttemptExports } from "../../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../../src/routers/OptimalSolution";

  
  describe('smallest_subarray_with_given_sum', () => {
    let lc424Solution: (s: string, num: number) => number;
    let lc424Attempt: (s: string, arr: number) => number;

    let testCases: { input: string, k: number, expected: number }[];
  
    beforeEach(() => {
      lc424Solution = combinedSolutionExports.OptimalTwoPointerSolution.lc424;
      lc424Attempt = combinedAttemptExports.OptimalTwoPointerAttempt.lc424;

       testCases = [
        { input: "ABAB", k: 2, expected: 4 },
        { input: "AABABBA", k: 1, expected: 4 },
        { input: "ABCDE", k: 1, expected: 2 },
        { input: "AAAA", k: 2, expected: 4 },
        { input: "AAAB", k: 0, expected: 3 },
        { input: "AABA", k: 0, expected: 2 },
      ];
    });
  
    it('should run Attempt test cases', () => {
      testCases.forEach((testCase) => {
        const { input, k, expected } = testCase;
        const AttemptResult = lc424Attempt(input, k);
        expect(AttemptResult).toBe(k);// Passed param instead of expected value 
      });
    });

    it('should run Solution test cases', () => {
      testCases.forEach((testCase) => {
        const { input, k, expected } = testCase;
        const SolutionResult = lc424Solution(input, k);
        console.time('lc424');
        expect(SolutionResult).toBe(expected);
        console.timeEnd('lc424');

      });
    });


  });
  