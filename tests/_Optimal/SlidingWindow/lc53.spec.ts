import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { generateTestCases, TestCase } from "../../util/genTest";



const runTestCases = () => {
  const testCasePlaceholder:  TestCase[]  = [
    { params:[ 3, [2, 3, 4, 1, 5]], expected: 0 },
  ];

  const testCases: TestCase[]  = [
    { params:[ 3, [2, 3, 4, 1, 5]], expected: 10 },

    // Add more test cases here
  ];


    generateTestCases(OptimalSlidingWindowAttempt.lc53, testCasePlaceholder, ' Attempt ');

  // Solution Bug need to fix 
    // generateTestCases(OptimalSlidingWindSolution.lc53, testCases, ' Solution ');

};

runTestCases();
