import { generateTestCases, TestCase } from "../../../lib/genTest";
import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/_Optimal/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/_Optimal/SlidingWindow";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params:["abcabcbb"], expected: 0 },
  ];
  
  const testCases:  TestCase[]  = [
    { params: ["abcabcbb"], expected: 3 },
    { params: ["bbbbb"], expected: 1 },
    { params: ["pwwkew"], expected: 3 },
    { params: [""], expected: 0 },
    { params: ["aab"], expected: 2 },
    { params: ["dvdf"], expected: 3 },
  ];

    generateTestCases(OptimalSlidingWindowAttempt.lc3, testCasePlaceholder, ' Attempt ');
    generateTestCases(OptimalSlidingWindSolution.lc3, testCases, ' Solution ');

  
  };
  
  runTestCases();
  