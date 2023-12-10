// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n

import { ListNode } from "../../../src/util/LinkedListMaker"

const reverse_sub_listBruteForce = (
  head: ListNode | null,
  p: number,
  q: number,
): ListNode | null => {
  return null
}

const reverse_sub_listNaiveImp = (head: ListNode | null, p: number, q: number): ListNode | null => {
  return null
}

const reverse_sub_listNaiveDec = (head: ListNode | null, p: number, q: number): ListNode | null => {
  return null
}

const reverse_sub_listOptimal = (head: ListNode | null, p: number, q: number): ListNode | null => {
  return null
}

let head: ListNode | null = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

export const reverse_sub_list = {
  reverse_sub_listBruteForce,
  reverse_sub_listNaiveImp,
  reverse_sub_listNaiveDec,
  reverse_sub_listOptimal,
}
