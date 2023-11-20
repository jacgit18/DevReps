import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers/index";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers/index";
import { generateTestCases, TestCase } from "../../util/genTest";

// fix
const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: ["h","e","l","l","o"], expected: [" "] },
  ];

  const testCases:  TestCase[]  = [
    { params: ["h","e","l","l","o"], expected: ["o","l","l","e","h"] },
    { params: ["H","a","n","n","a","h"], expected: ["h","a","n","n","a","H"] },
   

    // Add more test cases here
  ];


    generateTestCases(OptimalTwoPointerAttempt.lc344, testCasePlaceholder,' Attempt ');
    generateTestCases(OptimalTwoPointerSolution.lc344, testCases,' Solution ',);


  

};

runTestCases();
