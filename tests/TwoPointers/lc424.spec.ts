import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";



const runTestCases = () => {

  const testCasePlaceholder:  TestCase[] = [
    { params: ["ABAB", 2], expected: 0 },
  ];

  const testCasePerformance: TestCase[] = [
    { params: ["ABAB"], paramsTwo: 2, expected: 4, performance:true },
  ];


  const testCases: TestCase[] = [
    { params: ["ABAB"], paramsTwo: 2, expected: 4 },
    { params: ["AABABBA"], paramsTwo: 1, expected: 4 },
    { params: ["ABCDE"], paramsTwo: 1, expected: 2 },
    { params: ["AAAA"], paramsTwo: 2, expected: 4 },
    { params: ["AAAB"], paramsTwo: 0, expected: 3 },
    { params: ["AABA"], paramsTwo: 0, expected: 2 }
  ];



  generateTestCases(AttemptTwoPointer.lc424.characterReplacementBruteForce, testCasePlaceholder,' BruteForce Code Attempt ');
  generateTestCases(AttemptTwoPointer.lc424.characterReplacementNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptTwoPointer.lc424.characterReplacementNaiveImp, testCasePerformance,' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptTwoPointer.lc424.characterReplacementOptimal, testCasePerformance,' Optimal Code Attempt ');

  generateTestCases(SolutionTwoPointer.lc424, testCases, 'Solution');
};

runTestCases();
