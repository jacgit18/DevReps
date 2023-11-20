import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: ["araaci", 2], expected: 0 },
  ];

  const testCases: TestCase[]  = [
    { params: ["araaci", 2], expected: 4 },
    { params: ["araaci", 1], expected: 2 },
    { params: ["cbbebi", 3], expected: 5 },
    // Add more test cases here
  ];


  generateTestCases(OptimalSlidingWindowAttempt.lc340, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc340, testCases, ' Solution ');


};

runTestCases();
