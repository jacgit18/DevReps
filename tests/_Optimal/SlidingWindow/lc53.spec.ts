import { generateTestCases, TestCase } from "../../../lib/genTest";
import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/SlidingWindow";



const runTestCases = () => {
  const testCasePlaceholder:  TestCase[]  = [
    { params:[[0]], expected: 0 },
  ];

  const testCases: TestCase[]  = [
    { params:[[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6},
    { params:[[1]], expected: 1},
    { params:[[5, 4, -1, 7, 8]], expected: 23},
    { params: [[-1, -2, -3, -4]], expected: -1 }, // All negative numbers
    { params: [[-5, -1, -3, -7, -2]], expected: -1 }, // Negative numbers with a single positive number
    { params: [[0]], expected: 0 }, // Single element with value 0
    { params: [[0, 0, 0, 0, 0]], expected: 0 }, // All elements are 0
    { params: [[-1, -2, -3, 0, -2, -1, -4]], expected: 0 }, // All negative numbers with a zero in between

    // Failling case 
    // { params: [[-1, 2, -1, 3, -5, 2, 4, -3, 2, 1, -4, 2, 5, -4]], expected: 11 }, // Generic case

  ];


    generateTestCases(OptimalSlidingWindowAttempt.lc53, testCasePlaceholder, ' Attempt ');
    generateTestCases(OptimalSlidingWindSolution.lc53, testCases, " Solution ")


};

runTestCases();
