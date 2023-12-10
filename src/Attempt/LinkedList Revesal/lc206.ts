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

let head: ListNode | null
head = new ListNode(2)
head.next = new ListNode(4)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(8)
head.next.next.next.next = new ListNode(10)

let array1 = [1, 5, 7, 10]
let linkedList = createLinkedListFromArray(array1)

const reverseListBruteForce = function (
  head: ListNode | null,
  prev: ListNode | null = null,
): ListNode | null {
  return null
}

const reverseListNaiveImp = function (
  head: ListNode | null,
  prev: ListNode | null = null,
): ListNode | null {
  return null
}

const reverseListNaiveDec = function (
  head: ListNode | null,
  prev: ListNode | null = null,
): ListNode | null {
  return null
}

const reverseListOptimal = function (
  head: ListNode | null,
  prev: ListNode | null = null,
): ListNode | null {
  return null
}

export const reverseList = {
  reverseListBruteForce,
  reverseListNaiveImp,
  reverseListNaiveDec,
  reverseListOptimal,
}
