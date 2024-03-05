// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

import { ListNode, createLinkedListFromArray } from "../../../src/util/LinkedListMaker"

const reverseListIter = (head: ListNode | null): ListNode | null => {
  if (head == null || head.value < 0) return null
  let current: ListNode | null = head
  let previous: ListNode | null = null

  while (current !== null) {
    let next: ListNode | null = current.next
    current.next = previous
    previous = current // advancing position
    current = next // advancing position
  }

  return previous
}

const reverseListRec = (head: ListNode | null): ListNode | null => {
  if (!head) return null

  function reverse(currNode: ListNode, prev: ListNode | null): ListNode | null {
    const next: ListNode | null = currNode.next
    currNode.next = prev
    if (!next) return currNode
    return reverse(next, currNode)
  }
  return reverse(head, null)
}

let head: ListNode | null
head = new ListNode(2)
head.next = new ListNode(4)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(8)
head.next.next.next.next = new ListNode(10)

let array1 = [1, 5, 7, 10]
let linkedList = createLinkedListFromArray(array1)

const printFowardIter = (node: ListNode | null) => {
  let current: ListNode | null = node
  while (current !== null) {
    console.log(current.value)
    current = current.next // equivalent to i++ in a loop
  }
}

const printFowardRec = (node: ListNode | null): ListNode | null => {
  let current: ListNode | null = node
  if (current !== null) {
    console.log(current.value)
    return printFowardRec(current.next)
  }
  return null // Ensure that you return null at the end of the function if the node is null
}

const printBackwardRec = (node: ListNode | null) => {
  if (node === null) return
  printBackwardRec(node.next)
  console.log(node.value)
}

export const reverseList = {
  reverseListIter,
  reverseListRec,
  printFowardIter,
  printFowardRec,
  printBackwardRec,
}

const listToString = (head: ListNode | null): string => {
  let result = "";
  let current = head;

  while (current !== null) {
    result += `${current.value} > `;
    current = current.next;
  }

  result += "null";
  return result;
};

export const reverseListRecursive = (
  head: ListNode | null,
  prev: ListNode | null = null
): ListNode | null => {
  if (head === null) {
    console.log("Reached the end. Returning previous node: ", listToString(prev));

    return prev;
  }

  // console.log(head)




  const nextTemp: ListNode | null = head.next;
  console.log("\nPointer Change:");
  console.log(`Before Reversal: ${listToString(prev)} < ${head?.value} > ${listToString(nextTemp)}`);
  console.log(`   head: ${head?.value}`);
  console.log(`   prev: ${prev?.value}`);
  console.log(`   next: ${nextTemp?.value}`);
  head.next = prev;
  console.log(`After Reversal:  ${listToString(head)} < ${prev?.value} > ${listToString(nextTemp)}`);
  console.log(`   head: ${head?.next?.value}`);
  console.log(`   prev: ${head?.value}`);
  console.log(`   next: ${nextTemp?.value}`);
 

  return reverseListRecursive(nextTemp, head);
};

let array2 = [1, 2, 3, 4, 5]
let linkedList2 = createLinkedListFromArray(array2)
console.log(reverseListRecursive(linkedList2))