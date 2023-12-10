// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

import { ListNode } from "../../util/LinkedListMaker"

export const middleNode = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null // Empty list
  }

  let slow: ListNode | null = head
  let fast: ListNode | null = head

  // Move the fast pointer two steps at a time, and the slow pointer one step at a time
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  return slow // Slow pointer is now at the middle node
}
