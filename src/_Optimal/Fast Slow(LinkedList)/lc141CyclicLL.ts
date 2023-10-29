// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

/**
 * Input: Starting from the head we have a fast and slow pointer
 * 
 * then as we iterate through the linked list we are changing the values of each pointer to the point that they are moving at different rates 
 * the fast pointer moves two spots while the slow moves one spot ahead meaning that the fast pointer includes some recursion 
 * 
 * and as we move towards the end we set the last pointer of the linked list to another part of the linked list 
 * specifically where the fast pointer would be meaning if we have for example :
 * 
 * 3 2 0 4
 * 
 * 3 -> 2 -> 0 -> null
 * 
 * slow
 * fast
 * 3 -> 2 -> 0 -> null
 * 
 *    slow
 *         fast 
 * 3 -> 2 -> 0 -> null
 * 
 * fast moves at 2 spot so if loop it should end up a 2 so we pointer at 2
 * 
 *         slow
 *               fast 
 * 3 -> 2 -> 0 -> |
 *      /\        |
 *      ||        |
 *      ||________| 
 *     fast
 * 
 * so we can loop through the linked list until fast and slow pointers
 * match position 
 * 
 * 
 * output: and return true if the match else false
 */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}
const ArrayCyclicLinkListDeserialize = (arr) => {
  if (arr.length === 0) { return null; }
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
    // see if works with lc Question
    if(current.next === null){
      current.next = head;
      // current.next = head.next;

    }
  }
  return head;
}

  const has_cycle = (head) =>{
    if(!head) return false
    slowPointer = head
    fastPointer = head.next
    while(Infinity) {
        if(!fastPointer || !fastPointer.next) return false
        if(slowPointer == fastPointer || slowPointer == fastPointer.next) return true
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }   
}


let head = ArrayCyclicLinkListDeserialize([3,2,0,-4])
// console.log(head.next.next.next)
// cyclic linked list
// head = new Node(3) // adding intial node true
// head.next = new Node(2)
// head.next.next = new Node(0)
// head.next.next.next = new Node(-4)
// head.next.next.next.next = head.next

let headTwo = ArrayCyclicLinkListDeserialize([1,2])
// head = new Node(1)  true
// head.next = new Node(2)
// head.next = head
// console.log(head)

let headThree = ArrayCyclicLinkListDeserialize([1])
// head = new Node(1)  false




console.log(`LinkedList has cycle: ${has_cycle(head)}`)
console.log(`LinkedList has cycle: ${has_cycle(headTwo)}`)
console.log(`LinkedList has cycle: ${has_cycle(headThree)}`)



// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)


// Time Complexity #
// As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop. Therefore, the time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space Complexity #
// The algorithm runs in constant space O(1).
