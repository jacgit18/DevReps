// const Graph = require("../../../_DataStructuresBuiltUpClasses/Tree&Graph Traversal(BFS/Graphs");
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }
  addVertex(node) {
    this.adjacentList[node] = []
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    //uniderected Graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ""
      let vertex
      for (vertex of nodeConnections) {
        connections += vertex + " "
      }
      console.log(node + "--> " + connections)
    }
  }
}

const myGraph = new Graph()

let GraphArray = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
]
let id = 4
// let node = myGraph.ArrayGraphDeserialize(id, GraphArray);
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")
myGraph.addVertex("4")

myGraph.addEdge("1", "2")
myGraph.addEdge("2", "3")
myGraph.addEdge("4", "1")
myGraph.addEdge("3", "4")

// console.log(myGraph)

let graph = new Node(1)
// graph.edges[0] = 1

// graph.edges[0] = new Vertex(1)

graph.neighbors[0] = new Node(2)

// graph.id.edges[0] =  new Vertex(2)
// graph.edges[0].id =  new Vertex(2)

graph.neighbors[1] = new Node(3)

graph.neighbors[2] = new Node(4)

graph.neighbors[0].neighbors[0] = graph.val
graph.neighbors[0].neighbors[1] = graph.neighbors[1].val

graph.neighbors[1].neighbors[0] = graph.neighbors[0].val
graph.neighbors[1].neighbors[1] = graph.neighbors[2].val

graph.neighbors[2].neighbors[0] = graph.neighbors[1].val
graph.neighbors[2].neighbors[1] = graph.val

// adjList = [[2,4],[1,3],[2,4],[1,3]]

const ArrayGraphDeserialize = (nodeIdx, edges) => {
  let vertices = {}

  // while (nodeIdx--) {
  while (nodeIdx >= 0) {
    vertices[nodeIdx] = new Node(nodeIdx)
    nodeIdx--
  }

  let v1
  let v2

  edges.forEach((edge) => {
    v1 = edge[0]

    // console.log(v1)

    v2 = edge[1]

    vertices[v1].edges.push(vertices[v2])
    // console.log(vertices[v1])

    vertices[v2].edges.push(vertices[v1])
    // console.log(vertices)
    // console.log( vertices[v2])
  })

  // console.log(vertices);
  // console.log(vertices[v1])
  // console.log(vertices[v2])

  return vertices[0]
}

const cloneGraph = function (node) {
  let start = node
  if (start === null) return null
  const vertexMap = new Map()

  const queue = [start]
  vertexMap.set(start, new Node(start.val))

  while (queue.length > 0) {
    const currentVertex = queue.shift()
    for (const neighbor of currentVertex.neighbors) {
      if (!vertexMap.has(neighbor)) {
        vertexMap.set(neighbor, new Node(neighbor.val))
        queue.push(neighbor)
      }

      vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor))
    }
  }
  return vertexMap.get(start)
}

// console.log(graph.edges);

let idGraphIndex = 3
let GraphRelationshipArray = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
]
console.log(cloneGraph(ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)))
