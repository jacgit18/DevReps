import { LinkedListNode, createLinkedListFromArray } from "../../util/LinkedListMaker";

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.



export const swap = (list: LinkedListNode | null, a: number, b: number): LinkedListNode | null =>{
  function find(node: LinkedListNode | null, target: number): [LinkedListNode | null, LinkedListNode | null] {
    if (!node || a === b) {
      return [node, node];
    }

    let prev: LinkedListNode | null = null;
    let current: LinkedListNode | null = node;

    while (current !== null) {
      if (current.val === target) {
        return [prev, current];
      }
      prev = current;
      current = current.next;
    }
    return [null, null];
  }

  let [prev1, current1] = find(list, a);
  let [prev2, current2] = find(list, b);

  if (!current1 || !current2) {
    return list;
  }

  [current1.next, current2.next] = [current2.next, current1.next];

  if (prev1) {
    prev1.next = current2;
  }
  if (prev2) {
    prev2.next = current1;
  }

  if (prev1 === null) {
    return current2;
  }
  if (prev2 === null) {
    return current1;
  }

  return list;
}

let arrayLink: number[] = [1, 5, 7, 10, 12, 15];
let list: LinkedListNode | null = createLinkedListFromArray(arrayLink);
let a: number = 5;
let b: number = 12;

let resultList: LinkedListNode | null = swap(list, a, b);
console.log("given list:", arrayLink);

let resultArray: number[] = [];
while (resultList !== null) {
  resultArray.push(resultList.val);
  resultList = resultList.next;
}

console.log("swapped list:", resultArray);
