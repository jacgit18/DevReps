import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBacktrack } from "../../src/Attempt/BackTracking";
import { SolutionBacktrack } from "../../src/Solution/BackTracking";

const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: [" "], expected: [" "] }
  ];


    const testCases: TestCase[] = [
        {
          params: ["23"],
          expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
        },
        {
          params: [""],
          expected: [],
        },
        {
          params: ["2"],
          expected: ["a", "b", "c"],
        },
     
        // Add more test cases here
      ];

 
  generateTestCases(AttemptBacktrack.lc17.letterCombinationsNaive, testCasePlaceholder,' Attempt ');
// figure out whats causing solution to hang
  generateTestCases(SolutionBacktrack.lc17, testCases,' Solution ');

};

runTestCases();
