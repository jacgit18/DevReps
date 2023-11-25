import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTwoPointer } from "../../src/Attempt/TwoPointers";
import { SolutionTwoPointer } from "../../src/Solution/TwoPointers/index";



const runTestCases = () => {
  const testCasePlaceholder:  TestCase[] = [
    { params: ["ABAB", 2], expected: 0 },
  ];

  const testCases: TestCase[] = [
    { params: ["ABAB", 2], expected: 4 },
    { params: ["AABABBA", 1], expected: 4 },
    { params: ["ABCDE", 1], expected: 2 },
    { params: ["AAAA", 2], expected: 4 },
    { params: ["AAAB", 0], expected: 3 },
    { params: ["AABA", 0], expected: 2 },
  ];

  generateTestCases(AttemptTwoPointer.lc424.characterReplacementNaive, testCasePlaceholder, 'Attempt');
  generateTestCases(SolutionTwoPointer.lc424, testCases, 'Solution');
};

runTestCases();
