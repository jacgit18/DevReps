// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

import { TreeNode } from "../../../src/util/BinaryTreeMaker"

const maxDepthBruteForce = (root: TreeNode | null): number => {
  return 0
}

const maxDepthNaiveImp = (root: TreeNode | null): number => {
  return 0
}

const maxDepthNaiveDec = (root: TreeNode | null): number => {
  return 0
}

const maxDepthOptimal = (root: TreeNode | null): number => {
  return 0
}

export const maxDepth = {
  maxDepthBruteForce,
  maxDepthNaiveImp,
  maxDepthNaiveDec,
  maxDepthOptimal,
}

// Example usage:
// const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log(maxDepth(root1)) // Output: 3

// const root2 = new TreeNode(1, null, new TreeNode(2))
// console.log(maxDepth(root2)) // Output: 2
