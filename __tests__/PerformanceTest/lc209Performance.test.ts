import { combinedSolutionExports } from "../../src/routers/OptimalSolution";
import BenchmarkHelper from '../../src/util/benchmark-helper';


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




describe('smallest_subarray_with_given_sum', () => {
  let lc209: (s: number, arr: number[]) => number;
  let lc209Alt: (s: number, arr: number[]) => number;

  beforeEach(() => {
    lc209 = combinedSolutionExports.OptimalSlidingWindSolution.lc209;
    lc209Alt = combinedSolutionExports.OptimalSlidingWindSolution.lc209alt;
  });

  it('lc209 Speed test ', () => {
  // Dont need to bench mark all the time only doing it for files with multiple approaches
  BenchmarkHelper.benchmarkFunction(lc209, 7, [2, 1, 5, 2, 3, 1]);

  },3000);

  it('lc209Alt Speed test', () => {
   
    BenchmarkHelper.benchmarkFunction(lc209Alt, 7, [2, 1, 5, 2, 3, 1]);
  
    },3000);

});


// const runTestCases = () => {
//   const testCases = [
//     { input: 7, arr: [2, 1, 5, 2, 3, 1], expect: 2 },
//     { input: 7, arr: [2, 3, 1, 2, 4, 3], expect: 2 },
//     { input: 4, arr: [1, 4, 4], expect: 1 },
//     { input: 11, arr: [1,1,1,1,1,1,1,1], expect: 0 },

    
//     // Add more test cases here
//   ];

//   testCases.forEach((testCase, index) => {

//     // Test the Solution approach
//     generateTestCases(
//       combinedSolutionExports.OptimalSlidingWindSolution.lc209,
//       testCase.input,
//       testCase.arr,
//       `209 Solution - Test Case ${index + 1}`,
//       testCase.expect
//     );

//     // Test the Alt Approach
//     generateTestCases(
//       combinedSolutionExports.OptimalSlidingWindSolution.lc209alt,
//       testCase.input,
//       testCase.arr,
//       `209 Alt Solution - Test Case ${index + 1}`,
//       testCase.expect
//     );
//   });
// };


// runTestCases();

