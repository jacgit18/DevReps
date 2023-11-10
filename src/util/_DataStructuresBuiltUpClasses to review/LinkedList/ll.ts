class Node {
  constructor(value) {
    ;(this.value = value), (this.next = null), (this.prev = null)
  }
}

class LinkedList {
  constructor() {
    ;(this.tail = null), (this.head = null)
  }

  push(val) {
    const newTail = new Node(val)
    if (!this.tail) {
      this.head = newTail
      this.tail = this.head
    } else {
      const oldTail = this.tail
      newTail.prev = oldTail
      oldTail.next = newTail
      this.tail = newTail
      this.tail.next = this.head
      this.head.prev = this.tail
    }
    return this
  }

  fill(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i])
    }
    return this
  }

  list(details) {
    if (!this.head) {
      return null
    }
    let current = this.head
    let list = []
    while (current !== null) {
      if (details) {
        list.push({
          value: current.value,
          prev: current.prev.value,
          next: current.next.value,
        })
      } else {
        list.push(current.value)
      }
      current = current.next
      if (current == this.head) {
        break
      }
    }
    return list
  }

  moveTo(val) {
    let current = this.head
    while (current.value !== val) {
      current = current.next
    }
    return current
  }

  pop() {
    const removedTail = this.tail
    if (!this.head) {
      return null
    }
    if (removedHead.prev === null) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removedTail.prev
      this.tail.next = this.head
    }
    return removedTail.value
  }

  nodeDeets(node) {
    const deets = {
      value: node.value,
      prev: node.prev.value,
      next: node.next.value,
    }
    console.log("**************[Single Node]***************")
    console.log("*****", deets, "*****")
    console.log("******************************************")
  }

  moveForward(start, end) {
    let current = this.head
    let currentNode
    while (true) {
      current = current.next
      if (current.next.value === start) {
        currentNode = current.next
        break
      }
    }

    let count = 0
    while (currentNode.value !== end) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  moveBack(start, end) {
    let current = this.head
    let currentNode
    while (true) {
      current = current.prev
      if (current.next.value === start) {
        currentNode = current.next
        break
      }
    }

    let count = 0
    while (currentNode.value !== end) {
      count++
      currentNode = currentNode.prev
    }
    return count
  }
}

const lock = new LinkedList()

function lockArr(num) {
  let arr = []
  for (let i = 0; i <= num; i++) {
    arr.push(i)
  }
  return arr
}

lock.fill(lockArr(9))
lock.list()
console.log(lock)
function format(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("\n \n")
    console.log(arr[i])
    console.log("=================================")
  }
}

console.log(format(lock.list(true)))

//lock.nodeDeets(lock.moveTo(8).next.next)

function unlock(current, combo) {
  let sum = 0
  for (let i = 0; i < current.length; i++) {
    if (current[i] === combo[i]) {
      continue
    }
    if (lock.moveForward(current[i], combo[i]) > lock.moveBack(current[i], combo[i])) {
      sum += lock.moveBack(current[i], combo[i])
    } else {
      sum += lock.moveForward(current[i], combo[i])
    }
  }
  return sum
}

//===================================[LOCK PROBLEM SOLUTION]=========================\\
let a = [0, 0, 0]
let b = [1, 3, 8]

let result = unlock(a, b)
console.log(" =========[LOCK PROBLEM SOLUTION]=========")
console.log("Result", result)

//console.log(head);
//console.log(printlist(head));
