class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Given a root of a Binary Search Tree (BST) and a number num,
// implement an efficient function findLargestSmallerKey that finds
// the largest key in the tree that is smaller than num. If such a number
// doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

/*  
 |
 |  Problem Broken down to English: find the node that is the highest value that is less then num in this case 17
 |
 |   Identify I/O: tree / return node value 
 |
 |
 |   Identify Constraints: and the value we are returning should be one less then the num or lesser
 |   
 |
 |    
 V Define Naïve-Approach:
 |   Visualize on Whiteboard
 |   Variables:
 |
 V Psuedocode & convert into actionable steps  with order in mind and 
 | what Built in Functions(Array, String, Math) & Data Structure or Sorting 
 | Algorithms that can be Leveraged or ruled out & Identify Control flow 
 |
 |
 | 
 V Code


Control flow
         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:

         Switch case()

}      

 
*/

const findLargestSmallerKey = (rootNode, num) => {
  let result = -1
  while (rootNode !== null) {
    if (rootNode.value < num) {
      result = rootNode.value
      rootNode = rootNode.right
    } else {
      rootNode = rootNode.left
    }
  }

  return result
}
/* 
      20
    9    25
  5  12
    11 14
*/

let root = new TreeNode(20)
root.left = new TreeNode(9)
root.right = new TreeNode(25)

root.left.left = new TreeNode(5)

root.left.right = new TreeNode(12)

root.left.right.left = new TreeNode(11)

root.left.right.right = new TreeNode(14)
// console.log(root.left.right)

console.log(findLargestSmallerKey(root, 17)) // 14
