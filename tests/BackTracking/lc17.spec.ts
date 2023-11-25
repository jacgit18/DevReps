import { generateTestCases, TestCase } from "../../lib/genTest";
import { OptimalSubsetBacktrackAttempt } from "../../src/Attempt/BackTracking";
// import { OptimalSubsetBacktrackSolution } from "../../src/Solution/BackTracking";

const runTestCases = () => {
    const testCases: TestCase[] = [
        // {
        //   params: ["23"],
        //   expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
        // },
        // {
        //   params: [""],
        //   expected: [],
        // },
        // {
        //   params: ["2"],
        //   expected: ["a", "b", "c"],
        // },
        {
            params: [" "],
            expected: [" "],
          },
        // Add more test cases here
      ];

 
  generateTestCases(OptimalSubsetBacktrackAttempt.lc17.letterCombinationsNaive, testCases,' Attempt ');
// figure out whats causing solution to hang
//   generateTestCases(OptimalSubsetBacktrackSolution.lc17, testCases,' Solution ');

};

runTestCases();
