import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";
import { generateTestCases, TestCase } from "../../util/genTest";

const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: " " },
  ];

  const testCases: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { params: ["a", "a"], expected: "a" },
    { params: ["a", "aa"], expected: "" },
    // Add more test cases here
  ];


 


  generateTestCases(OptimalSlidingWindowAttempt.lc76, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc76, testCases, ' Solution ');



};

runTestCases();