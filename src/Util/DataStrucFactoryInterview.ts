// Basic List Data Structures //

// Stack & Queue main difference is pop which removes last index and dequeue which shifts or removes first index
// Stack LIFO(Last In First Out) - a Stack of plates 
const stackMaker = (stackOfPlates) => {
  let stack = [];
  for (let i = 0; i < stackOfPlates.length; i++){
    stack.push(stackOfPlates[i]); 
  }
  return stack;
}
let stack = stackMaker([2,3,1,4,3,2,6,5]);
stack.pop();
// console.log(stack)



// Queue FIFO(First In First Out) - a line(queue)/ticket 
const queMaker = (waitingLine) => {
  let queue = [];
  if(waitingLine.length <= 1 ){ 
    queue.push(waitingLine[0]);
  }
  for (let i = 0; i < waitingLine.length; i++){
    queue.push(waitingLine[i]); // push acts as enqueue
  }
  return queue;
}
let queue = queMaker([2,3,1,4,3,2,6,5]);
let dequeue = queue.shift();
// console.log(queue)



// Set does add() sets key and value as the same values
let mySet = new Set();
mySet.add(3);
mySet.add(10);
mySet.add(10);// wont be added
mySet.delete(3);
// mySet.delete(10); // will remove only 10
// console.log(mySet)
mySet.add(11);
mySet.add(4);
mySet.add(9);
// console.log(!mySet.has(11))
// console.log(mySet.size)
// console.log(mySet)
// console.log(mySet.values())
// console.log(mySet.keys())

// Are these the same
// class compare {
//   mymethod() {
//      return;
//     }
// }

// const compare = {
//   mymethod: function(){
//     return ;
//   }
// }

