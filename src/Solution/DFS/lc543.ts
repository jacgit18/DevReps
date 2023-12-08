// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

import { TreeNode } from "../../util/BinaryTreeMaker";
 
class Result {
    diameter: number;

    constructor(diameter: number) {
        this.diameter = diameter;
    }
}

export const diameterOfBinaryTree = (root: TreeNode | null): number =>{
        const result = new Result(0);
        calculateHeight(root, result);
        return result.diameter;
    }
    
    function calculateHeight(node: TreeNode | null, result: Result): number {
        if (!node) {
            return 0;
        }
    
        // Calculate the height of the left and right subtrees
        const leftHeight = calculateHeight(node.left, result);
        const rightHeight = calculateHeight(node.right, result);
    
        // Update the result with the maximum diameter encountered so far
        result.diameter = Math.max(result.diameter, leftHeight + rightHeight);
    
        // Return the height of the subtree rooted at the current node
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    // Example usage:
    const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
    console.log(diameterOfBinaryTree(root1));  // Output: 3
    
    const root2 = new TreeNode(1, new TreeNode(2));
    console.log(diameterOfBinaryTree(root2));  // Output: 1
    