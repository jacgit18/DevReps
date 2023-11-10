const ConLoggerFuncParam = require("../../Basics/ConLoggerFUnc.js")
const consoleItem = new ConLoggerFuncParam()

let mylinkList1 = {
  head: {
    value: "need to build",
    next: {
      value: "our own linkList in javascript ",
      next: {
        value: "get it",
        next: null,
      },
    },
  },
}

// consoleItem.ConsoleDebuggerParamOneLinkList(mylinkList1);

// Creating Nodes
class Node {
  constructor(value) {
    ;(this.value = value), (this.next = null)
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this._length = 1
  }
  append = (value) => {
    // empty node with the value
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value)
    // next equal null
    this.tail.next = newNode // this add the newnode to the value of next
    this.tail = newNode // this updates the value
    this._length++
    return this // this reference the entire class that get instantiated(meaing the representation of (an abstraction like a class) by a concrete example. )
  }

  printList = () => {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return consoleItem.ConsoleDebuggerParamOneLinkList(array)
  }

  prepend = (value) => {
    const newNode = new Node(value)
    newNode.next = this.head // created pointer that points to current head and makes it a new head
    this.head = newNode
    this._length++
    return this
  }

  insert = (index, value) => {
    if (index >= this._length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1) // makes the insert O(n)
    const holdingPointer = leader.next
    leader.next = newNode

    newNode.next = holdingPointer
    this._length++
    return this.printList()
  }

  // lookup O(n)
  traverseToIndex = (index) => {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }

    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  delete = (index) => {
    // Check Parameters with conditional statement
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }
}

const mylinkList = new LinkedList("need to build")
// consoleItem.ConsoleDebuggerParamOneLinkList(mylinkList);
mylinkList.append("our own")
mylinkList.append("LinkList")
mylinkList.prepend("In javascript")
mylinkList.insert(2, 99)
mylinkList.delete(2)

// mylinkList.printList();

// consoleItem.ConsoleDebuggerParamOneLinkList(mylinkList);
console.log(mylinkList)
