import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";

import { generateTestCases, TestCase } from "../../util/genTest";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 0 },

  ];

  const testCases: TestCase[]  = [
    { params: [["A", "B", "C", "A", "C"]], expected: 3 },
    { params: [["A", "B", "X", "Y", "C", "A", "A", "A"]], expected: 4 },
    { params: [["A", "B", "C", "B", "B", "C"]], expected: 5 },
    // Add more test cases here
  ];


  generateTestCases(OptimalSlidingWindowAttempt.lc904, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc904, testCases, ' Solution ');




};

runTestCases();
