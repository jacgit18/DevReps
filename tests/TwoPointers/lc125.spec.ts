import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";


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


    generateTestCases(AttemptTwoPointer.lc125.isPalindromeNaive, testCasePlaceholder,' Attempt ');
    generateTestCases(SolutionTwoPointer.lc125, testCases,' Solution ',);


  

};

runTestCases();
