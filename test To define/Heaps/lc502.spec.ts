import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptHeaps } from "../../src/Attempt/Heaps";
import { SolutionHeaps } from "../../src/Solution/Heaps";

const runTestCases = () => {

   
  const testCasePlaceholder: TestCase[]  = [
    {
      params: 2,
      paramsTwo: 0,
      paramsThree: [1, 2, 3],
      paramsFour: [0, 1, 1],
      expected: 0,
    },
    ];
  

  const testCasePerformance:  TestCase[]  = [
    {
      params: 2,
      paramsTwo: 0,
      paramsThree: [1, 2, 3],
      paramsFour: [0, 1, 1],
      expected: 4,
      performance: true
    },
  ];

  const testCases:  TestCase[]  = [
    // Test Case 1
    {
      params: 2,
      paramsTwo: 0,
      paramsThree: [1, 2, 3],
      paramsFour: [0, 1, 1],
      expected: 4,
    },
    // Test Case 2
    {
      params: 3,
      paramsTwo: 0,
      paramsThree: [1, 2, 3],
      paramsFour: [0, 1, 2],
      expected: 4,
    },
    // Add more test cases as needed
  ];
    
      
   
      generateTestCases(AttemptHeaps.lc502.findMaximizedCapitalBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
      generateTestCases(AttemptHeaps.lc502.findMaximizedCapitalNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
    
      generateTestCases(AttemptHeaps.lc502.findMaximizedCapitalNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
      generateTestCases(AttemptHeaps.lc502.findMaximizedCapitalOptimal, testCasePerformance, ' Optimal Code Attempt ');
  
      generateTestCases(SolutionHeaps.lc502, testCases,' Solution ',);

  
    
    };
    
    runTestCases();
    