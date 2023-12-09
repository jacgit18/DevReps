export class MaxHeap {
    heap: any[];
  
    constructor() {
      this.heap = [];
    }
  
    swap(i: number, j: number): void {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  
    // bubbleUp
    heapifyUp(): void {
      let current = this.heap.length - 1;
  
      while (current > 0) {
        const parent = Math.floor((current - 1) / 2);
  
        if (this.heap[current] > this.heap[parent]) {
          this.swap(current, parent);
          current = parent;
        } else {
          break;
        }
      }
    }
  
    add(value: any, paramTwo?: any): void {
      this.heap.push(value, paramTwo);
      this.heapifyUp();
    }
  
    pop(): any | undefined {
      if (this.heap.length === 0) return undefined;
  
      const poppedValue = this.heap[0];
  
      if (this.heap.length === 1) {
        this.heap.pop();
      } else {
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
      }
  
      return poppedValue;
    }
  
    // bubbleDown
    heapifyDown(): void {
      let current = 0;
  
      while (true) {
        const leftChild = 2 * current + 1;
        const rightChild = 2 * current + 2;
        let largest = current;
  
        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
          largest = leftChild;
        }
  
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
          largest = rightChild;
        }
  
        if (largest !== current) {
          this.swap(current, largest);
          current = largest;
        } else {
          break;
        }
      }
    }
  
    peek(): number | undefined {
      return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  
    size(): number {
      return this.heap.length;
    }
  }
  