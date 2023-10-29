// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )

// Given Node: 3
// Level Order Successor: 4


//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10




/**
 * 
 * Input: tree
 * Output: the maximum depth level
 * 
 * Variables: root, root. left, root.right, index, array to store the root 

 * 
 * Brute force Approach
 * --------------- 
 * Pre-Condition: 
 * 
 * Conditions: 
 * 
 * Termination-Conditions: 

 * 
 * Post-Conditions: 
 * 
 * 
 * 
 *  Optimal Approach
 * -----------------
 * Variables: 

 * Pre-Condition: 
 * 
 * Conditions: 
 * 
 * Termination-Conditions: 

 * 
 * Post-Conditions: 
 * 
 * 
 */



/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/


// Constructor to create a new Node
const treeGrower = require('../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview')
const tree = new treeGrower();

function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

findInOrderSuccessor = function(root) {
 if (root.right != null)  return findMinKeyWithinTree(root.right)

let ancestor = root.parent;
let child = root;

while (ancestor != null && child == ancestor.right){
  child = ancestor
  ancestor = child.parent

}

return ancestor

}


function findMinKeyWithinTree(inputNode){
  while(inputNode.left != null){
    inputNode = inputNode.left

  }

  return inputNode
}


getNodeByKey = function(tree, keyTofind) {
  var currentNode = tree;

  while(currentNode) {
      if(keyTofind === currentNode.value) {
          return currentNode;
      }

      if(keyTofind > currentNode.value) {
          currentNode = currentNode.left;
      }
      else {
          currentNode = currentNode.right;
      }
  }

  return null;
}


var bst = tree.ArrayBinaryTreeDeserialize([1,2,3,4,5,null,6])

// bst.insert(1);
// bst.insert(2);
// bst.insert(3);
// bst.insert(4);
// bst.insert(5);
// bst.insert(6);
// console.log(bst.left.left.value);
let search = bst.left.value;
// Get a reference to the node whose key is 9
// var test = getNodeByKey(bst, search);
// console.log(test)

// Find the in order successor of test
var succ = findInOrderSuccessor(bst) ;
console.log(succ)

// Print the key of the successor node
// if(succ) {
//   console.log("Inorder successor of " + test.key + " is " + succ.key);
// } else {
//   console.log("Inorder successor does not exist");
// }
