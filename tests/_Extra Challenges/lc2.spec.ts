import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptExtra } from "../../src/Attempt/_Extra Challenges";
import { SolutionExtra } from "../../src/Solution/_Extra Challenges";
import { LinkedListNode, createLinkedListFromArray } from "../../src/util/LinkedListMaker";


const runTestCases = () => {

  // ways to generate linked list
  let list1 = createLinkedListFromArray([2, 4, 3])
  let list2 = createLinkedListFromArray([5, 6, 4])

  const expectedLinkedList = createLinkedListFromArray([7, 0, 8]);


  const l1 = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(3)));
  const l2 = new LinkedListNode(5, new LinkedListNode(6, new LinkedListNode(4)));

  let head: LinkedListNode | null = new LinkedListNode(2)
  head.next = new LinkedListNode(4)
  head.next.next = new LinkedListNode(3)

  const testCasePlaceholder:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: null },
  ];


  const testCases:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: expectedLinkedList },

  ];

    generateTestCases(AttemptExtra.lc2.addTwoNumbersNaive, testCasePlaceholder,' Attempt ');
    generateTestCases(SolutionExtra.lc2, testCases,' Solution ',);


  

};

runTestCases();
