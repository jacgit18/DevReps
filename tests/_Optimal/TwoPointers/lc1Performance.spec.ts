import { generateTestCases, TestCase } from "../../../lib/genTest";
import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers/index";


const runTestCases = () => {

    const testCasePlaceholder: TestCase[] = [
      // { params: [[1, 2, 3, 4, 6],6], expected: [0], performance: true },
      { params: [[1, 2, 3, 4, 6],6], expected: [0]},


      // Add more test cases here
    ];
    
    
  
    const testCases: TestCase[] = [
        { params: [[1, 2, 3, 4, 6],6], expected: [1, 3], performance: true },
        // { params: [[1, 2, 3, 4, 6],6], expected: [1, 3]},


        // Add more test cases here
      ];
      
  
      generateTestCases(OptimalTwoPointerAttempt.lc1.pair_with_target_sum_BruteForce, testCasePlaceholder, ' Attempt ');
      generateTestCases(OptimalTwoPointerSolution.lc1, testCases, ' Solution ');
      generateTestCases(OptimalTwoPointerSolution.lc1Alt, testCases, 'Alt Solution ');

  
    
    };
    
    runTestCases();
    