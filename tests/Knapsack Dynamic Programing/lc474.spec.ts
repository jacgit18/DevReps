import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptKnapSack } from "../../src/Attempt/Knapsack Dynamic Programing";
import { SolutionKnapSack } from "../../src/Solution/Knapsack Dynamic Programing";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    {
      params: [["10", "0001", "111001", "1", "0"]],
      paramsTwo: 5,
      paramsThree: 3,
      expected: 0,
    },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    {
      params: [["10", "0001", "111001", "1", "0"], 5, 3],
      paramsTwo: 5,
      paramsThree: 3,
      expected: 4,
      performance: true
    },
  ];

  const testCases:  TestCase[]  = [
    // Test Case 1
    {
      params: [["10", "0001", "111001", "1", "0"]],
      paramsTwo: 5,
      paramsThree: 3,
      expected: 4,
        },
    // Test Case 2
    {
      params: [["10", "0", "1"]],
      paramsTwo: 1,
      paramsThree: 1,
      expected: 2,
    },
    // Add more test cases as needed
  ];
      
  
      generateTestCases(AttemptKnapSack.lc474.findMaxFormBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
      generateTestCases(AttemptKnapSack.lc474.findMaxFormNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
    
      generateTestCases(AttemptKnapSack.lc474.findMaxFormNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
      generateTestCases(AttemptKnapSack.lc474.findMaxFormOptimal, testCasePerformance, ' Optimal Code Attempt ');
  
      generateTestCases(SolutionKnapSack.lc474, testCases,' Solution ',);

    
    };
    
    runTestCases();
    