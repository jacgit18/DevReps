import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";


const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: ["A man, a plan, a canal: Panama"], expected: true },
  ];

  const testCasePerformance:  TestCase[]  = [
    { params: ["A man, a plan, a canal: Panama"], expected: true, performance: true},
  ];

  const testCases:  TestCase[]  = [
    { params: ["A man, a plan, a canal: Panama"], expected: true },
    { params: ["racecar"], expected: true },
    { params: ["hello"], expected: false },
    { params: ["Was it a car or a cat I saw?"], expected: true },
    { params: [" "], expected: true },


    // Experiment
    // { params: ["A man, a plan, a canal: Panama"], expected: SolutionTwoPointer.lc125(["A man, a plan, a canal: Panama"]) },

    // Add more test cases here
  ];


    generateTestCases(AttemptTwoPointer.lc125.isPalindromeBruteForce, testCasePlaceholder,' BruteForce Code Attempt ');
    generateTestCases(AttemptTwoPointer.lc125.isPalindromeNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');
    
    // generateTestCases(AttemptTwoPointer.lc125.isPalindromeNaiveImp, testCasePerformance,' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptTwoPointer.lc125.isPalindromeOptimal, testCasePerformance,' Optimal Code Attempt ');


    generateTestCases(SolutionTwoPointer.lc125, testCases,' Solution ',);


  

};

runTestCases();
