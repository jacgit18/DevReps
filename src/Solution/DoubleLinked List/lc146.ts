// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

class ListNode {
    key: number;
    value: number;
    prev: ListNode | null;
    next: ListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export class LRUCache {
    capacity: number;
    cache: Map<number, ListNode>;
    head: ListNode | null;
    tail: ListNode | null;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = null;
        this.tail = null;
    }

    private moveToHead(node: ListNode): void {
        if (node === this.head) {
            return;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
        }

        this.head = node;
        node.prev = null;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            this.moveToHead(node);
            return node.value;
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new ListNode(key, value);

            if (this.cache.size >= this.capacity) {
                if (this.tail) {
                    this.cache.delete(this.tail.key);
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                }
            }

            this.cache.set(key, newNode);
            this.moveToHead(newNode);

            if (!this.tail) {
                this.tail = newNode;
            }
        }
    }
}

// Example usage:
// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1);
// lRUCache.put(2, 2);
// console.log(lRUCache.get(1)); // Output: 1
// lRUCache.put(3, 3);
// console.log(lRUCache.get(2)); // Output: -1
// lRUCache.put(4, 4);
// console.log(lRUCache.get(1)); // Output: -1
// console.log(lRUCache.get(3)); // Output: 3
// console.log(lRUCache.get(4)); // Output: 4

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */