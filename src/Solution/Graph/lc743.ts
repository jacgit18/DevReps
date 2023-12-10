// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Example 1:

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

// Example 2:

// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1

// Example 3:

// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1

// Constraints:

// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

export const networkDelayTime = (times: number[][], n: number, k: number): number => {
  const graph: { [key: number]: { [key: number]: number } } = {}

  // Build the graph
  for (const [u, v, w] of times) {
    if (!graph.hasOwnProperty(u)) {
      graph[u] = {}
    }
    graph[u][v] = w
  }

  const distances: { [key: number]: number } = {}
  for (let i = 1; i <= n; i++) {
    distances[i] = Infinity
  }
  distances[k] = 0

  const visited: boolean[] = new Array(n + 1).fill(false)

  while (true) {
    let minNode = -1
    let minDistance = Infinity

    // Find the unvisited node with the smallest distance
    for (let i = 1; i <= n; i++) {
      if (!visited[i] && distances[i] < minDistance) {
        minNode = i
        minDistance = distances[i]
      }
    }

    // If no unvisited nodes with finite distance are left, break
    if (minNode === -1) {
      break
    }

    visited[minNode] = true

    // Update distances for neighbors of the current node
    const neighbors = graph[minNode] || {}
    for (const neighbor in neighbors) {
      if (neighbors.hasOwnProperty(neighbor)) {
        const newDistance = minDistance + neighbors[neighbor]
        distances[neighbor] = Math.min(distances[neighbor], newDistance)
      }
    }
  }

  // Check if all nodes were visited
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      return -1
    }
  }

  // Find the maximum distance among all nodes
  let maxDistance = 0
  for (let i = 1; i <= n; i++) {
    maxDistance = Math.max(maxDistance, distances[i])
  }

  return maxDistance
}

// Example usage:
//   const times1 = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
//   console.log(networkDelayTime(times1, 4, 2)); // Output: 2

//   const times2 = [[1, 2, 1]];
//   console.log(networkDelayTime(times2, 2, 1)); // Output: 1

//   const times3 = [[1, 2, 1]];
//   console.log(networkDelayTime(times3, 2, 2)); // Output: -1
