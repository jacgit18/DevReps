// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

import { ListNode } from "../../util/LinkedListMaker"

export const isPalindrome = (head: ListNode | null): boolean => {
  if (!head || !head.next) {
    return true // An empty list or a single-node list is a palindrome
  }

  // Step 1: Find the middle of the linked list
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  // Step 2: Reverse the second half of the linked list
  let prev: ListNode | null = null
  let current: ListNode | null = slow

  while (current) {
    const nextNode: ListNode | null = current.next
    current.next = prev
    prev = current
    current = nextNode
  }

  // Step 3: Compare the first half with the reversed second half
  let firstHalf: ListNode | null = head
  let secondHalf: ListNode | null = prev

  while (secondHalf) {
    if (firstHalf!.value !== secondHalf.value) {
      return false // Not a palindrome
    }

    firstHalf = firstHalf!.next
    secondHalf = secondHalf.next
  }

  return true // Palindrome
}
