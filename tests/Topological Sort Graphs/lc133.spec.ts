import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTopologicalSort } from "../../src/Attempt/Topological Sort Graphs";
import { SolutionTopologicalSort } from "../../src/Solution/Topological Sort Graphs";
import { GraphNode } from "../../src/util/GraphMaker";

const runTestCases = () => {

  let node1 = new GraphNode(1)
  let node2 = new GraphNode(2)
  let node3 = new GraphNode(3)
  let node4 = new GraphNode(4)
  
  node1.neighbors = [node2, node4];
  node4.neighbors = [node1, node2];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];


  let nodeOne = new GraphNode(1)
  let nodeTwo = new GraphNode(2)
  let nodeThree = new GraphNode(3)
  let nodeFour = new GraphNode(4)
  
  nodeOne.neighbors = [nodeTwo, nodeFour];
  nodeFour.neighbors = [nodeOne, nodeTwo];
  nodeTwo.neighbors = [nodeOne, nodeThree];
  nodeThree.neighbors = [nodeTwo, nodeFour];

  const testCasePlaceholder: TestCase[] = [
    // You can add more test cases or customize this one
    {
      params: node1,
      expected: null,
    },
  ];

  // Dynamic Expected Output: Instead of hardcoding the expected output (nodeOne), 
  // you might consider dynamically generating the expected output 
  // using your cloning function. This way, the test cases are more 
  // flexible and automatically adapt to changes in your cloning logic.


  const testCases: TestCase[] = [
    {
      params: node1,
      expected: nodeOne,
      // expected: AttemptTopologicalSort.lc133.cloneGrapherNaive(nodeOne),
    }
    // Add more test cases here
  ];

  generateTestCases(AttemptTopologicalSort.lc133.cloneGrapherNaive, testCasePlaceholder, ' Attempt ');
  generateTestCases(SolutionTopologicalSort.lc133, testCases, ' Solution ');
};

runTestCases();
