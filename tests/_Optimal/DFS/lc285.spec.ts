import { generateTestCases, TestCase } from "../../../lib/genTest";
// import { OptimalDFSAttempt } from "../../../src/Attempt/_Optimal/DFS";
import { OptimalDFS_Solution } from "../../../src/Solution/_Optimal/DFS";
import { TreeNode } from "../../../src/util/BinaryTreeMaker";

const runTestCases = () => {




  const testCasePlaceholder:  TestCase[]  = [
    { params: new TreeNode(2, new TreeNode(1), new TreeNode(3)), paramsTwo: new TreeNode(1), expected: 2 },
  ];
  
  const testCases:  TestCase[]  = [
    { params: new TreeNode(2, new TreeNode(1), new TreeNode(3)), paramsTwo: new TreeNode(1), expected: 2 },
    // { params: [new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4))), new TreeNode(6)], expected: null },
  ];

    // generateTestCases(OptimalDFSAttempt.lc285, testCasePlaceholder,' Attempt ');
    generateTestCases(OptimalDFS_Solution.lc285, testCases,' Solution ',);


  

};

runTestCases();
