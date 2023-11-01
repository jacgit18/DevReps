// Trees
const treeGrower = require("../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview")
const tree = new treeGrower()

/*  Let's build the following tree with deserialize:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */

let array = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]
let newTree = tree.ArrayBinaryTreeDeserialize(array)

// Depth First Search - Pre
let resultPre = []
function dfsPre(node) {
  if (node === null) {
    return
  }
  resultPre.push(node.value) //A
  dfsPre(node.left) //L
  dfsPre(node.right) //R
  return resultPre
}
console.log("DFS Pre:", dfsPre(newTree))

// Depth First Search - In-order
let resultIn = []
function dfsIn(node) {
  if (node === null) {
    return
  }
  dfsIn(node.left) //L
  resultIn.push(node.value) //A
  dfsIn(node.right) //R
  return resultIn
}
console.log("DFS In:", dfsIn(newTree))

//Depth First Search - Post
let resultPost = []
function dfsPost(node) {
  if (node === null) {
    return
  }
  dfsPost(node.left) //L
  dfsPost(node.right) //R
  resultPost.push(node.value) //A
  return resultPost
}
console.log("DFS Post:", dfsPost(newTree))
