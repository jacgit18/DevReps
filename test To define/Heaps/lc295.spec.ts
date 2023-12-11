import { generateTestCases } from "../../lib/genTest";
import { AttemptHeaps } from "../../src/Attempt/Heaps";



const runTestCases = () => {


      
  
    generateTestCases(AttemptHeaps.lc202.isHappyBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
    generateTestCases(AttemptHeaps.lc202.isHappyNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(AttemptFastSlowPointers.lc202.isHappyNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptFastSlowPointers.lc202.isHappyOptimal, testCasePerformance, ' Optimal Code Attempt ');

    generateTestCases(AttemptHeaps.lc202, testCases,' Solution ',);
  
    
    };
    
    runTestCases();
    