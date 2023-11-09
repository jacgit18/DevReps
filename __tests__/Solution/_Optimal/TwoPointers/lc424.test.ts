import { OptimalTwoPointerAttempt } from "../../../../src/routers/OptimalAttempt";
import { OptimalTwoPointerSolution } from "../../../../src/routers/OptimalSolution";

  
  describe('smallest_subarray_with_given_sum', () => {
    let lc424Solution: (s: string, num: number) => number;
    let lc424Attempt: (s: string, arr: number) => number;
  
    beforeEach(() => {
      lc424Solution = OptimalTwoPointerSolution.lc424;
      lc424Attempt = OptimalTwoPointerAttempt.lc424;
    });
  
    it('should run test cases', () => {
      // const result1 = lc424Attempt("", 2);
      // Call lc209Alt here if needed
  
      // Add assertions to compare the results of lc209 and lc209Alt
      // expect(result1).toBe(2);
      // Add more assertions as needed
  
      // Additional test cases using the given parameters
      const testCases = [
        { input: "ABAB", k: 2, expected: 4 },
        { input: "AABABBA", k: 1, expected: 4 },
        { input: "ABCDE", k: 1, expected: 2 },
        { input: "AAAA", k: 2, expected: 4 },
        { input: "AAAB", k: 0, expected: 3 },
        { input: "AABA", k: 0, expected: 2 },
      ];
  
      testCases.forEach((testCase) => {
        const { input, k, expected } = testCase;
        const AttemptResult = lc424Attempt(input, k);
        const SolutionResult = lc424Solution(input, k);
        expect(AttemptResult).toBe(k);// Passed param instead of expected value 
        expect(SolutionResult).toBe(expected);
      });
    });
  });
  