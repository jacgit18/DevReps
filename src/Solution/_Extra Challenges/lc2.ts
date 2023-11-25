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

import { LinkedListNode } from "../../util/LinkedListMaker"



export const addTwoNumbers = (l1: LinkedListNode | null, l2: LinkedListNode | null): LinkedListNode | null =>{
  const dummyHead: LinkedListNode = new LinkedListNode(0);
  let p: LinkedListNode | null = l1;
  let q: LinkedListNode | null = l2;
  let current: LinkedListNode | null = dummyHead;
  let carry: number = 0;
  
  while (p !== null || q !== null) {
      const x: number = p ? p.value : 0;
      const y: number = q ? q.value : 0;
      const sum: number = x + y + carry;
      carry = Math.floor(sum / 10);
      
      current.next = new LinkedListNode(sum % 10);
      current = current.next;
      
      if (p) p = p.next;
      if (q) q = q.next;
  }
  
  if (carry > 0) {
      current.next = new LinkedListNode(carry);
  }
  
  return dummyHead.next;
}

// Test cases
const l1 = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(3)));
const l2 = new LinkedListNode(5, new LinkedListNode(6, new LinkedListNode(4)));

// let result = addTwoNumbers(l1, l2);
// let output = '';
// while (result !== null) {
//   output += `${result.value} -> `;
//   result = result.next;
// }
// output += 'null';
// console.log(output); // This will print the sum as a linked list


