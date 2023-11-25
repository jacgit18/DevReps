import { generateTestCases, TestCase } from "../../lib/genTest";
import { OptimalTwoPointerAttempt } from "../../src/Attempt/TwoPointers";
import { OptimalTwoPointerSolution } from "../../src/Solution/TwoPointers/index";


const runTestCases = () => {

    const testCasePlaceholder: TestCase[] = [
      { params: [1, 2, 3, 4, 6], paramsTwo: 6, expected: [0]},


      // Add more test cases here
    ];
    
    
  
    const testCases: TestCase[] = [
        { params: [1, 2, 3, 4, 6], paramsTwo: 6, expected: [1, 3], performance: true },
        // Fix failing Soulution 
        // { params: [2,7,11,15], paramsTwo: 9, expected: [0, 1]},
        // { params: [3, 2, 4], paramsTwo: 6, expected: [1, 2]},
        // { params: [3,3], paramsTwo: 6, expected: [0, 1]},


        // Add more test cases here
      ];
      
  
      generateTestCases(OptimalTwoPointerAttempt.lc1.pair_with_target_sum_Naive, testCasePlaceholder, ' Attempt ');
      generateTestCases(OptimalTwoPointerSolution.lc1.pair_with_target_sum_Two_Pointer, testCases, ' Solution ');
      generateTestCases(OptimalTwoPointerSolution.lc1.pair_with_target_sum_map, testCases, 'Alt Solution ');

  
    
    };
    
    runTestCases();
    