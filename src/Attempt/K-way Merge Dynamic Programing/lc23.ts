// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:

// Input: lists = []
// Output: []

// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }


import { LinkedListNode } from "../../util/LinkedListMaker";


 const mergeKListsBruteForce = (lists: Array<LinkedListNode | null>): LinkedListNode | null => {
    return null
};

const mergeKListsNaiveImp = (lists: Array<LinkedListNode | null>): LinkedListNode | null => {
  return null

};

const mergeKListsNaiveDec = (lists: Array<LinkedListNode | null>): LinkedListNode | null => {
  return null
};

const mergeKListsOptimal = (lists: Array<LinkedListNode | null>): LinkedListNode | null => {
  return null

};

export const mergeKLists = {
  mergeKListsBruteForce,
  mergeKListsNaiveImp,
  mergeKListsNaiveDec,
  mergeKListsOptimal
  }