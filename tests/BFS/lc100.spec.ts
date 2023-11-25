import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptBFS } from "../../src/Attempt/BFS";
import { SolutionBFS } from "../../src/Solution/BFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const treeOne = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const treeTwo = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const treeThree = new TreeNode(6, new TreeNode(2), new TreeNode(3))


  
  const testCases:  TestCase[]  = [
    { params: treeOne, paramsTwo: treeTwo, expected: true },
    // { params: treeOne, paramsTwo: treeThree, expected: false },

  ];

    generateTestCases(AttemptBFS.lc100.isSameTreeNaive, testCases,' Attempt ');
    generateTestCases(SolutionBFS.lc100, testCases,' Solution ',);


  

};

runTestCases();
