const { DataStructureFactory, StackLinkedList, Queue, DoublyCyclicLinkedList, CyclicLinkedList } = require('../../src/util/DataStrucFactory');

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
    const doublyCyclicList = DataStructureFactory.createDoublyCyclicLinkedList();
    doublyCyclicList.push(10);
    doublyCyclicList.push(20);
    expect(doublyCyclicList.head.data).toBe(10);
  });

  it('should push multiple items', () => {
    const doublyCyclicList = DataStructureFactory.createDoublyCyclicLinkedList();
    doublyCyclicList.pushMany([10, 20, 30]);
    expect(doublyCyclicList.head.data).toBe(10);
    expect(doublyCyclicList.head.next.data).toBe(20);
    expect(doublyCyclicList.head.previous.data).toBe(30);
  });
});

describe('CyclicLinkedList', () => {
  it('should push items', () => {
    const cyclicList = DataStructureFactory.createCyclicLinkedList();
    cyclicList.push(10);
    cyclicList.push(20);
    expect(cyclicList.head.value).toBe(10);
  });

  it('should push multiple items', () => {
    const cyclicList = DataStructureFactory.createCyclicLinkedList();
    cyclicList.pushMany([10, 20, 30]);
    expect(cyclicList.head.value).toBe(10);
    expect(cyclicList.head.next.value).toBe(20);
    expect(cyclicList.head.next.next.value).toBe(30);
  });
});
