// Problem Statement #

// Given a binary tree, populate an array to represent its
// level-by-level traversal.
// You should populate the values of all nodes of each
// level from left to right in separate sub-arrays.

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/**
 *     12 bfs vist each level
 *   /    \
 *  7       1
 * / \     / \
  9  null 10  5 
 / \      / \ / \
 null--------null
Input: root = [12,7,1,9,null,10,5]
Output: [[12],[7,1],[9,10,5]]

dfs vist each side completley before other side


*/

// simpler
function bfs(node) {
  let queue = [node]
  let current
  let result = []
  while (queue.length > 0) {
    current = queue.shift()
    if (current.left !== null) queue.push(current.left)

    if (current.right !== null) queue.push(current.right)

    result.push(current.value)
  }
  return result
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
// let root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(5);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(7);
// root.right.right.left = new TreeNode(6);
// root.right.right.right = new TreeNode(8);

// console.log(root)
console.log(`Level order traversal: ${bfs(root)}`)

// Time complexity #
// The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), therefore we will need O(N) space to store them in the queue.
