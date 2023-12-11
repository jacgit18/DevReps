import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptCycSort } from "../../src/Attempt/Cyclic Sort";
import { SolutionCycSort } from "../../src/Solution/Cyclic Sort";

const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [[1, 2, 0]], expected: 0 },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [[1, 2, 0]], expected: 3, performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: [[1, 2, 0]], expected: 3 },
    { params: [[3, 4, -1, 1]], expected: 2 },
    { params: [[7, 8, 9, 11, 12]], expected: 1 },
    // Add more test cases as needed
  ];
    
  generateTestCases(AttemptCycSort.lc41.firstMissingPositiveBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptCycSort.lc41.firstMissingPositiveNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(AttemptCycSort.lc41.firstMissingPositiveNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptCycSort.lc41.firstMissingPositiveOptimal, testCasePerformance, ' Optimal Code Attempt ');
  
  generateTestCases(SolutionCycSort.lc41, testCases, ' Solution ');

};

runTestCases();


