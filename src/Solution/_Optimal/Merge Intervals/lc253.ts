class MinHeap {
     heap: number[] = [];

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private siftUp(): void {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    private siftDown(): void {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            const smallerChildIndex =
                rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]
                    ? rightChildIndex
                    : leftChildIndex;

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    insert(value: number): void {
        this.heap.push(value);
        this.siftUp();
    }

    extractMin(): number | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
    
        const min = this.heap[0];
        const lastElement = this.heap.pop();
    
        if (this.heap.length > 0 && lastElement !== undefined) {
            this.heap[0] = lastElement;
            this.siftDown();
        }
    
        return min as number; // Asserting that 'min' is a number
    }
    

    size(): number {
        return this.heap.length;
    }
}

// import class from util 

export const minMeetingRooms = (intervals: number[][]): number => {
    if (intervals.length === 0) {
        return 0;
    }

    // Sort meetings based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinHeap();
    minHeap.insert(intervals[0][1]); // Add the end time of the first meeting to the heap

    // Iterate through the remaining meetings
    for (let i = 1; i < intervals.length; i++) {
        const currentMeeting = intervals[i];

        // Check if the earliest ending meeting has ended
        if (currentMeeting[0] >= minHeap.extractMin() || minHeap.size() === 0) {
            // The room can be reused
            minHeap.insert(currentMeeting[1]);
        } else {
            // A new room is needed
            minHeap.insert(currentMeeting[1]);
        }
    }

    return minHeap.size();
}

// Example usage:
const example1 = minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
console.log(example1); // Output: 2

const example2 = minMeetingRooms([[7, 10], [2, 4]]);
console.log(example2); // Output: 1
