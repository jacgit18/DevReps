// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

import { ListNode } from "../../util/LinkedListMaker";


export const reorderList = (head: ListNode | null): void =>{
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle of the linked list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;

    while (current) {
        const nextNode: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Merge the first half and the reversed second half
    let firstHalf: ListNode | null = head;
    let secondHalf: ListNode | null = prev;

    while (secondHalf && secondHalf.next) {
        const temp1: ListNode | null = firstHalf!.next;
        const temp2: ListNode | null = secondHalf.next;

        if (temp1 && temp2) {
            firstHalf!.next = secondHalf;
            secondHalf.next = temp1;

            firstHalf = temp1;
            secondHalf = temp2;
        }
    }
};