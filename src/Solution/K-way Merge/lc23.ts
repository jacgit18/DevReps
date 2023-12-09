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

import { LinkedListNode } from "../../util/LinkedListMaker"


export const mergeKLists = (lists: Array<LinkedListNode | null>): LinkedListNode | null => {
  const mergeTwoLists = (l1: LinkedListNode | null, l2: LinkedListNode | null): LinkedListNode | null => {
    const dummy = new LinkedListNode()
    let current = dummy

    while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
        current.next = l1
        l1 = l1.next
      } else {
        current.next = l2
        l2 = l2.next
      }
      current = current.next
    }

    current.next = l1 !== null ? l1 : l2
    return dummy.next
  }

  const mergeKListsHelper = (
    lists: Array<LinkedListNode | null>,
    start: number,
    end: number,
  ): LinkedListNode | null => {
    if (start === end) {
      return lists[start]
    }

    const mid = Math.floor((start + end) / 2)
    const left = mergeKListsHelper(lists, start, mid)
    const right = mergeKListsHelper(lists, mid + 1, end)

    return mergeTwoLists(left, right)
  }

  return mergeKListsHelper(lists, 0, lists.length - 1)
}

// Example usage:
// const lists1 = [
//   new ListNode(1, new ListNode(4, new ListNode(5))),
//   new ListNode(1, new ListNode(3, new ListNode(4))),
//   new ListNode(2, new ListNode(6)),
// ]

// console.log(mergeKLists(lists1))
