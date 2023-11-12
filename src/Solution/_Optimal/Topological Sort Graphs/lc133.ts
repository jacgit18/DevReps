class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number) {
    this.val = val;
    this.neighbors = [];
  }
}

export const cloneGrapher = (node: GraphNode | null): GraphNode | null => {
  if (!node) return null;

  const visited = new Map();

  const dfs = (originalNode: GraphNode): GraphNode => {
    if (visited.has(originalNode.val)) {
      return visited.get(originalNode.val);
    }

    const cloneNode = new GraphNode(originalNode.val);
    visited.set(cloneNode.val, cloneNode);

    for (const neighbor of originalNode.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }

    return cloneNode;
  };

  return dfs(node);
};

// Example usage:
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGrapher(node1);
console.log(clonedGraph);
