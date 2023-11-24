import { generateTestCases, TestCase } from "../../../lib/genTest";
import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/SlidingWindow";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 0 },

  ];

  const testCases: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 3 },
    { params: [["A", "B", "X", "Y", "C", "A", "A", "A"]], expected: 4 },
    { params: [["A", "B", "C", "B", "B", "C"]], expected: 5 },
    { params: [[]], expected: 0 }, // Empty array
    { params: [["A"]], expected: 1 }, // Single-element array

    // Failing cases
    // { params: [["A", "B", "C", "D", "A", "B", "C"]], expected: 6 }, // Generic case
    // { params: [["A", "A", "A", "A", "A"]], expected: 1 }, // All elements are the same
    // { params: [["A", "B", "C", "D", "E"]], expected: 5 }, // No repeated elements
  
  ];


  generateTestCases(OptimalSlidingWindowAttempt.lc904, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc904, testCases, ' Solution ');




};

runTestCases();
