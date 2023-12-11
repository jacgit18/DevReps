import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTop_K_Elements } from "../../src/Attempt/Top K Elements";
import { SolutionTop_K_Elements } from "../../src/Solution/Top K Elements";

// import { MinHeap } from "../../src/util/MinHeapMaker";

const runTestCases = () => {
  // Test cases

  const testCasePlaceholder: TestCase[] = [
    {params: [[3, 2, 1, 5, 6, 4], 2], expected: 0}
  ];

  const testCasePerformance: TestCase[] = [
    {params: [[3, 2, 1, 5, 6, 4], 2], expected: 5, performance: true}
  ];

  const testCasesTofix: TestCase[] = [
    {params: [3, 2, 1, 5, 6, 4], paramsTwo: 2, expected: 5},
    {params: [3, 2, 3, 1, 2, 4, 5, 5, 6], paramsTwo: 4, expected: 4}
    // Add more test cases here...
  ];


  const testCases: TestCase[] = [
    {params: [[3, 2, 1, 5, 6, 4], 2], expected: 5},
    {params: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4},
    // Add more test cases here...
  ];


  generateTestCases(AttemptTop_K_Elements.lc215.findKthLargestBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptTop_K_Elements.lc215.findKthLargestNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');

  generateTestCases(AttemptTop_K_Elements.lc215.findKthLargestNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
  generateTestCases(AttemptTop_K_Elements.lc215.findKthLargestOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionTop_K_Elements.lc215, testCases,' Solution ',);};

runTestCases();
