import { generateTestCases, TestCase } from "../../../lib/genTest";
// import { OptimalBFSAttempt } from "../../../src/Attempt/_Optimal/BFS";
import { OptimalBFS_Solution } from "../../../src/Solution/_Optimal/BFS";
import { TreeNode } from "../../../src/util/BinaryTreeMaker";

const runTestCases = () => {

    const treeOne = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)));


    const testCasePlaceholder:  TestCase[]  = [
      { params: treeOne,  expected: [[3],[9,20],[15,7]] },


    ];
  
  const testCases:  TestCase[]  = [
    { params: treeOne,  expected: [[3],[9,20],[15,7]] },

  ];

    // generateTestCases(OptimalBFSAttempt.lc102, testCases,' Attempt ');
    generateTestCases(OptimalBFS_Solution.lc102Iter, testCases,' Solution ');
    generateTestCases(OptimalBFS_Solution.lc102Rec, testCases,' Solution ');


  

};

runTestCases();
