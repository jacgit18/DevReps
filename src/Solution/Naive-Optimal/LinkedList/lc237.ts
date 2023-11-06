const LinkedList = require("../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview")
const myLK = new LinkedList()

let LinkListArray = [4, 5, 1, 9]
let head = myLK.ArrayLinkListDeserialize(LinkListArray)

//  console.log(head); // full list
//   console.log(head.value); // just 4 for no list
//   console.log(head.next.value); // return 5
//   console.log(head.next.next.value); // return 1
//   console.log(head.next.next.next.value); // return 9
//   console.log(head.next.next.next); // return 9
//   console.log(head.next.next.next.next); // return null

// let node = 5;

const deleteNode = (head, node) => {
  // console.log(head.next.value )

  head.next.value = head.value // points 4 -> 5 -> 1 -> 9 -> null
  // console.log(head)

  head.next = head.next.next

  return head
}
let node = head.next.value

console.log(deleteNode(head, node))
