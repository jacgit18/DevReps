// You are given two non-empty linked lists representing two non-negative integers. The digits are
// stored in reverse order, and each of their nodes contains a single digit. Add the two numbers
//  and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

// Generate a linked list from an array
function generateList(arr) {
  if (arr.length === 0) {
    return null
  }

  let head = new ListNode(arr[0])

  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

function addTwoNumbers(current1, current2) {
  let previousNode = new ListNode(25)
  let dummyNode = previousNode
  let carry = 0

  while (current1 !== null || current2 !== null || carry > 0) {
    let value1 = 0
    let value2 = 0

    if (current1 !== null) {
      value1 = current1.value
      current1 = current1.next
    }

    if (current2 !== null) {
      value2 = current2.value
      current2 = current2.next
    }

    let sum = value1 + value2 + carry
    let number = sum % 10

    if (sum > 9) {
      carry = 1
    } else {
      carry = 0
    }

    let currentNode = new ListNode(number)
    previousNode.next = currentNode
    previousNode = currentNode
  }
  return dummyNode.next
}

// let list1 = generateList([9,9]);
// let list2 = generateList([1]);

let list1 = generateList([2, 4, 3])
let list2 = generateList([5, 6, 4])

console.log(addTwoNumbers(list1, list2))

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
