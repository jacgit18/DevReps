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

import { LinkedListNode } from "../../util/LinkedListMaker";


export const reorderList = (head: LinkedListNode | null): void =>{
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle of the linked list
    let slow: LinkedListNode | null = head;
    let fast: LinkedListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev: LinkedListNode | null = null;
    let current: LinkedListNode | null = slow;

    while (current) {
        const nextNode: LinkedListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Merge the first half and the reversed second half
    let firstHalf: LinkedListNode | null = head;
    let secondHalf: LinkedListNode | null = prev;

    while (secondHalf && secondHalf.next) {
        const temp1: LinkedListNode | null = firstHalf!.next;
        const temp2: LinkedListNode | null = secondHalf.next;

        if (temp1 && temp2) {
            firstHalf!.next = secondHalf;
            secondHalf.next = temp1;

            firstHalf = temp1;
            secondHalf = temp2;
        }
    }
};