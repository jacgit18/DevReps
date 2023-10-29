class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  };
  



var levelOrderBottom = function(root) {
  if (root == null) {
    return root;
  }
    let h = maxHeight(root); /* get the height using helper fn below */
    let results = []; /* init an array to hold final answer */
    let depth = 1; /* init depth to 1 since we are using 1-based height */
    for (depth; depth <= h; depth++) {
      /* iterate from depth to tree height */
      results.push(levelOrder(root, depth)); /* push an array of each level's node values to results */
    }
  
    // return results.reverse();
    return results;
  };
  
  /*
    recursive level-order traversal which collects all nodes
    from each level into an array.
  */
  function levelOrder(node, d, level = []) {
    if (node == null) {
      return level;
    }
    if (d === 1) {
      // level.push(node.value);
      level.push(node.value);
    } else if (d > 1) {
      levelOrder(node.left, d - 1, level);
      levelOrder(node.right, d - 1, level);
    }
    return level;
  }/**
 *     12 bfs vist each level
 *   /    \
 *  7       1
 * / \     / \
  9  null 10  5 
 / \      / \ / \
0   null--------null
Input: root = [12,7,1,9,null,10,5]
Output: [[12],[7,1],[9,10,5]]

dfs vist each side completley before other side


*/

const isBalanced = (tree) => {

  return minHeight(tree) >= maxHeight(tree) - 1 ? true : false;

}
  /*
    computes the largest root-to-leaf path,
    using 1-based counting.
  */
  function maxHeight(node) {
    if (node == null) {
      /* base case */
      return 0;
    }
    // let left = height(node.left);
    // let right = height(node.right);
  
    return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
  }

  function minHeight(node) {
    if (node == null) {
      /* base case */
      return 0;
    }
    // let left = height(node.left);
    // let right = height(node.right);
  
    return Math.min(minHeight(node.left), minHeight(node.right)) + 1;
  }

  let root = new TreeNode(12);
  // console.log(root)
root.left = new TreeNode(7);
root.left.left = new TreeNode(9);
// root.left.left.left = new TreeNode(0);

root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

// console.log(levelOrderBottom(root))
// console.log(levelOrder(root))
// console.log(maxHeight(root))
// console.log(minHeight(root))
// console.log(isBalanced(root))
console.log(levelOrderBottom(root))