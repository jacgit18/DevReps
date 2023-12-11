import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptSlidingWindow } from "../../src/Attempt/SlidingWindow/index";
import { SolutionSlidingWindow } from "../../src/Solution/SlidingWindow";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 0 },

  ];

  const testCasePerformance: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 3, performance: true},
  ];

  const testCases: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 3 },
    { params: [["A", "B", "X", "Y", "C", "A", "A", "A"]], expected: 4 },
    { params: [["A", "B", "C", "B", "B", "C"]], expected: 5 },
    { params: [[]], expected: 0 }, // Empty array
    { params: [["A"]], expected: 1 }, // Single-element array
  ];


  generateTestCases(AttemptSlidingWindow.lc904.totalFruitBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptSlidingWindow.lc904.totalFruitNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptSlidingWindow.lc904.totalFruitNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptSlidingWindow.lc904.totalFruitOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionSlidingWindow.lc904, testCases, ' Solution ');




};

runTestCases();
