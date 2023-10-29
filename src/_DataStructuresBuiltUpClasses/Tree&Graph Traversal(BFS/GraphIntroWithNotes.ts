//Graphs
class Vertex {
  constructor(id) {
    this.id = id !== undefined ? id : null;
    this.edges = [];
  }
}

// Generate graph from int and array of arrays
function deserialize(node, edges) {
  let vertices = {};
  while (node--) {
    vertices[node] = new Vertex(node);
    //  try {
    //   console.log(vertices[node])

    // } catch (error) {

    // }
  }
  let v1;
  let v2;

  edges.forEach((edge) => {
    // console.log(`test ${edge}`)

    // The Coulmn goes left to right accross nested array and only two in this case
    // in terms of edges and multiple rows up to down that represent there
    // bidirectional relationship when it comes to array where dealing with

    // Coulmn 1 or index 0
    v1 = edge[0];
    // console.log(` First Y axis index ${v1}`)

    // Coulmn 2 or index 1
    v2 = edge[1];
    // console.log(` Second Y axis index ${v2}`)

    vertices[v1].edges.push(vertices[v2]); // edges is array propery we push into
    // represents edge total relationships
    // console.log(vertices[v1]) // prints nearest relationships like for 4
    // console.log(vertices)
    // console.log(vertices[v1].edges)

    // we print id 3 times first relationship id 2 and 5
    // then 2, 5, 6
    // then 2, 5, 6, and 7 we follow the array order that is why seven last relationship added
    // since we follow the order of the array we skip to 3 and 5 relationship at the end of the end
    // Vertex { id: 3, edges: [ Vertex { id: 5, edges: [] } ] }

    vertices[v2].edges.push(vertices[v1]);
    // console.log(vertices)
    // console.log(vertices[v2])

    // try {
    //   console.log(vertices[v1].edges[0]);
    // } catch (error) {}
  }
  );

  return vertices[0];
}

/* Let's build the following graph
 *
 *              2
 *            /   \
 *    0 ~~~ 1       4  ~~~ 5 ~~~ 3
 *            \   /   \   /
 *              7       6
 */

let num = 8;
let array = [
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

let graph = deserialize(num, array);
// console.log(graph)

//1. Breadth First Search
function bfs(vertex) {
  let result = [];
  let queue = [vertex]; // the whole graph is stored so queue is of length 1
  let current;
  let visited = new Set();
  visited.add(vertex); // the whole graph is stored so set is of size 1

  // try {
  //   console.log(visited);

  // } catch (error) {
    
  // }
  let foreachCount = 0;
  while (queue.length > 0) {
    // try {
    //   console.log(visited);
  
    // } catch (error) {
      
    // }
    current = queue.shift();
    // console.log(current)

    current.edges.forEach((edge) => {
        // console.log(`This iteration ${foreachCount}, ${!visited.has(edge)}`)
      if (!visited.has(edge)) {
        // console.log(edge)
        // console.log(queue);

        queue.push(edge);
    
        visited.add(edge);
        // try{
        //   console.log(queue); // 2 vist prints ids twice
        //   // otherwise one or 3 or greater vist prints once 
        //   // depending on if we returned(vist) edges already 
        //   // on previus vertex edges since we proably visted

        // } catch(e) {}

        // try{
        //   console.log(edge); 

        // } catch(e) {}

      }
      // foreachCount++;
    });

    result. push(current.id);
    // console.log(result)

  }
  return result;
}
console.log("BFS:", bfs(graph));

//2. Depth First Search
function dfs(vertex) {
  let result = [];
  let stack = [vertex];
  let current;

  let visited = new Set();
  visited.add(vertex);

  while (stack.length > 0) {
    current = stack.pop();

    current.edges.forEach((edge) => {
      if (!visited.has(edge)) {
        stack.push(edge);
        visited.add(edge);
      }
    });

    result.push(current.id);
  }
  return result;
}
console.log("DFS:", dfs(graph));
