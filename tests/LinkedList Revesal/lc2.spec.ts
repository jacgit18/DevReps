import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptRevLinkedList } from "../../src/Attempt/LinkedList Revesal";
import { SolutionRevLinkedList } from "../../src/Solution/LinkedList Revesal";
import { createLinkedListFromArray, ListNode } from "../../src/util/LinkedListMaker";


const runTestCases = () => {

  // ways to generate linked list
  let list1 = createLinkedListFromArray([2, 4, 3])
  let list2 = createLinkedListFromArray([5, 6, 4])
  const expectedLinkedList = createLinkedListFromArray([7, 0, 8]);

  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  let head: ListNode | null = new ListNode(2)
  head.next = new ListNode(4)
  head.next.next = new ListNode(3)

  let listCaseTwoPointOne = createLinkedListFromArray([0])
  let listCaseTwoPointTwo = createLinkedListFromArray([0])
  const expectedLinkedListTwo = createLinkedListFromArray([0]);


  let listCaseThreePointOne = createLinkedListFromArray([9,9,9,9,9,9,9])
  let listCaseThreePointTwo = createLinkedListFromArray([9,9,9,9])
  const expectedLinkedListThree = createLinkedListFromArray([8,9,9,9,0,0,0,1]);


// let result = addTwoNumbers(l1, l2);
// let output = '';
// while (result !== null) {
//   output += `${result.value} -> `;
//   result = result.next;
// }
// output += 'null';
// console.log(output); // This will print the sum as a linked list


  const testCasePlaceholder:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: null },
  ];


  const testCasePerformance:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: expectedLinkedList, performance: true},
  ];


  const testCases:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: expectedLinkedList},
    { params: listCaseTwoPointOne, paramsTwo: listCaseTwoPointTwo, expected: expectedLinkedListTwo},
    { params: listCaseThreePointOne, paramsTwo: listCaseThreePointTwo, expected: expectedLinkedListThree},

  ];

    generateTestCases(AttemptRevLinkedList.lc2.addTwoNumbersBruteForce, testCasePlaceholder,' BruteForce Code Attempt ');
    generateTestCases(AttemptRevLinkedList.lc2.addTwoNumbersNaiveDec, testCasePlaceholder,' Naive Declaritive Code Attempt ');

    // generateTestCases(AttemptRevLinkedList.lc2.addTwoNumbersNaiveImp, testCasePerformance,' Naive Imperative Code Attempt ');
    // generateTestCases(AttemptRevLinkedList.lc2.addTwoNumbersOptimal, testCasePerformance,' Optimal Code Attempt ');

    generateTestCases(SolutionRevLinkedList.lc2, testCases,' Solution ',);


  

};

runTestCases();
