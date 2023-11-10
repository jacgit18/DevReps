class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.back = null
    this.length = 0
  }
  peek() {
    return console.log(this.front)
  }

  // same as push
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.front = newNode
      this.back = newNode
    } else {
      this.back.next = newNode
      this.back = newNode
    }
    this.length++
    return this
  }

  // like pop but removes the front objects in the queue
  dequeue() {
    if (!this.front) {
      return null
    }
    if (this.front === this.back) {
      this.back = null
    }
    // const holdingPointer = this.front;
    this.front = this.front.next
    this.length--
    return this
  }
  //isEmpty;
}

const myQueue = new Queue()
// myQueue.peek();// null
myQueue.enqueue("Joy") // always will show in peek since front
// myQueue.peek();

myQueue.enqueue("Matt")
// myQueue.peek();
myQueue.enqueue("Pavel")
// myQueue.peek();
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue()
// myQueue.peek();
// console.log(myQueue)
console.log(myQueue)

myQueue.front = new Node("chad")
myQueue.front.next = myQueue.back
console.log(myQueue)
