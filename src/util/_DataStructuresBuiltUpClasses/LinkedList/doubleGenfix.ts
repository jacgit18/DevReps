class DoubleLLNode {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    //   this.tail = {
    //     value: value,
    //     next: null,
    //     prev: null
    //   };
    // this.length = 1;
  }
}

const ArrayLinkListDoubleDeserialize = (arr) => {
  if (arr.length === 0) {
    return null
  }
  let head = new DoubleLLNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new DoubleLLNode(arr[i])
    current = current.next
    tail = current.prev
  }
  // this.tail = head;
  return head
}

let LinkListArray = [1, 5, 7, 10]
let linkedListDD = console.log(ArrayLinkListDoubleDeserialize(LinkListArray))
