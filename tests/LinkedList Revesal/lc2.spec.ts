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


  const testCases:  TestCase[]  = [
    { params: list1, paramsTwo: list2, expected: expectedLinkedList },

  ];

    generateTestCases(AttemptRevLinkedList.lc2.addTwoNumbersNaiveImp, testCasePlaceholder,' Attempt ');
    generateTestCases(SolutionRevLinkedList.lc2, testCases,' Solution ',);


  

};

runTestCases();
