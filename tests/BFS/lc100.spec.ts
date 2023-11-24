import { generateTestCases, TestCase } from "../../lib/genTest";
import { OptimalBFSAttempt } from "../../src/Attempt/BFS";
import { OptimalBFS_Solution } from "../../src/Solution/BFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const treeOne = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const treeTwo = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  const treeThree = new TreeNode(6, new TreeNode(2), new TreeNode(3))


  
  const testCases:  TestCase[]  = [
    { params: treeOne, paramsTwo: treeTwo, expected: true },
    // { params: treeOne, paramsTwo: treeThree, expected: false },

  ];

    generateTestCases(OptimalBFSAttempt.lc100, testCases,' Attempt ');
    generateTestCases(OptimalBFS_Solution.lc100, testCases,' Solution ',);


  

};

runTestCases();
