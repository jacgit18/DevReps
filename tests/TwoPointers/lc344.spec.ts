import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";


const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: [["h","e","l","l","o"]], expected: [" "] },
  ];

  const testCasePerformance:  TestCase[]  = [
    { params: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"], performance: true },
  ];

  const testCases:  TestCase[]  = [
    { params: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"] },
    { params: [["H","a","n","n","a","h"]], expected: ["h","a","n","n","a","H"] },
    { params: [[]], expected: [] }, // Edge case: empty array
    { params: [["a"]], expected: ["a"] }, // Edge case: single-element array
    { params: [["a", "b", "c"]], expected: ["c", "b", "a"] }, // Generic case
    { params: [["1", "2", "3"]], expected: ["3", "2", "1"] }, // Generic case with string elements
    { params: [["A", "B", "C"]], expected: ["C", "B", "A"] }, // Generic case with uppercase characters
    // Add more test cases here
  ];


    generateTestCases(AttemptTwoPointer.lc344.reverseStringBruteForce, testCasePlaceholder,' BruteForce Code Attempt ');
    // generateTestCases(AttemptTwoPointer.lc344.reverseStringNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');
    generateTestCases(AttemptTwoPointer.lc344.reverseStringNaiveImp, testCasePlaceholder,' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptTwoPointer.lc344.reverseStringOptimal, testCasePlaceholder,' Optimal Code Attempt ');

    generateTestCases(SolutionTwoPointer.lc344.reverseStringTwoPointer, testCases,' Solution ',);


  

};

runTestCases();
