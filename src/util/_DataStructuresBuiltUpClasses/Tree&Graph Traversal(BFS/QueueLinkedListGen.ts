class Node {
  constructor(data, prev) {
    this.data = data
    this.next = null
    this.prev = prev
  }
}

class singleNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class DoublyLinkedListQueue {
  constructor() {
    this.front = null
    this.back = null
  }

  enqueue(data) {
    var node = new Node(data, this.back)
    if (this.front == null) {
      this.front = node
      this.length = 1
    } else {
      this.back.next = node
      this.length = this.length + 1
    }
    this.back = node
  }

  ArrayLinkListQueueDeserializeENQ(arr) {
    if (arr.length === 0) {
      return null
    }
    // let head = new singleNode(arr[0]);
    let head = enqueue(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
      //   current.next = new singleNode(arr[i]);
      current.next = enqueue(arr[i])
      current = current.next
      if (current.next === null) {
        current.next = null
      }
    }
    return head
  }

  isSize() {
    return this.length
  }

  dequeue() {
    if (this.length == 0) {
      return -1
    } else {
      var data = this.front.data
      if (this.front == this.back) {
        this.back = null
        this.front = null
      } else {
        this.front = this.front.next
        this.front.prev = null
      }
      this.length--
      return data
    }
  }

  ArrayDoublyLinkListQueueDeserialize(arr) {
    if (arr.length === 0) {
      return null
    }

    let head = new Node(arr[0], this.back)
    let current = head
    // this.front = current;

    // current.next = new Node(arr[1], this.back);
    // current.prev = current.prev

    // current.next.next = new Node(arr[2], this.back);
    // // current.next.prev =  this.back;
    // this.back = current.next.next;

    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i], this.back)

      if (this.front == null) {
        this.front = current
        this.length = 1
      } else {
        //   if(current.next === null){
        //     current.next = null;
        //   }
        this.back.next = current
        this.length = this.length + 1
      }
      this.back = current

      // current = current.prev
      // current.prev = current.next;
      // current = current.prev
      //   current.prev = current;
    }

    return current
  }

  ArrayLinkListQueueDeserialize(arr) {
    if (arr.length === 0) {
      return null
    }

    let head = new singleNode(arr[0])
    let current = head

    for (let i = 1; i < arr.length; i++) {
      current.next = new singleNode(arr[i])
      current = current.next

      if (this.length === 0) {
        this.front = head
        this.back = head
      } else {
        this.back.next = head
        this.back = head
      }
      this.length++
      //   return this;

      if (current.next === null) {
        current.next = null
      }
    }

    return head
  }
}

var q = new DoublyLinkedListQueue()
// q.ArrayDoublyLinkListQueueDeserialize(["joy","matt","pavel"])
// q.ArrayLinkListQueueDeserialize(["joy","matt","pavel"])
q.ArrayLinkListQueueDeserializeENQ(["joy", "matt", "pavel"])

// q.enqueue("joy");
// q.enqueue("matt");
// q.enqueue("pavel");
// q.dequeue();

console.log(q)
