
export class MinHeap {
    heap: number[]
 
   constructor() {
     this.heap = []
   }
 
    swap(i: number, j: number): void {
     const temp = this.heap[i]
     this.heap[i] = this.heap[j]
     this.heap[j] = temp
   }
 
   // bubbleUp
    heapifyUp(): void {
     let current = this.heap.length - 1
 
     while (current > 0) {
       const parent = Math.floor((current - 1) / 2)
 
       if (this.heap[current] < this.heap[parent]) {
         this.swap(current, parent)
         current = parent
       } else {
         break
       }
     }
   }
 
   add(value: number): void {
     this.heap.push(value)
     this.heapifyUp()
   }
 
  //  pop(): number | undefined {
  //    if (this.heap.length === 0) return undefined
 
  //    const poppedValue = this.heap[0]
 
  //    if (this.heap.length === 1) {
  //      this.heap.pop()
  //    } else {
  //      this.heap[0] = this.heap.pop()!
  //      this.heapifyDown()
  //    }
 
  //    return poppedValue
  //  }

  pop(): number {
    if (this.isEmpty()) {
      throw new Error('Heap is empty');
    }

    const top = this.heap[0];
    const last = this.heap.pop() as number;

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return top;
  }

 // bubbleDown
    heapifyDown(): void {
     let current = 0
 
     while (true) {
       const leftChild = 2 * current + 1
       const rightChild = 2 * current + 2
       let smallest = current
 
       if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
         smallest = leftChild
       }
 
       if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
         smallest = rightChild
       }
 
       if (smallest !== current) {
         this.swap(current, smallest)
         current = smallest
       } else {
         break
       }
     }
   }
 
   peek(): number | undefined {
     return this.heap.length > 0 ? this.heap[0] : undefined
   }

   private isEmpty(): boolean {
    return this.heap.length === 0;
  }
 
   size(): number {
     return this.heap.length
   }
 }
 
 