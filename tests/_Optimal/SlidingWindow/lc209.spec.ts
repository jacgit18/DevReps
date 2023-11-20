import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params:[ 0, [0]], expected: 0},
  ];

  const testCases: TestCase[]  = [
    { params: [ 7, [2, 1, 5, 2, 3, 1]], expected: 2 },
    { params: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
    { params:[ 4, [1, 4, 4]], expected: 1 },
    { params: [11, [1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
    { params: [3, [1, 1, 1, 1, 1]], expected: 3 }, // Window size equal to array length
    { params: [5, [1, 2, 3, 4, 5]], expected: 1 }, // Window size larger than array length
    { params: [0, []], expected: 0 }, // Empty array
    { params: [1, [5]], expected: 1 }, // Window size equal to array length with a single element
    { params: [0, [1, 2, 3]], expected: 0 }, // Window size zero

    // Failing Cases
    // { params: [2, [5, 4]], expected: 4 }, // Window size equal to array length with two elements
    // { params: [2, [3, 2, 1, 5, 4, 3, 2, 1]], expected: 2 }, // Generic case
    // { params: [10, [2, 5, 1, 3, 4, 1, 2, 1, 4, 3]], expected: 3 }, // Generic case
  ];

  generateTestCases(OptimalSlidingWindowAttempt.lc209, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc209, testCases, ' Solution ');
  generateTestCases(OptimalSlidingWindSolution.lc209alt, testCases, ' Solution Alt');


};

runTestCases();
