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

import { ListNode } from "../../util/LinkedListMaker"

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummyHead: ListNode = new ListNode(0)
  let p: ListNode | null = l1
  let q: ListNode | null = l2
  let current: ListNode | null = dummyHead
  let carry: number = 0

  while (p !== null || q !== null) {
    const x: number = p ? p.value : 0
    const y: number = q ? q.value : 0
    const sum: number = x + y + carry
    carry = Math.floor(sum / 10)

    current.next = new ListNode(sum % 10)
    current = current.next

    if (p) p = p.next
    if (q) q = q.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return dummyHead.next
}
