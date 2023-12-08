// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109


// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//     }
//   }

import { LinkedListNode } from "../../util/LinkedListMaker";
  
   const rotateRightBruteForce = (head: LinkedListNode | null, k: number): LinkedListNode | null =>{
 
    return null;
  }

  const rotateRightNaiveImp = (head: LinkedListNode | null, k: number): LinkedListNode | null =>{
 
    return null;
  }


  const rotateRightNaiveDec = (head: LinkedListNode | null, k: number): LinkedListNode | null =>{
 
    return null;
  }

  const rotateRightOptimal = (head: LinkedListNode | null, k: number): LinkedListNode | null =>{
 
    return null;
  }
  
  
//   // Example usage:
//   const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
//   const k1 = 2;
//   console.log(rotateRight(head1, k1));
  
//   const head2 = new ListNode(0, new ListNode(1, new ListNode(2)));
//   const k2 = 4;
//   console.log(rotateRight(head2, k2));
  

export const rotateRight = {
  rotateRightBruteForce,
  rotateRightNaiveImp,
  rotateRightNaiveDec,
  rotateRightOptimal
  }