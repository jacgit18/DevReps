import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBacktrack } from "../../src/Attempt/BackTracking";
// import { SolutionBacktrack } from "../../src/Solution/BackTracking";

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

 
  generateTestCases(AttemptBacktrack.lc17.letterCombinationsNaive, testCases,' Attempt ');
// figure out whats causing solution to hang
  // generateTestCases(SolutionBacktrack.lc17, testCases,' Solution ');

};

runTestCases();
