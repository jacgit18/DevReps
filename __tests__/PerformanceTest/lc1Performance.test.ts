import { combinedAttemptExports } from "../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../src/routers/OptimalSolution";
import BenchmarkHelper from '../../src/util/benchmark-helper';

type TestFunction = (nums: number[], target: number) => number[];

const generateTestCases = (
  targetSumFunction: TestFunction,
  nums: number[],
  target: number,
  testName: string,
  expected: number[]
) => {
  describe(`${testName}`, () => {
    let targetFn: TestFunction;

    beforeEach(() => {
      targetFn = targetSumFunction;
    });

    it(`should output [${expected}] when nums is [${nums}] and target is ${target}`, () => {
      const result = targetFn(nums, target);
      console.time(`${testName}`);
      expect(result).toEqual(expected);
      console.timeEnd(`${testName}`);
    });
  });
};


  describe('Performance Tests', () => {
    let lc1: (nums: number[], target: number) =>  number[];
    let lc1Attempt: (nums: number[], target: number) =>  number[];
    let lc1Alt: (nums: number[], target: number) =>  number[];
  
    beforeEach(() => {
      lc1 = combinedSolutionExports.OptimalTwoPointerSolution.lc1;
      lc1Attempt = combinedAttemptExports.OptimalSlidingWindAttempt.lc1;
      lc1Alt = combinedSolutionExports.OptimalTwoPointerSolution.lc1Alt;
    });
  
    const testCases = [
      { nums: [1, 2, 3, 4, 6], target: 6, expect: [1, 3] },
      // Add more test cases here
    ];
  
    testCases.forEach((testCase, index) => {
      it(`lc209 Speed test - Test Case ${index + 1}`, () => {
        BenchmarkHelper.benchmarkFunction(lc1, testCase.nums, testCase.target);
      });

      it(`lc209 Speed test - Test Case ${index + 1}`, () => {
        BenchmarkHelper.benchmarkFunction(lc1Attempt, testCase.nums, testCase.target);
      });
  
      it(`lc209Alt Speed test - Test Case ${index + 1}`, () => {
        BenchmarkHelper.benchmarkFunction(lc1Alt, testCase.nums, testCase.target);
      });
    });
  });
  