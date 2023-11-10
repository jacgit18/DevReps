class Vertex {
  constructor(id) {
    this.id = id !== undefined ? id : null
    this.edges = []
  }
}

const ArrayGraphDeserialize = (nodeIdx, edges) => {
  let vertices = {}

  // while (nodeIdx === 0) {

  while (nodeIdx--) {
    vertices[nodeIdx] = new Vertex(nodeIdx)
    // nodeIdx--
  }

  let v1
  let v2

  edges.forEach((edge) => {
    v1 = edge[0]
    v2 = edge[1]

    vertices[v1].edges.push(vertices[v2])
    vertices[v2].edges.push(vertices[v1])
  })

  return vertices[0]
}

// let idGraphIndex = 8;
// let GraphRelationshipArray = [
//   [0, 1],
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [4, 5],
//   [1, 7],
//   [4, 6],
//   [4, 7],
//   [5, 6],

// ];

let idGraphIndex = 5 // anything lesser then 5 throws error and no full graph

// let GraphRelationshipArray = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 1]

// ];

let GraphRelationshipArray = [
  [1, 2],
  [1, 4],
  [2, 1],
  [2, 3],
  [3, 2],
  [3, 4],
  [4, 1],
]

// 1-----------2
// |           |
// 4-----------3
let graph0 = ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)
let graph = new Vertex(1)
// graph.edges[0] = 1

// graph.edges[0] = new Vertex(1)

graph.edges[0] = new Vertex(2)

// graph.id.edges[0] =  new Vertex(2)
// graph.edges[0].id =  new Vertex(2)

graph.edges[1] = new Vertex(3)

graph.edges[2] = new Vertex(4)

graph.edges[0].edges[0] = graph.id
graph.edges[0].edges[1] = graph.edges[1].id

graph.edges[1].edges[0] = graph.edges[0].id
graph.edges[1].edges[1] = graph.edges[2].id

graph.edges[2].edges[0] = graph.edges[1].id
graph.edges[2].edges[1] = graph.id

// graph.id.edge = graph.edges[2].id// migth not need to point 1

// console.log(graph.edges[1])
//
// console.log(graph.edges[0])
// console.log(graph.edges[1])
// console.log(graph.edges[2])

// let v1;
// let v2;

// for (let edge in graph.edges){
//   console.log(edge)
//   v1 = edge[0];
//   v2 = edge[1];

//   vertices[v1].edges.push(vertices[v2]);
//   vertices[v2].edges.push(vertices[v1]);

// }

console.log("Graph Gen ", graph0)
console.log("Graph Built ", graph)

console.log("Graph Built Edges ", graph.edges)

function dfsRec(vertex) {
  let result = []
  let visited = new Set()
  //  let stack = [vertex];
  // let current;
  // since recursion no need for stack and storing vertex
  // in current vairiable and reasigning it to stack.pop()

  function helper(current) {
    if (visited.has(current)) return
    //  curr = stack.pop();

    visited.add(current)
    result.push(current.id)

    for (let edge of current.edges) {
      // stack.push(edge);

      helper(edge)
    }
  }

  helper(vertex)

  return result
}

//   DFSRec: [
//     0, 1, 2, 4,
//     5, 3, 6, 7
//   ]

// DFSRec: [
//     3, 6, 5, 7,
//     4, 2, 1, 0
//   ]

// console.log("DFSRec:", dfsRec(graph));
// console.log("DFSRec:", dfsRec(graph1));
