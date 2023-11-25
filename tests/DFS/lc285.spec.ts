import { generateTestCases, TestCase } from "../../lib/genTest";
import { OptimalDFSAttempt } from "../../src/Attempt/DFS";
import { OptimalDFS_Solution } from "../../src/Solution/DFS";
import { TreeNode } from "../../src/util/BinaryTreeMaker";

const runTestCases = () => {
  const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
  const p1 = new TreeNode(1)

  // Alt Manual way to assign nodes in tree
  const root2 = new TreeNode(5);
  root2.left = new TreeNode(3);
  root2.right = new TreeNode(6);
  root2.left.left = new TreeNode(2);
  root2.left.right = new TreeNode(4);
  root2.left.left.left = new TreeNode(1);
  const p2 = new TreeNode(6)



  const testCasePlaceholder:  TestCase[]  = [
    { params: root1, paramsTwo: p1, expected: null },
  ];
  
  const testCases:  TestCase[]  = [
    { params: root1, paramsTwo: p1, expected: 2 },
    { params: root2, paramsTwo: p2, expected: null },
  ];

    generateTestCases(OptimalDFSAttempt.lc285.inorderSuccessorNaive, testCasePlaceholder,' Attempt ');
    generateTestCases(OptimalDFS_Solution.lc285, testCases,' Solution ',);


  

};

runTestCases();
