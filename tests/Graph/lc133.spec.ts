import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptTopologicalSort } from "../../src/Attempt/Topological Sort Graphs";
import { SolutionTopologicalSort } from "../../src/Solution/Topological Sort Graphs";
import { GraphVertex } from "../../src/util/GraphMaker";

const runTestCases = () => {

  // A vertex is a node in graph world

  let node1 = new GraphVertex(1)
  let node2 = new GraphVertex(2)
  let node3 = new GraphVertex(3)
  let node4 = new GraphVertex(4)
  
  node1.neighbors = [node2, node4];
  node4.neighbors = [node1, node2];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];


  let nodeOne = new GraphVertex(1)
  let nodeTwo = new GraphVertex(2)
  let nodeThree = new GraphVertex(3)
  let nodeFour = new GraphVertex(4)
  
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

  // let test = AttemptTopologicalSort.lc133.cloneGrapherNaive(nodeOne);

  const testCases: TestCase[] = [
    {
      params: node1,
      expected: nodeOne,
      // expected: test,
    }
    // Add more test cases here
  ];

  generateTestCases(AttemptTopologicalSort.lc133.cloneGrapherNaiveImp, testCasePlaceholder, ' Attempt ');
  generateTestCases(SolutionTopologicalSort.lc133, testCases, ' Solution ');
};

runTestCases();
