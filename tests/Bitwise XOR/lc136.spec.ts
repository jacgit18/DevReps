import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBitWiseXOR } from "../../src/Attempt/Bitwise XOR";
import { SolutionBitWiseXOR } from "../../src/Solution/Bitwise XOR";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [[2, 2, 1]], expected: 0 },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [[2, 2, 1]], expected: 1, performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: [[2, 2, 1]], expected: 1 },
    { params: [[4, 1, 2, 1, 2]], expected: 4 },
    { params: [[1]], expected: 1 },
    // Add more test cases as needed
  ];
    

  generateTestCases(AttemptBitWiseXOR.lc136.singleNumberBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptBitWiseXOR.lc136.singleNumberNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptBitWiseXOR.lc136.singleNumberNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptBitWiseXOR.lc136.singleNumberOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionBitWiseXOR.lc136, testCases, ' Solution ');


};

runTestCases();
