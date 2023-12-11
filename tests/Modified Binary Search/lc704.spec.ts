import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptModifiedBinarySearch } from "../../src/Attempt/Modified Binary Search";
import { SolutionModifiedBinarySearch } from "../../src/Solution/Modified Binary Search";

const runTestCases = () => {
  // Test cases
  const testCasePlaceholder: TestCase[] = [
    {
      params: [-1,0,3,5,9,12],
      paramsTwo: 9,
      expected: 0,
    }
  ];

  const testCasePerformance: TestCase[] = [
    {params: [[-1,0,3,5,9,12]], paramsTwo: 9, expected: 4, performance: true},
  ];

  const testCases: TestCase[] = [
    {params: [[-1,0,3,5,9,12]], paramsTwo: 9, expected: 4},
    {params: [[-1,0,3,5,9,12]], paramsTwo: 2, expected: -1},
    // Add more test cases here...
  ];

    
  generateTestCases(AttemptModifiedBinarySearch.lc704.searchBinBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptModifiedBinarySearch.lc704.searchBinNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(AttemptModifiedBinarySearch.lc704.searchBinNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptModifiedBinarySearch.lc704.searchBinOptimal, testCasePerformance, ' Optimal Code Attempt ');

  // generateTestCases(SolutionModifiedBinarySearch.lc704.searchBinRec, testCasePerformance,' Recursive Solution ',);
  // generateTestCases(SolutionModifiedBinarySearch.lc704.searchBinIter, testCasePerformance,' Iterative Solution ',);

  generateTestCases(SolutionModifiedBinarySearch.lc704.searchBinIter, testCases,' Iterative Solution ',);


};

runTestCases();
