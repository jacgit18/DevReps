import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptGreedyApproach } from "../../src/Attempt/_Greedy Approach";
import { SolutionGreedyApproach } from "../../src/Solution/_Greedy Approach";




const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: ["abccccdd"], expected: 0 },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: ["abccccdd"], expected: 7, performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: ["abccccdd"], expected: 7 },
    { params: ["a"], expected: 1 },
    // Add more test cases as needed
  ];
    

  generateTestCases(AttemptGreedyApproach.lc409.longestPalindromeBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptGreedyApproach.lc409.longestPalindromeNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptGreedyApproach.lc409.longestPalindromeNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptGreedyApproach.lc409.longestPalindromeOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionGreedyApproach.lc409, testCases, ' Solution ');



};

runTestCases();
