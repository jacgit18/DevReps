import { OptimalTwoPointerAttempt } from "../../../src/Attempt/_Optimal/TwoPointers";
import { OptimalTwoPointerSolution } from "../../../src/Solution/_Optimal/TwoPointers";

import { generateTestCases, TestCase } from "../../util/genTest";


const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: ["A man, a plan, a canal: Panama"], expected: true },
  ];

  const testCases:  TestCase[]  = [
    { params: ["A man, a plan, a canal: Panama"], expected: true },
    { params: ["racecar"], expected: true },
    { params: ["hello"], expected: false },
    { params: ["Was it a car or a cat I saw?"], expected: true },
    { params: [" "], expected: true },

    // Add more test cases here
  ];


    generateTestCases(OptimalTwoPointerAttempt.lc125, testCasePlaceholder,' Attempt ');
    generateTestCases(OptimalTwoPointerSolution.lc125, testCases,' Solution ',);


  

};

runTestCases();
