import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBacktrack } from "../../src/Attempt/BackTracking";
import { SolutionBacktrack } from "../../src/Solution/BackTracking";

const runTestCases = () => {

  const testCasePlaceholder:  TestCase[]  = [
    { params: [" "], expected: [" "] }
  ];


  const testCasePerformance:  TestCase[]  = [
    { params: [" "], expected: [" "], performance:true }
  ];

    const testCases: TestCase[] = [
        {params: ["23"], expected: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
        {params: [""], expected: [] },
        {params: ["2"], expected: ["a", "b", "c"] },
        // Add more test cases here
      ];



  generateTestCases(AttemptBacktrack.lc17.letterCombinationsBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptBacktrack.lc17.letterCombinationsNaiveImp, testCasePlaceholder,' Naive Declaritive Code Attempt ');

  // generateTestCases(AttemptBacktrack.lc17.letterCombinationsNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptBacktrack.lc17.letterCombinationsOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionBacktrack.lc17.letterCombinationsBackTrack, testCases,' Solution ');

};

runTestCases();
