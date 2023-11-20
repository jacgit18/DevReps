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

    // Add more test cases here
  ];

  generateTestCases(OptimalSlidingWindowAttempt.lc209, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc209, testCases, ' Solution ');
  generateTestCases(OptimalSlidingWindSolution.lc209alt, testCases, ' Solution Alt');


};

runTestCases();
