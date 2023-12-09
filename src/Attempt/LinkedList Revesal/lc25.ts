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

import { ListNode } from "../../../src/util/LinkedListMaker";

  
   const reverseKGroupBruteForce = (head: ListNode | null, k: number): ListNode | null =>{
  
  
    return null;
  }
  
  const reverseKGroupNaiveImp = (head: ListNode | null, k: number): ListNode | null =>{
  
  
    return null;
  }
  


  const reverseKGroupNaiveDec = (head: ListNode | null, k: number): ListNode | null =>{
  
  
    return null;
  }
  

  const reverseKGroupOptimal = (head: ListNode | null, k: number): ListNode | null =>{
  
  
    return null;
  }
  


  // Example usage:
  // const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  // const k1 = 2;
  // console.log(reverseKGroup(head1, k1));
  
  // const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  // const k2 = 3;
  // console.log(reverseKGroup(head2, k2));
  

  export const reverseKGroup = {
    reverseKGroupBruteForce,
    reverseKGroupNaiveImp,
    reverseKGroupNaiveDec,
    reverseKGroupOptimal
    }