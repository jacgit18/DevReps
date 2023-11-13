/**
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
import { TreeNode } from "../../../util/BinaryTreeMaker";


// depth tracking
 const levelOrderBottom = (root: TreeNode | null): number[][] => {
  if (root === null) {
    return [];
  }
  let h = maxHeight(root);
  let results: number[][] = [];
  let depth = 1;
  for (depth; depth <= h; depth++) {
    results.push(levelOrder(root, depth));
  }

  return results;
};

 const levelOrder = (node: TreeNode | null, d: number, level: number[] = []): number[] =>{
  if (node === null) {
    return level;
  }
  if (d === 1) {
    level.push(node.value);
  } else if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}




 const isBalanced = (tree: TreeNode | null): boolean => {
  return minHeight(tree) >= maxHeight(tree) - 1 ? true : false;
};



 function maxHeight(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }
  return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
}



 function minHeight(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }
  return Math.min(minHeight(node.left), minHeight(node.right)) + 1;
}


export const RecursiveBFSFunc = {
  levelOrderBottom, 
  isBalanced, 
  maxHeight, 
  minHeight
}



let root = new TreeNode(12);
root.left = new TreeNode(7);
root.left.left = new TreeNode(9);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(levelOrderBottom(root));
