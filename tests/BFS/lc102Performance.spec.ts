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
  
  const testCases:  TestCase[]  = [
    { params: treeOne,  expected: [[3],[9,20],[15,7]] , performance: true },

  ];

    generateTestCases(AttemptBFS.lc102.levelOrderTraversalNaiveImp, testCasePlaceholder,' Attempt ');
    generateTestCases(SolutionBFS.lc102.levelOrderTraversalIter, testCases,' Solution ');
    generateTestCases(SolutionBFS.lc102.levelOrderTraversalRec, testCases,' Solution ');


  

};

runTestCases();
