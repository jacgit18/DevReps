import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptExtra } from "../../src/Attempt/_Extra Challenges";
import { SolutionExtra } from "../../src/Solution/_Extra Challenges";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [["abc", "ab", "abcd"]], expected: " " },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [["abc", "ab", "abcd"]], expected: "ab", performance:true },
  ];

  const testCases:  TestCase[]  = [
    { params: [["flower", "flow", "flight"]], expected: "fl" },
    { params: [["dog", "racecar", "car"]], expected: "" },
    { params: [["abc", "ab", "abcd"]], expected: "ab" },
    // Add more test cases as needed
  ];
    
  generateTestCases(AttemptExtra.lc14.longestCommonPrefixBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptExtra.lc14.longestCommonPrefixNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');

//   generateTestCases(AttemptExtra.lc14.longestCommonPrefixNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
//   generateTestCases(AttemptExtra.lc14.longestCommonPrefixOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionExtra.lc14, testCases,' Solution ',);

};

runTestCases();
