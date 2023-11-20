import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers/index";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers/index";
import { generateTestCases, TestCase } from "../../util/genTest";

const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: [["h","e","l","l","o"]], expected: [" "] },
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


    generateTestCases(OptimalTwoPointerAttempt.lc344, testCasePlaceholder,' Attempt ');
    generateTestCases(OptimalTwoPointerSolution.lc344.reverseStringTwoPointer, testCases,' Solution ',);


  

};

runTestCases();
