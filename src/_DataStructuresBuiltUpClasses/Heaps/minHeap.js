
class MinHeap {

    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        // this.heap = [null]
        this.heap = []
    }

    getMin () {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }
    
    insert (node) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;
            let count1 = 0;
            let count2 = 0;
           
            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
                // console.log(this.heap[current])
                // console.log(this.heap[current])
                // let indexMath = Math.floor(current/2);
                // console.log(`index ${indexMath} current value is ${current} iter ${count1++}`);
                // console.log(`index value ${this.heap[Math.floor(current/2)]} iter ${count2++}`);

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)

            }
        }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] ||
                        this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }
}
module.exports = MinHeap;

const hp = new MinHeap();

hp.insert(652)
hp.insert(335)
hp.insert(466)
hp.insert(532)
hp.insert(2330)
hp.insert(324)
hp.insert(222)
hp.insert(4654)
hp.insert(5432)
hp.insert(43)


console.log(hp.getMin())
//        43 
//    324     222
//   335 
//  466
// 532
//652
//
console.log(hp)
hp.remove()
console.log(hp)