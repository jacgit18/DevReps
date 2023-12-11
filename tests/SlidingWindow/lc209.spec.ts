import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptSlidingWindow } from "../../src/Attempt/SlidingWindow";
import { SolutionSlidingWindow } from "../../src/Solution/SlidingWindow";


const runTestCases = () => {

    const testCasePlaceholder: TestCase[] = [
      { params: [7, [2, 1, 5, 2, 3, 1]], expected: 0},
    ];
    

    const testCasePerformance: TestCase[] = [
      { params: [7, [2, 1, 5, 2, 3, 1]], expected: 2 , performance: true },
      ];
    
  
    const testCases: TestCase[] = [
      { params: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
      { params:[ 4, [1, 4, 4]], expected: 1 },
      { params: [11, [1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
      { params: [3, [1, 1, 1, 1, 1]], expected: 3 }, // Window size equal to array length
      { params: [5, [1, 2, 3, 4, 5]], expected: 1 }, // Window size larger than array length
      { params: [0, []], expected: 0 }, // Empty array
      { params: [1, [5]], expected: 1 }, // Window size equal to array length with a single element
      { params: [0, [1, 2, 3]], expected: 0 }, // Window size zero
      ];

      // const testCasesWeridBehavior: TestCase[] = [
      //   { params: 7, paramsTwo: [2, 3, 1, 2, 4, 3], expected: 2 },
      //   { params: 4, paramsTwo:[1, 4, 4], expected: 1 },
      //   { params: 11, paramsTwo: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 },
      //   { params: 3, paramsTwo: [1, 1, 1, 1, 1], expected: 3 }, // Window size equal to array length
      //   { params: 5, paramsTwo: [1, 2, 3, 4, 5], expected: 1 }, // Window size larger than array length
      //   { params: 0, paramsTwo: [0, []], expected: 0 }, // Empty array
      //   { params: 1, paramsTwo: [1, [5]], expected: 1 }, // Window size equal to array length with a single element
      //   { params: 0, paramsTwo: [0, [1, 2, 3]], expected: 0 } // Window size zero
      //   ];
      
  
      generateTestCases(AttemptSlidingWindow.lc209.smallestSubarrayWithGivenSumBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
      generateTestCases(AttemptSlidingWindow.lc209.smallestSubarrayWithGivenSumNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');

      generateTestCases(AttemptSlidingWindow.lc209.smallestSubarrayWithGivenSumNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
      generateTestCases(AttemptSlidingWindow.lc209.smallestSubarrayWithGivenSumOptimal, testCasePerformance, ' Optimal Code Attempt ');

      generateTestCases(SolutionSlidingWindow.lc209.smallestSubarraySlidingWindow, testCases, ' Solution ');
      generateTestCases(SolutionSlidingWindow.lc209.smallest_subarray_with_given_sumAlt, testCases, 'Alt Solution ');

  
    
    };
    
    runTestCases();
    