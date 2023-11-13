class TreeNoder {
  value: number;
  left: TreeNoder | null;
  right: TreeNoder | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Given a root of a Binary Search Tree (BST) and a number num,
// implement an efficient function findLargestSmallerKey that finds
// the largest key in the tree that is smaller than num. If such a number
// doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.




export const findLargestSmallerKey = (root: TreeNoder | null, num: number): number =>{
  let result = -1;

  while (root !== null) {
    if (root.value < num) {
      // Update result and move to the right subtree
      result = root.value;
      root = root.right;
    } else {
      // Move to the left subtree
      root = root.left;
    }
  }

  return result;
}

/* 
      20
    9    25
  5  12
    11 14
*/

const rooT = new TreeNoder(20);
rooT.left = new TreeNoder(9);
rooT.right = new TreeNoder(25);
rooT.left.left = new TreeNoder(5);
rooT.left.right = new TreeNoder(12);
rooT.left.right.left = new TreeNoder(11);
rooT.left.right.right = new TreeNoder(14);

const numToFind = 15;
console.log(findLargestSmallerKey(rooT, numToFind)); // Output: 14
