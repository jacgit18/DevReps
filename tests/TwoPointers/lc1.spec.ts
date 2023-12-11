import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";


const runTestCases = () => {

    const testCasePlaceholder: TestCase[] = [
      { params: [1, 2, 3, 4, 6], paramsTwo: 6, expected: [0]},
    ];
    

    const testCasePerformance: TestCase[] = [
      { params: [1, 2, 3, 4, 6], paramsTwo: 6, expected: [1,3], performance: true},
    ];
    
    
        
    const testCases: TestCase[] = [
      { params: [[1, 2, 3, 4, 6], 6], expected: [1, 3]},
      { params: [[2, 7, 11, 15], 9], expected: [0, 1]},
      { params: [[3, 2, 4], 6], expected: [1, 2]},
      { params: [[3, 3], 6], expected: [0, 1]},

      // Add more test cases here
    ];


    const testCasesWeridBehavior: TestCase[] = [
      { params: [1, 2, 3, 4, 6], paramsTwo: 6, expected: [1, 3]},
      { params: [2, 7, 11, 15], paramsTwo: 9, expected: [0, 1]},
      { params: [3, 2, 4], paramsTwo: 6, expected: [1, 2]},
      { params: [3, 3], paramsTwo: 6, expected: [0, 1]},

      // Add more test cases here
    ];



      generateTestCases(AttemptTwoPointer.lc1.twoSumBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
      generateTestCases(AttemptTwoPointer.lc1.twoSumNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
      
      // generateTestCases(AttemptTwoPointer.lc1.twoSumNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
      // generateTestCases(AttemptTwoPointer.lc1.twoSumOptimal, testCasePerformance, ' Optimal Code Attempt ');

      generateTestCases(SolutionTwoPointer.lc1, testCases, ' Solution ');

  
    
    };
    
    runTestCases();
    