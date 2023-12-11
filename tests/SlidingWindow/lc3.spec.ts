import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptSlidingWindow } from "../../src/Attempt/SlidingWindow/index";
import { SolutionSlidingWindow } from "../../src/Solution/SlidingWindow";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params:["abcabcbb"], expected: 0 },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: ["abcabcbb"], expected: 3, performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: ["abcabcbb"], expected: 3 },
    { params: ["bbbbb"], expected: 1 },
    { params: ["pwwkew"], expected: 3 },
    { params: [""], expected: 0 },
    { params: ["aab"], expected: 2 },
    { params: ["dvdf"], expected: 3 },
  ];
    
    generateTestCases(AttemptSlidingWindow.lc3.lengthOfLongestSubstringBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
    generateTestCases(AttemptSlidingWindow.lc3.lengthOfLongestSubstringNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
    // generateTestCases(AttemptSlidingWindow.lc3.lengthOfLongestSubstringNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptSlidingWindow.lc3.lengthOfLongestSubstringOptimal, testCasePerformance, ' Optimal Code Attempt ');
  
    generateTestCases(SolutionSlidingWindow.lc3, testCases, ' Solution ');

  
  };
  
  runTestCases();
  