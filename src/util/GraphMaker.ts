export class GraphVertex {
  val: number
  neighbors: GraphVertex[]

  constructor(val: number) {
    this.val = val
    this.neighbors = []
  }
}

export class Graph {
  private nodes: Map<number, GraphVertex>

  constructor() {
    this.nodes = new Map()
  }

  addNode(val: number): void {
    this.nodes.set(val, new GraphVertex(val))
  }

  addEdge(val1: number, val2: number): void {
    const node1 = this.nodes.get(val1)
    const node2 = this.nodes.get(val2)

    if (node1 && node2) {
      node1.neighbors.push(node2)
      node2.neighbors.push(node1) // Assuming an undirected graph
    }
  }

  createGraphFromArray(arr: number[][]): void {
    for (const pair of arr) {
      const [val1, val2] = pair
      if (!this.nodes.has(val1)) this.addNode(val1)
      if (!this.nodes.has(val2)) this.addNode(val2)
      this.addEdge(val1, val2)
    }
  }

  printGraph(): void {
    for (const [val, node] of this.nodes) {
      const neighborVals = node.neighbors.map((neighbor) => neighbor.val).join(", ")
      console.log(`${val} -> ${neighborVals}`)
    }
  }
}

// Example usage:
const graph = new Graph()

// Creating graph from array
const arrayGraph = [
  [1, 2],
  [2, 3],
  [3, 1],
]

graph.createGraphFromArray(arrayGraph)

// Print the graph
// graph.printGraph();
