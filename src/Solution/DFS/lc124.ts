// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000

import { TreeNode } from "../../util/BinaryTreeMaker";


  
class Result {
    maxPathSum: number;

    constructor(maxPathSum: number) {
        this.maxPathSum = maxPathSum;
    }
}


export const maxPathSum = (root: TreeNode | null): number =>{
        const result = new Result(Number.MIN_SAFE_INTEGER);
        dfs(root, result);
        return result.maxPathSum;
    }
    
    function dfs(node: TreeNode | null, result: Result): number {
        if (!node) {
            return 0;
        }
    
        // Calculate the maximum path sum for the left and right subtrees
        const leftMax = Math.max(0, dfs(node.left, result));
        const rightMax = Math.max(0, dfs(node.right, result));
    
        // Calculate the maximum path sum that includes the current node
        const currentMax = node.value + leftMax + rightMax;
    
        // Update the result with the maximum path sum encountered so far
        result.maxPathSum = Math.max(result.maxPathSum, currentMax);
    
        // Return the maximum path sum for the subtree rooted at the current node
        return node.value + Math.max(leftMax, rightMax);
    }
    
    // Example usage:
    // const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    // console.log(maxPathSum(root1));  // Output: 6
    
    // const root2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    // console.log(maxPathSum(root2));  // Output: 42
    