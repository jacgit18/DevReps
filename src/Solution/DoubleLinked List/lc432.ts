// Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.

// Implement the AllOne class:

// AllOne() Initializes the object of the data structure.
// inc(String key) Increments the count of the string key by 1. If key does not exist in the data structure, insert it with count 1.
// dec(String key) Decrements the count of the string key by 1. If the count of key is 0 after the decrement, remove it from the data structure. It is guaranteed that key exists in the data structure before the decrement.
// getMaxKey() Returns one of the keys with the maximal count. If no element exists, return an empty string "".
// getMinKey() Returns one of the keys with the minimum count. If no element exists, return an empty string "".
// Note that each function must run in O(1) average time complexity.

// Example 1:

// Input
// ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey", "getMinKey"]
// [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
// Output
// [null, null, null, "hello", "hello", null, "hello", "leet"]

// Explanation
// AllOne allOne = new AllOne();
// allOne.inc("hello");
// allOne.inc("hello");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "hello"
// allOne.inc("leet");
// allOne.getMaxKey(); // return "hello"
// allOne.getMinKey(); // return "leet"

// Constraints:

// 1 <= key.length <= 10
// key consists of lowercase English letters.
// It is guaranteed that for each call to dec, key is existing in the data structure.
// At most 5 * 104 calls will be made to inc, dec, getMaxKey, and getMinKey.

class Node {
  count: number
  keys: Set<string>
  prev: Node | null
  next: Node | null

  constructor(count: number) {
    this.count = count
    this.keys = new Set()
    this.prev = null
    this.next = null
  }
}

export class AllOne {
  head: Node
  tail: Node
  keyCountMap: Map<string, number>
  countNodeMap: Map<number, Node>

  constructor() {
    this.head = new Node(-1)
    this.tail = new Node(-1)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.keyCountMap = new Map()
    this.countNodeMap = new Map()
  }

  private addNodeAfter(current: Node, newNode: Node): void {
    if (current.next) {
      newNode.next = current.next
      current.next.prev = newNode
    }
    newNode.prev = current
    current.next = newNode
  }

  private removeNode(node: Node): void {
    if (node.prev && node.next) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
  }

  inc(key: string): void {
    const currentCount = this.keyCountMap.get(key) || 0
    const newCount = currentCount + 1

    // Update keyCountMap
    this.keyCountMap.set(key, newCount)

    // Update countNodeMap
    if (!this.countNodeMap.has(newCount)) {
      const newNode = new Node(newCount)
      this.countNodeMap.set(newCount, newNode)
      this.addNodeAfter(this.head, newNode)
    }
    this.countNodeMap.get(newCount)?.keys.add(key)

    // Remove key from the previous count in countNodeMap
    if (currentCount > 0) {
      const prevNode = this.countNodeMap.get(currentCount)
      prevNode?.keys.delete(key)
      if (prevNode?.keys.size === 0) {
        this.removeNode(prevNode)
        this.countNodeMap.delete(currentCount)
      }
    }
  }

  dec(key: string): void {
    const currentCount = this.keyCountMap.get(key) || 0
    if (currentCount === 0) return

    const newCount = currentCount - 1

    // Update keyCountMap
    if (newCount === 0) {
      this.keyCountMap.delete(key)
    } else {
      this.keyCountMap.set(key, newCount)
    }

    // Update countNodeMap
    const currentNode = this.countNodeMap.get(currentCount)
    currentNode?.keys.delete(key)
    if (currentNode?.keys.size === 0) {
      this.removeNode(currentNode)
      this.countNodeMap.delete(currentCount)
    }

    if (newCount > 0) {
      if (!this.countNodeMap.has(newCount)) {
        const newNode = new Node(newCount)
        this.countNodeMap.set(newCount, newNode)
        this.addNodeAfter(currentNode?.prev || this.head, newNode)
      }
      this.countNodeMap.get(newCount)?.keys.add(key)
    }
  }

  getMaxKey(): string {
    const maxNode = this.head.next
    return maxNode && maxNode !== this.tail
      ? maxNode.keys.size > 0
        ? maxNode.keys.values().next().value
        : ""
      : ""
  }

  getMinKey(): string {
    const minNode = this.tail.prev
    return minNode && minNode !== this.head
      ? minNode.keys.size > 0
        ? minNode.keys.values().next().value
        : ""
      : ""
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
