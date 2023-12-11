import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBFS } from "../../src/Attempt/BFS";
import { SolutionBFS } from "../../src/Solution/BFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {

    const treeOne = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)));


    const testCasePlaceholder:  TestCase[]  = [
      { params: treeOne,  expected: [[0]] },
    ];

    const testCasePerformance:  TestCase[]  = [
      { params: treeOne,  expected: [[3],[9,20],[15,7]], performance: true },
    ];
  
  const testCases:  TestCase[]  = [
    { params: treeOne,  expected: [[3],[9,20],[15,7]]},
  ];


    generateTestCases(AttemptBFS.lc102.levelOrderTraversalBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
    generateTestCases(AttemptBFS.lc102.levelOrderTraversalNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');
  
    // generateTestCases(AttemptBFS.lc102.levelOrderTraversalNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptBFS.lc102.levelOrderTraversalOptimal, testCasePerformance, ' Optimal Code Attempt ');

    // generateTestCases(SolutionBFS.lc102.levelOrderTraversalIter, testCasePerformance,' Solution ');
    // generateTestCases(SolutionBFS.lc102.levelOrderTraversalRec, testCasePerformance,' Solution ');

    generateTestCases(SolutionBFS.lc102.levelOrderTraversalIter, testCases,' Solution ');

  

};

runTestCases();
