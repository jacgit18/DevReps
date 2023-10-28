  
const log = (pre="", arg="", post="") => { try {
  console.log(`${pre} ${arg} ${post} `) } catch (e) {}

}
const info = (pre="", arg="", post="") => {console.info(`${pre} ${arg} ${post} `)}
const warn = (pre="", arg="", post="") => {console.warn(`${pre} ${arg} ${post} `)}
const error = (pre="", arg="", post="") => {console.error(`${pre} ${arg} ${post} `)}
const table = (pre="", arg="", post="") => {console.table(`${pre} ${arg} ${post} `)}

class Vertex {
    constructor(id) {
      this.id = id !== undefined ? id : null;
      this.edges = [];
  
    }
  }

    

   const ArrayGraphDeserialize = (nodeIdx, edges) =>{
    let vertices = {};
    while (nodeIdx--) {

    // while (nodeIdx >= 0) {

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

    
    // for (const edge in vertices.edges){
    //   v1 = edge[0]; 
    //   v2 = edge[1]; 

    //   vertices[v1].edges.push(vertices[v2]); 
    //   vertices[v2].edges.push(vertices[v1]);
    // }

    edges.forEach((edge) => {
      // [2,4] row 1
      v1 = edge[0]; // assign to first rowCOl [2]
      v2 = edge[1]; // assign to second row [4] might act as column



      vertices[v1].edges.push(vertices[v2]); 
      // accees key of v1 or 2 intially to push to edge v2 or 4 
      vertices[v2].edges.push(vertices[v1]);
      // does vice versa process
      // 2 > 4 / 4 > 2

    }


    
    );
  
    return vertices[0];
  }

  
  let id = 3;

  // let GraphArray = [[2,4],[1,3],[2,4],[1,3]];
  let GraphArray = [[1,2],[2,3],[3,4],[4,1]];
  /**
   *  1 ------ 2
   *  |        |
   *  4 ------ 3
   */


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

// const stuructureMaker = new NodeConstructor();

  // let graph1 =  ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)
  let graph1 =  ArrayGraphDeserialize(id, GraphArray)
  console.log(graph1)

/* 
 *
 *             2
 *           /   \
 *    0 ~~~ 1     4 ~~~ 5 ~~~ 3
 *           \   / \  /
 *             7    6
 */

  function bfs(vertex) {
    let result = [];
    let queue = [vertex]; 
    let current;
    let visited = new Set();
    visited.add(vertex); // the whole graph is stored so set is of size 1
    while (queue.length > 0) {
      current = queue.shift();

  //     current.edges.forEach((edge) => {
  //       if (!visited.has(edge)) {
  //         queue.push(edge);
  //         visited.add(edge);
  //       }
  //     }
  // );

  for (const edge of current.edges){
    if (!visited.has(edge)) {
      queue.push(edge);
      visited.add(edge);
    }
  }

      result.push(current.id);
    }
    return result;
  }
  




  function dfs(vertex) {
    let result = [];
    let stack = [vertex];
    let current;
    let visited = new Set();
    visited.add(vertex);
  
    while (stack.length > 0) {
      current = stack.pop();
  
      // current.edges.forEach((edge) => {
      //   if (!visited.has(edge)) {
      //     stack.push(edge);
      //     visited.add(edge);
      //   }
      // });
      result.push(current.id);


      for (const edge of current.edges){
        if (!visited.has(edge)) {
          stack.push(edge);
          visited.add(edge);
        }
      }
  
      // result.push(current.id);
    }
    return result;
  }



  function dfsRec(vertex) {
    let result = [];
    let stack = [vertex]; 
    let current;


    let visited = new Set();
     if(visited.has(current)) return;
     current = stack.pop();
  
    visited.add(current);
    result.push(current.id);

      for (let edge of current.edges){
         stack.push(edge);
 
        dfsRec(edge)
       
      }
    
    
    return result;
  }

  


  // console.log("DFS:", dfs(graph1));  
  // console.log("DFSRec:", dfsRec(graph1)); 


  // console.log("BFS:", bfs(graph1));





// console.log(Object.keys(graph1).length)
// console.log(Object.entries(graph1))


// for (const [key, value] in Object.keys(graph1)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(graph1.entries(graph1));

// var get_keys = graph1.keys(this.id);
 
    // iterate over the vertices
    // for (var i in get_keys)
// {
        // great the corresponding adjacency list
        // for the vertex
        // var get_values = this.AdjList.get(i);
        // var get_values = graph1.values(graph1.edges)

        // var conc = "";
 
        // iterate over the adjacency list
        // concatenate the values into a string
        // for (var j in get_values)
            // conc += j + " ";
 
        // print the vertex and its adjacency list
        // console.log(i + " -> " + conc);
    // }

  
  // console.log(ArrayGraphDeserialize(id, GraphArray));




  
