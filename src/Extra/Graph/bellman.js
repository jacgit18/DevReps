const nodeConstructor = require('../../../../Code/_DataStructuresBuiltUpClasses/DataStrucFactoryInterview');

const graphMaker = new nodeConstructor();
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
let graph = graphMaker.ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray);

console.log(graph)



function bellmanFord(graph, vertex) {
    const distances        = {};
    const previousVertices = {};
  
    // Init all distances with infinity
    distances[vertex] = 0;
    graph.vertices.map(function(node){
      previousVertices[node] = null;
      if (node !== vertex) {
        distances[node] = Infinity;
      }
    });
  
    for (let node in distances) {
      for (let i = 0; i < graph.edges.length; i++) {
        if (graph.edges[i].startVertex == node || graph.edges[i].endVertex == node) {
          const neighbor = graph.edges[i].startVertex == node ? graph.edges[i].endVertex : graph.edges[i].startVertex;
  
          const distanceToVertex = distances[node];
          const distanceToNeighbor = distanceToVertex + graph.edges[i].weight;
  
          if (distanceToNeighbor < distances[neighbor]) {
            distances[neighbor] = distanceToNeighbor;
            previousVertices[neighbor] = node;
          }
        }
      }
    }
    return {distances, previousVertices};
  }

//   bellmanFord(graph, vertex);