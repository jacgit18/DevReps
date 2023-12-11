import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTopologicalSort } from "../../src/Attempt/Topological Sort Graphs";
import { SolutionTopologicalSort } from "../../src/Solution/Topological Sort Graphs";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    {
      params: 2,
      paramsTwo:[[1, 0]],
      expected: true,
    },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    {
      params: 2,
      paramsTwo:[[1, 0]],
      expected: true,
      performance: true
    },
  ];

  // weird bug with arrays when using multiple param properties 
  const testCases:  TestCase[]  = [
    // Test Case 1
    {
      params: 2,
      paramsTwo:[[[1, 0]]],
      expected: true,
    },
    // Test Case 2
    {
      params: 2,
      paramsTwo: [[[1, 0], [0, 1]]],
      expected: false,
    },
    // Add more test cases as needed
  ];
      
  
      generateTestCases(AttemptTopologicalSort.lc207.canFinishBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
      generateTestCases(AttemptTopologicalSort.lc207.canFinishNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
    
      // generateTestCases(AttemptTopologicalSort.lc207.canFinishNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
      // generateTestCases(AttemptTopologicalSort.lc207.canFinishOptimal, testCasePerformance, ' Optimal Code Attempt ');
  
      generateTestCases(SolutionTopologicalSort.lc207, testCases,' Solution ',);

  
    
    };
    
    runTestCases();
    