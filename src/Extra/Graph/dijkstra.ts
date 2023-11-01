const nodeConstructor = require("../../../../Code/_DataStructuresBuiltUpClasses/DataStrucFactoryInterview")

const graphMaker = new nodeConstructor()
let idGraphIndex = 8
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
]
let graph = graphMaker.ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)

console.log(graph)

function dijkstra(graph, vertex) {
  const priorityQueueInsertOrUpdate = function (current) {
    for (var i = 0; i < priorityQueue.length; i++) {
      if (distance[current].distance > distance[priorityQueue[i]].distance) break
    }
    priorityQueue.splice(i, 0, current)
  }

  const distance = { [vertex]: { distance: 0, parent: "None" } }
  const priorityQueue = [vertex]

  while (priorityQueue.length) {
    const current = priorityQueue.shift()
    for (node in graph[current]) {
      const weigth = graph[current][node]
      if (!distance[node] || distance[node] > distance[current].distance + weigth) {
        distance[node] = { distance: distance[current].distance + weigth, parent: current }
        priorityQueueInsertOrUpdate(node)
      }
    }
  }
  return distance
}

//   const returnHolder = dijkstra(graph, vertex);
//   returnHolder();
