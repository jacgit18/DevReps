import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptSlidingWindow } from "../../src/Attempt/SlidingWindow";
import { SolutionSlidingWindow } from "../../src/Solution/SlidingWindow";


const runTestCases = () => {
  const testCasePlaceholder: TestCase[]  = [
    { params: ["araaci", 2], expected: 0 },
  ];

  const testCasePerformance: TestCase[]  = [
    { params: ["araaci", 2], expected: 4, performance: true },
  ];

  // const testCases: TestCase[]  = [
  //   { params: ["araaci", 2], expected: 4 },
  //   { params: ["araaci", 1], expected: 2 },
  //   { params: ["cbbebi", 3], expected: 5 },
  //   { params: ["aaaaa", 1], expected: 5 }, // All characters are the same
  //   { params: ["abc", 0], expected: 0 }, // Window size is zero
  //   { params: ["", 1], expected: 0 }, // Empty string
  // ];


  const testCases: TestCase[]  = [
    { params: ["araaci"], paramsTwo: 2, expected: 4 },
    { params: ["araaci"], paramsTwo: 1, expected: 2 },
    { params: ["cbbebi"], paramsTwo: 3, expected: 5 },
    { params: ["aaaaa"], paramsTwo: 1, expected: 5 }, // All characters are the same
    { params: ["abc"], paramsTwo: 0, expected: 0 }, // Window size is zero
    { params: [""], paramsTwo: 1, expected: 0 }, // Empty string
  ];


  generateTestCases(AttemptSlidingWindow.lc340.longest_substring_with_k_distinctBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptSlidingWindow.lc340.longest_substring_with_k_distinctNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptSlidingWindow.lc340.longest_substring_with_k_distinctNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptSlidingWindow.lc340.longest_substring_with_k_distinctOptimal, testCasePerformance, ' Optimal Code Attempt ');

  
  generateTestCases(SolutionSlidingWindow.lc340, testCases, ' Solution ');


};

runTestCases();
