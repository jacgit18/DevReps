// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3
 

// Constraints:

// 1 <= capacity <= 104
// 0 <= key <= 105
// 0 <= value <= 109
// At most 2 * 105 calls will be made to get and put.


class Node {
    constructor(public freq: number, public keys: Set<number>, public prev: Node | null = null, public next: Node | null = null) {}
}

export class LFUCache {
    private capacity: number;
    private keyMap: Map<number, number>;
    private nodeMap: Map<number, Node>;
    private head: Node;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.keyMap = new Map();
        this.nodeMap = new Map();
        this.head = new Node(0, new Set());
    }

    private addNodeAfter(node: Node, freq: number): Node {
        const newNode = new Node(freq, new Set(), node, node.next);
        if (node.next) {
            node.next.prev = newNode;
        }
        node.next = newNode;
        return newNode;
    }

    private removeNode(node: Node): void {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
    }

    private updateFrequency(key: number): void {
        const oldNode = this.nodeMap.get(key);
        if (oldNode) {
            oldNode.keys.delete(key);
            if (oldNode.next && oldNode.next.freq === oldNode.freq + 1) {
                oldNode.next.keys.add(key);
            } else {
                const newNode = this.addNodeAfter(oldNode, oldNode.freq + 1);
                newNode.keys.add(key);
            }
            if (oldNode.keys.size === 0) {
                this.removeNode(oldNode);
            }
            this.nodeMap.set(key, oldNode.next || oldNode);
        }
    }

    get(key: number): number {
        if (this.capacity === 0 || !this.keyMap.has(key)) {
            return -1;
        }

        this.updateFrequency(key);
        return this.keyMap.get(key) || -1;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) {
            return;
        }

        if (!this.keyMap.has(key)) {
            if (this.keyMap.size === this.capacity) {
                const leastFreqNode = this.head.next;
                if (leastFreqNode) {
                    const leastFreqKey = leastFreqNode.keys.values().next().value;
                    leastFreqNode.keys.delete(leastFreqKey);
                    if (leastFreqNode.keys.size === 0) {
                        this.removeNode(leastFreqNode);
                    }
                    this.keyMap.delete(leastFreqKey);
                    this.nodeMap.delete(leastFreqKey);
                }
            }
            const firstNode = this.head.next || this.addNodeAfter(this.head, 0);
            firstNode.keys.add(key);
            this.nodeMap.set(key, firstNode);
        }

        this.keyMap.set(key, value);
        this.updateFrequency(key);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */