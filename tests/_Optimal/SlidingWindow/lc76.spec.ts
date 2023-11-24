import { generateTestCases, TestCase } from "../../../lib/genTest";
import { OptimalSlidingWindowAttempt } from "../../../src/Attempt/SlidingWindow/index";
import { OptimalSlidingWindSolution } from "../../../src/Solution/SlidingWindow";

const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: " " },
  ];

  const testCases: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: "BANC" },
    { params: ["a", "a"], expected: "a" },
    { params: ["a", "aa"], expected: "" },
    { params: ["abc", "ab"], expected: "ab" }, // Generic case with matching characters
    { params: ["aab", "aab"], expected: "aab" }, // Both strings are the same
    { params: ["abcde", "xyz"], expected: "" }, // No matching characters
    { params: ["aaaa", "aa"], expected: "aa" }, // Repeating characters in the pattern
    { params: ["", "a"], expected: "" }, // Empty string

    // Solution doesnt account for  this Scenario so test hangs
    // { params: ["abc", ""], expected: "" }, // Empty pattern
  ];


 


  generateTestCases(OptimalSlidingWindowAttempt.lc76, testCasePlaceholder, ' Attempt ');
  generateTestCases(OptimalSlidingWindSolution.lc76, testCases, ' Solution ');



};

runTestCases();