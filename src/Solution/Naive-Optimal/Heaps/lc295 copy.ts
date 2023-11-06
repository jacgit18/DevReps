const MaxPriorityQueue = require("../../../_DataStructuresBuiltUpClasses/maxHeap")
const MinPriorityQueue = require("../../../_DataStructuresBuiltUpClasses/minHeap")
const PriorityQueue = require("../../../_DataStructuresBuiltUpClasses/PriorityQueue")

class MedianFinder {
  //Initilize max and min heap
  constructor() {
    this.minHeap = new MinPriorityQueue() //supported by leetcode
    this.maxHeap = new MaxPriorityQueue()
  }

  addNum(num) {
    //add to min and pop the top for max to keep them in the order that we want
    this.minHeap.insert(num)
    this.maxHeap.insert(this.minHeap.remove().element)
    //balance them
    if (this.minHeap.getMin() < this.maxHeap.getMax()) {
      this.minHeap.insert(this.maxHeap.remove().element)
    }
    //console.log(this.minHeap.toArray(), this.maxHeap.toArray()) //run this to understand better
  }

  findMedian() {
    if (this.minHeap.getMin() > this.maxHeap.getMax())
      // if one is bigger 21 and 345 example just pop from 345(min heap)
      return this.minHeap.front().element
    else return (this.minHeap.front().element + this.maxHeap.front().element) / 2 // 21 and 34 example, pop 1 and 3 and find average
  }
}

const heaper = new MedianFinder()
heaper.addNum(3)
heaper.addNum(1)
heaper.addNum(5)
heaper.addNum(4)
console.log(heaper)
// const Graph = require("../../../_DataStructuresBuiltUpClasses/Tree&Graph Traversal(BFS/Graphs");
