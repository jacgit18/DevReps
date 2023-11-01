const linkSetter = require("../../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview")
const linkedGetter = new linkSetter()
// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

/**
 * Input: head of a Singly LinkedList
 * Output: new head of the reversed LinkedList
 *
 * Properties: head, next pointer, Node value, null, current position, next position, last position
 *
 * Pre-Condition: if list empty or only has null
 *
 * Conditions: while current head not equal to null
 *
 * let next equal next value in list then update current next node to null
 * then null to the head and the head to next
 *
 *
 *
 */

class Node {
  constructor(value = null) {
    this.value = value
    this.next = null
  }

  get_list() {
    let result = ""
    let temp = this
    while (temp !== null) {
      result += temp.value + " "
      temp = temp.next
    }
    return result
  }
}

const reverse = function (head) {
  if (head == null || head < 0) return null
  let current = head
  let previous = null
  let counter = 0

  while (current !== null) {
    // try {
    //   console.log(`Current value on iteration(${counter}): ${current.value} `);
    // } catch (e) {
    //   console.log(`reached null value for current on this iteration(${counter}) after:`);
    // }

    // try {
    //   console.log(`\n Next position value on iteration(${counter}) before: ${current.next.value} `);
    // } catch (e) {
    //   console.log(`Next position value is null on iteration(${counter}):`);
    // }

    let next = current.next
    // try {
    //   console.log(`\n Next position new value on iteration(${counter}): ${next.value} `);
    // } catch (e) {
    //   console.log(`Next value reached null on iteration(${counter})`);
    // }

    try {
      console.log(`Previous value on iteration(${counter}): ${previous.value} `)
    } catch (e) {
      console.log(`Previous value is null before chain on iteration(${counter})`)
    }

    current.next = previous // reverse the point value ->  now  null <- value 1 -> 2 -> 4  -> 5 -> null
    // null <- value <- 1  2 -> 4  -> 5 -> null continue until
    // null <- value <- 1  <- 2 <- 4 <- 5  === 5 -> 4 -> 2  -> 1 -> value -> null

    // try {
    //   console.log(`Next chain new value on iteration(${counter}): ${current.next.value} `);
    // } catch (e) {
    //   console.log(`Next chain value is null on iteration(${counter})`);
    // }

    try {
      console.log(`Previous new value on iteration(${counter}): ${previous.value} `)
    } catch (e) {
      console.log(`Previous value is null after chain on iteration(${counter})`)
    }

    previous = current // advancing position
    try {
      console.log(`Previous new value on iteration(${counter}): ${previous.value} `)
    } catch (e) {
      console.log(`Previous value is null on iteration(${counter}) after prev`)
    }

    current = next // advancing position
    // try {
    //   console.log(`Current new value on iteration(${counter}): ${current.value} `);
    // } catch (e) {
    //   console.log(`Current value is null on iteration(${counter}):`);
    // }

    counter++

    // console.log(`Current position: ${current}`)
  }

  console.log(`\n Previous aftermath: ${previous.value} `)

  try {
    console.log(`Current: ${current.value} `)
  } catch (e) {
    console.log(`Current value is null outside the loop`)
  }

  try {
    console.log(`\n Current Next aftermath: ${current.next.value} `)
  } catch (e) {
    console.log(`Next chain value is null`)
  }

  return previous
}

let head
// console.log(head);
head = new Node(2)
// console.log(head); // first node but shows whole list
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
// console.log(head); // whole list
let nullval = head.next.next.next.next.next
// console.log(nullval); // null
// head = new Node();
// console.log(head);

// console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
// console.log(`\n Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);

let array1 = [1, 5, 7, 10]
let linkedList = linkedGetter.ArrayLinkListDeserialize(array1)

let printFoward = (node) => {
  let current = node
  while (current !== null) {
    console.log(current.value)
    current = current.next // equvivalent to i++ in a loop
  }
}

let printFowardRec = (node) => {
  let current = node
  if (current !== null) {
    console.log(current.value)
    current = printFowardRec(current.next)
  }
}

const printBackward = (node) => {
  if (node === null) return
  // console.log(node.value); // foward
  printBackward(node.next)
  console.log(node.value) // backward
}

const printBackwardIter = (node) => {
  // push to empty array and reverse
  while (node === null) {
    // console.log(node.value); // foward
    node.next
    console.log(node.value) // backward
  }
}

const reverseNoComments = function (head) {
  if (head == null || head < 0) return null
  let current = head
  let previous = null

  while (current !== null) {
    let next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

printFoward(linkedList)
console.log()

printFowardRec(linkedList)

console.log()
// printBackward(linkedList); // prints values backwards not reverse
// console.log()
// console.log(`Nodes of original LinkedList are: ${head.get_list()}`);

// console.log(`Nodes of reversed LinkedList are: ${reverseNoComments(head).get_list()}`);

const reverseREc = function (head) {
  if (!head) return null

  function reverse(currNode, prev) {
    const next = currNode.next
    currNode.next = prev
    if (!next) return currNode
    return reverse(next, currNode)
  }
  return reverse(head, null)
}

const reverseList = function (head, prev = null) {
  if (!head) {
    return prev
  }
  let current = head
  let next = current.next
  current.next = prev
  prev = current
  return reverseList(next, prev)
}

console.log(reverseREc(linkedList))

// var reverseList = function(head) {
//   let [prev, current] = [null, head]
//   while(current) {
//       [current.next, prev, current] = [prev, current, current.next]
//   }
//   return prev
// }
