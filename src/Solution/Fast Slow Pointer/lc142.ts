// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

import { ListNode } from "../../util/LinkedListMaker"

export const detectCycle = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return null // No cycle if there are fewer than two nodes
  }

  let slow: ListNode | null = head // Initialize as null

  let fast: ListNode | null = head

  // Detect cycle
  while (fast && fast.next) {
    slow = slow!.next // Non-null assertion since we've already checked for null
    fast = fast.next.next

    if (slow === fast) {
      // Cycle detected
      break
    }
  }

  if (!fast || !fast.next) {
    return null // No cycle if fast or fast.next is null
  }

  // Reset one pointer to the head and move at the same speed until they meet again
  slow = head
  while (slow !== fast) {
    slow = slow!.next // Non-null assertion since we've already checked for null
    fast = fast!.next // Non-null assertion since we've already checked for null
  }

  return slow // Meeting point is the start of the cycle
}
