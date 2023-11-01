// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
//You should populate the values of all nodes in each level from left to right in separate sub-arrays.

/**
 *
 * Input: tree
 * Output: last to root in array
 *
 * Naive Approach
 * ---------------
 * Variables: root, root. left, root.right, array to store the results
 *
 *
 */

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const traverse = (root) => {
  let result = []
  let queue = [root]

  while (queue.length) {
    let levelSize = queue.length
    let currentLevel = []
    for (let i = 0; i < levelSize; i += 1) {
      let currentNode = queue.shift()
      if (currentNode.left) console.log(`Left push: ${queue.push(currentNode.left)}`)
      // console.log(`queue Key Value pair checker ${queue.map((node) => {
      //  return node.value
      // })}`)

      console.log(`queue ${queue.length}`)
      if (currentNode.right) console.log(`Right push: ${queue.push(currentNode.right)}`)
      console.log(`queue Check  ${queue.length}`)
      console.log(
        `queue Key Value pair checker ${queue.map((node) => {
          return node.value
        })}`,
      )

      console.log(`currentNode : ${currentNode.value}`)
      currentLevel.push([currentNode.value])
      console.log(`New Level ${currentLevel.length}`)
    }
    console.log(`Checker : ${currentLevel}`)
    console.log(`Result Check : ${result.unshift(currentLevel)}`)

    // result.unshift(currentLevel);
  }
  return result
}

const traverse2 = (root) => {
  let result = []
  let queue = [root]

  while (queue.length) {
    let levelSize = queue.length
    let currentLevel = []
    for (let i = 0; i < levelSize; i += 1) {
      let currentNode = queue.shift()
      if (currentNode.left) queue.push(currentNode.left)

      if (currentNode.right) queue.push(currentNode.right)

      currentLevel.push(currentNode.value)
    }
    result.unshift(currentLevel)
  }
  return result
}

var root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.time("doSomething")
console.log(`Reverse level order traversal: ${traverse2(root)}`)
console.timeEnd("doSomething")

console.log(`\n ------- Edge Case -------- `)
// console.log(`Reverse level order traversal: ${traverse(root)}`);

// Solution
// -----
// const traverse = function(root) {
//   const queue = [root];
//   const result = [];
//   if (!root) return result;

//   while (queue.length) {
//     const currLevel = [];
//     const levelSize = q.length;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift();

//       currLevel.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.unshift(currLevel);
//   }

//   return result;
// };

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