// End of Section //


  class ListNode {
    constructor(value = null) {
      this.value = value;
      this.next = null;
    }
  }



  class DoubleLLNode {
    constructor(data) {
      this.data = data;
      this.previous = null;
      this.next = null;
    }
  }


  class TreeNode {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Vertex − Each node of the graph is represented as a vertex. In the following example, the labeled circle represents vertices. 
  // Thus, A to G are vertices. We can represent them using an array as shown in the following image. Here A can be identified by index 0.
  //  B can be identified using index 1 and so on.
class Vertex {
    constructor(id) {
  // Adjacency − Two node or vertices are adjacent if they are connected to each other through an edge. 
  // In the following example, B is adjacent to A, C is adjacent to B, and so on.
      this.id = id !== undefined ? id : null;
      this.edges = [];
  // Edge − Edge represents a path between two vertices or a line between two vertices. 
  // In the following example, the lines from A to B, B to C, and so on represents edges.
  // We can use a two-dimensional array to represent an array as shown in the following image. 
  // Here AB can be represented as 1 at row 0, column 1, BC as 1 at row 1, column 2 and so on, keeping other combinations as 0.
    }
  }

  class NodeConstructor {
    
   ArrayLinkListDeserialize(arr) {
    if (arr.length === 0) { return null; }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
      if(current.next === null){
        current.next = null;
      }
    }
    return head;
  }

   ArrayCyclicLinkListDeserialize(arr) {
    if (arr.length === 0) { return null; }
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
      if(current.next === null){
        current.next = head; //fixed
      }
    }
    return head;
  }


   ArrayLinkListDoubleDeserialize(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
    
    let head = new DoubleLLNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
      let newNode = new DoubleLLNode(arr[i]);
      current.next = newNode;
      newNode.previous = current;
      current = newNode;
    }
    
    return head;
  }



  

  ArrayCyclicLinkListDoubleDeserialize(arr) {
    if (!arr || arr.length === 0) {
      return null;
    }
    
    let head = new DoubleLLNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
      let newNode = new DoubleLLNode(arr[i]);
      current.next = newNode;
      newNode.previous = current;
      current = newNode;
    }
    
    // Make the list cyclic
    current.next = head;
    head.previous = current;
    
    return head;
  }
  
  
  // NOT pure tree its a binary tree
  //  ArrayTreeDeserialize(arr) {
  //   if (arr.length === 0) { return null; }
  //   let root = new TreeNode(arr[0]);
  //   let queue = [root];
  //   for(let i = 1; i < arr.length; i += 2) {
  //     let current = queue.shift();
  //     if (arr[i] !== null) {
  //       current.left = new TreeNode(arr[i]);
  //       queue.push(current.left);
  //     }
  //     if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
  //       current.right = new TreeNode(arr[i + 1]);
  //       queue.push(current.right);
  //     }
  //   }
  //   return root;
  // }

  // Binary search tree just need to include arr with nulls
  ArrayBinaryTreeDeserialize(arr) {
    if (arr.length === 0) { return null; }
    // could get mid and put it as root to create balanced binary search tree
    let root = new TreeNode(arr[0]); // BFS levelOrder Push
    let queue = [root];
    for(let i = 1; i < arr.length; i += 2) {
      let current = queue.shift();

      // should try do recursive
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }

      if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
                
        current.right = new TreeNode(arr[i + 1]);
        queue.push(current.right);
      }

    }
    return root;
  }

  //  ArrayBinarySearchTreeDeserialize(arr) {
  //   if (arr.length === 0) { return null; }
  //   let root = new TreeNode(arr[0]);
  //   let queue = [root];
  //   for(let i = 1; i < arr.length; i += 2) {
  //     let current = queue.shift();
  //     if (arr[i] !== null) {
  //       current.left = new TreeNode(arr[i]);
  //       queue.push(current.left);
  //     }
  //     if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
  //       current.right = new TreeNode(arr[i + 1]);
  //       queue.push(current.right);
  //     }
  //   }
  //   return root;
  // }

  OGBugArrayGraphDeserialize(nodeIdx, edges) {
    let vertices = {};
        // while (nodeIdx--) {

    while (nodeIdx > 0) {
            // if(nodeIdx > 0){

      vertices[nodeIdx] = new Vertex(nodeIdx);
      // nodeIdx--;
              // edges.length

    // }
     // else if(edges.contains(0)){
      //   vertices[nodeIdx] = new Vertex(nodeIdx);

      // }


    }
    let v1;
    let v2;
  
    edges.forEach((edge) => {
 
      v1 = edge[0];
      v2 = edge[1];

      vertices[v1].edges.push(vertices[v2]); 
      vertices[v2].edges.push(vertices[v1]);
  
    }
    
    );
  
    return vertices[0];
  }

   ArrayGraphDeserialize(edges, nodeIdx) {
    const graph = {};

    // Add nodes to the graph with empty neighbor arrays using a while loop
    let i = 0;
    while (i <= nodeIdx) {
      graph[i] = [];
      i++;
    }
  
    // Add relationships to the graph using forEach
    edges.forEach(([node1, node2]) => {
      graph[node1].push(node2);
      graph[node2].push(node1);
    });
  
    return graph;
  }

    
  minheapMaker(node) {
    let heap = [];
     for (let i = 0; i <node.length; i++){

     heap.push(node[i])


     if (heap.length > 1) {
         let current = heap.length - 1;
      
      let heapHalf = heap[Math.floor(current/2)];
      let currentIndexVal = heap[current];
        
         while (current > 1 && heapHalf > currentIndexVal) {
            

             [heap[Math.floor(current/2)], heap[current]] = [heap[current], heap[Math.floor(current/2)]]
             current = Math.floor(current/2)

         }
     }
 }

 return heap
}
 


 maxheapMaker(node) {
 let heap = [];
  for (let i = 0; i <node.length; i++){

  heap.push(node[i])


  if (heap.length > 1) {
      let current = heap.length - 1;
   
   let heapHalf = heap[Math.ceil(current/2)];
   let currentIndexVal = heap[current];
     
      while (current > 1 && heapHalf < currentIndexVal) {
         

          [heap[Math.ceil(current/2)], heap[current]] = [heap[current], heap[Math.ceil(current/2)]]
          current = Math.ceil(current/2)

      }
  }
}

return heap
}

remove() {
  /* Smallest element is at the index 1 in the heap array */
  let largest = this.heap[1]

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
          return largest
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

  return largest
}




  }
  
  let LinkListArray = [1,5,7,10];
  // let TreeArray = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]
  let TreeArray = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]



  let idGraphIndex = 8;
  let GraphRelationshipArray = [
    [0, 1],
    [1, 2],
    [2, 4],
    [3, 5],
    [4, 5],
    [1, 7],
    [4, 6],
    [4, 7],
    [5, 6],
  ];

const stuructureMaker = new NodeConstructor();

// let linkedList = console.log(stuructureMaker.ArrayLinkListDeserialize(LinkListArray))
// let linkedListCyclic = console.log(stuructureMaker.ArrayCyclicLinkListDeserialize(LinkListArray))
// let linkedListDD = console.log(stuructureMaker.ArrayLinkListDoubleDeserialize(LinkListArray))
// let linkedListDDCY = console.log(stuructureMaker.ArrayCyclicLinkListDoubleDeserialize(LinkListArray))
// let tree = console.log(stuructureMaker.ArrayBinaryTreeDeserialize((TreeArray)));
let graph = console.log(stuructureMaker.ArrayGraphDeserialize(GraphRelationshipArray, idGraphIndex))

 


  module.exports = NodeConstructor;
  
  

