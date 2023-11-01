var front, back

// Linked List Node
class Node {
  constructor() {
    this.info = 0
    this.priority = 0
    this.prev = null
    this.next = null
  }
}

// Function to insert a new Node
function push(fr, rr, n, p) {
  var news = new Node()
  news.info = n
  news.priority = p

  // If linked list is empty
  if (fr == null) {
    fr = news
    rr = news
    news.next = null
  } else {
    // If p is less than or equal front
    // node's priority, then insert at
    // the front.
    if (p <= fr.priority) {
      news.next = fr
      fr.prev = news.next
      fr = news
    }

    // If p is more back node's priority,
    // then insert after the back.
    else if (p > rr.priority) {
      news.next = null
      rr.next = news
      news.prev = rr.next
      rr = news
    }

    // Handle other cases
    else {
      // Find position where we need to
      // insert.
      var start = fr.next
      while (start.priority > p) start = start.next
      start.prev.next = news
      news.next = start.prev
      news.prev = start.prev.next
      start.prev = news.next
    }
  }
  front = fr
  back = rr
}

// Return the value at back
function peek(fr) {
  return fr.info
}

function isEmpty(fr) {
  return fr == null
}

// Removes the element with the
// least priority value form the list
function pop(fr, rr) {
  var temp = fr
  var res = temp.info
  fr = fr.next
  if (fr == null) rr = null

  front = fr
  back = rr
  return res
}

// Driver code

push(front, back, 2, 3)
push(front, back, 3, 4)
push(front, back, 4, 5)
push(front, back, 5, 6)
push(front, back, 6, 7)
push(front, back, 1, 2)

// document.write(pop(front, back) + "<br/>");
// console.log(pop(front, back) )
// console.log(peek(front))
console.log(front)
console.log(back)
