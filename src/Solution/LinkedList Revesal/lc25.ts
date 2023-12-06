// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  export const reverseKGroup = (head: ListNode | null, k: number): ListNode | null =>{
    const getLength = (node: ListNode | null): number => {
      let length = 0;
      while (node) {
        length++;
        node = node.next;
      }
      return length;
    };
  
    const reverse = (start: ListNode, end: ListNode | null): ListNode => {
      let prev = null;
      let current = start;
      while (current !== end) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next!;
      }
      return prev!;
    };
  
    const length = getLength(head);
    const dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;
  
    for (let i = 0; i < Math.floor(length / k); i++) {
      const groupStart = prevGroupEnd.next;
      let groupEnd: ListNode | null = prevGroupEnd.next;
  
      for (let j = 0; j < k; j++) {
        if (!groupEnd) {
          break; // Handle the case when the list length is not a multiple of k
        }
        groupEnd = groupEnd.next!;
      }
  
      if (!groupEnd) {
        break; // No need to reverse if the remaining group is incomplete
      }
  
      const reversedGroup = reverse(groupStart!, groupEnd);
      prevGroupEnd.next = reversedGroup;
      groupStart!.next = groupEnd.next;
      groupEnd.next = null;
  
      prevGroupEnd = groupStart!;
    }
  
    return dummy.next;
  }
  
  // Example usage:
  const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const k1 = 2;
  console.log(reverseKGroup(head1, k1));
  
  const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const k2 = 3;
  console.log(reverseKGroup(head2, k2));
  