const { DataStructureFactory, StackLinkedList, Queue: QueueLinkedList, DoublyCyclicLinkedList, CyclicLinkedList } = require('../../src/util/DataStrucFactory');
// Queue: QueueLinkedList alias
describe('StackLinkedList', () => {
  it('should push and pop items', () => {
    const stackLinkedList = DataStructureFactory.createStackLinkedList();
    stackLinkedList.push(10);
    stackLinkedList.push(20);
    stackLinkedList.push(30);
    expect(stackLinkedList.pop()).toBe(30);
  });

  it('should push multiple items', () => {
    const stackLinkedList = DataStructureFactory.createStackLinkedList();
    stackLinkedList.pushMany([10, 20, 30]);
    expect(stackLinkedList.pop()).toBe(30);
    expect(stackLinkedList.pop()).toBe(20);
    expect(stackLinkedList.pop()).toBe(10);
  });
});


describe('Queue', () => {
  it('should enqueue and dequeue items', () => {
    const queue = DataStructureFactory.createQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
  });

  it('should enqueue multiple items', () => {
    const queue = DataStructureFactory.createQueue();
    queue.enqueueMany([10, 20, 30]);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });
});

describe('DoublyCyclicLinkedList', () => {
  it('should push items', () => {
    const doublyCyclicList = DataStructureFactory.createDoublyCyclicLinkedList([10]);
    expect(doublyCyclicList.head.data).toBe(10);
  });

  it('should push multiple items', () => {
    const doublyCyclicList = DataStructureFactory.createDoublyCyclicLinkedList([10, 20, 30]);
    expect(doublyCyclicList.head.data).toBe(10);
    expect(doublyCyclicList.head.next.data).toBe(20);
    expect(doublyCyclicList.head.previous.data).toBe(30);
  });
});

describe('CyclicLinkedList', () => {
  it('should push items', () => {
    const cyclicList = DataStructureFactory.createCyclicLinkedList([10]);
    expect(cyclicList.head.value).toBe(10);
  });

  it('should push multiple items', () => {
    const cyclicList = DataStructureFactory.createCyclicLinkedList([10, 20, 30]);
    expect(cyclicList.head.value).toBe(10);
    expect(cyclicList.head.next.value).toBe(20);
    expect(cyclicList.head.next.next.value).toBe(30);
  });
});



describe('createBinarySearchTree', () => {
  it('should create a binary search tree', () => {
    const binarySearchTree = DataStructureFactory.createBinarySearchTree(50);
    expect(binarySearchTree.root.value).toBe(50);
  });

  // Add more test cases as needed
});

describe('createGraph', () => {
  it('should create a graph with nodes and edges', () => {
    const graph = DataStructureFactory.createGraph(
      ['A', 'B', 'C'],
      [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
      ]
    );
    expect(Object.keys(graph.nodes)).toHaveLength(3);
    expect(graph.nodes['A'].edges).toHaveLength(2);
  });

  // Add more test cases as needed
});


describe('createMaxHeap', () => {
  it('should create a max heap', () => {
    const maxHeap = DataStructureFactory.createMaxHeap();
    maxHeap.insert(10);
    maxHeap.insert(20);
    maxHeap.insert(30);
    expect(maxHeap.extract()).toBe(30);
  });

  // Add more test cases as needed
});

describe('createMinHeap', () => {
  it('should create a min heap', () => {
    const minHeap = DataStructureFactory.createMinHeap();
    minHeap.insert(10);
    minHeap.insert(20);
    minHeap.insert(30);
    expect(minHeap.extract()).toBe(10);
  });

  // Add more test cases as needed
});
