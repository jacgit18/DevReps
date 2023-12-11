import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptFastSlowPointers } from "../../src/Attempt/Fast Slow Pointer";
import { SolutionFastSlowPointer } from "../../src/Solution/Fast Slow Pointer";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [19], expected: true },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [19], expected: true, performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: [19], expected: true },
    { params: [2], expected: false },
    // Add more test cases as needed
  ];
      
  
  generateTestCases(AttemptFastSlowPointers.lc202.isHappyBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptFastSlowPointers.lc202.isHappyNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(AttemptFastSlowPointers.lc202.isHappyNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptFastSlowPointers.lc202.isHappyOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionFastSlowPointer.lc202, testCases,' Solution ',);

  
    
    };
    
    runTestCases();
    