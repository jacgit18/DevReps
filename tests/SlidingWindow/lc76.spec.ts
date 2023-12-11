import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptSlidingWindow } from "../../src/Attempt/SlidingWindow";
import { SolutionSlidingWindow } from "../../src/Solution/SlidingWindow";

const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: ["ADOBECODEBANC", "ABC"], expected: " " },
  ];

  const testCasePerformance: TestCase[]  = [
    { params: "ADOBECODEBANC", paramsTwo: "ABC", expected: "BANC", performance: true},
  ];

  const testCases: TestCase[]  = [
    { params: "ADOBECODEBANC", paramsTwo: "ABC", expected: "BANC" },

    { params: "a", paramsTwo: "a", expected: "a" },
    { params: "a", paramsTwo: "aa", expected: "" },
    { params: "abc", paramsTwo: "ab", expected: "ab" }, // Generic case with matching characters
    { params: "aab", paramsTwo: "aab", expected: "aab" }, // Both strings are the same
    { params: "abcde", paramsTwo: "xyz", expected: "" }, // No matching characters
    { params: "aaaa", paramsTwo: "aa", expected: "aa" }, // Repeating characters in the pattern
    { params: "", paramsTwo: "a", expected: "" },// Empty string
  ];

  generateTestCases(AttemptSlidingWindow.lc76.minWindowBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptSlidingWindow.lc76.minWindowNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptSlidingWindow.lc76.minWindowNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptSlidingWindow.lc76.minWindowOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionSlidingWindow.lc76, testCases, ' Solution ');



};

runTestCases();