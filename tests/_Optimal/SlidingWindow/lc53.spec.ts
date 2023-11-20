import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";



const runTestCases = () => {
  const testCasePlaceholder:  TestCase[]  = [
    { params:[[0]], expected: 0 },
  ];

  const testCases: TestCase[]  = [
    { params:[[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6},
    { params:[[1]], expected: 1},
    { params:[[5, 4, -1, 7, 8]], expected: 23},


    // Add more test cases here
  ];


    generateTestCases(OptimalSlidingWindowAttempt.lc53, testCasePlaceholder, ' Attempt ');
    generateTestCases(OptimalSlidingWindSolution.lc53, testCases, " Solution ")


};

runTestCases();
