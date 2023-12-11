import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBFS } from "../../src/Attempt/BFS";
import { SolutionBFS } from "../../src/Solution/BFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const treeOne = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)));

  const treeTwo = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3)));

    const testCasePlaceholder:  TestCase[]  = [
      { params: treeOne,  expected: true },
    ];

    const testCasePerformance:  TestCase[]  = [
      { params: treeOne,  expected: true, performance: true },
    ];

  
  const testCases:  TestCase[]  = [
    { params: treeOne,  expected: true },
    // { params: treeTwo,  expected: false }
  ];


    generateTestCases(AttemptBFS.lc101.isSymmetricBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
    generateTestCases(AttemptBFS.lc101.isSymmetricNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');
  
    // generateTestCases(AttemptBFS.lc101.isSymmetricNaiveImp, testCasePerformance,  ' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptBFS.lc101.isSymmetricOptimal, testCasePerformance, ' Optimal Code Attempt ');
    
    generateTestCases(SolutionBFS.lc101, testCases,' Solution ',);


  

};

runTestCases();
