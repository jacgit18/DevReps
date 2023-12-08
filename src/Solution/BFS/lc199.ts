// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]

// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

import { TreeNode } from "../../util/BinaryTreeMaker";

export const rightSideView = (root: TreeNode | null): number[] =>{
        const result: number[] = [];
    
        if (!root) {
            return result;
        }
    
        let currentLevel: TreeNode[] = [root];
    
        while (currentLevel.length > 0) {
            result.push(currentLevel[currentLevel.length - 1].value);
            const nextLevel: TreeNode[] = [];
    
            for (const node of currentLevel) {
                if (node.left) {
                    nextLevel.push(node.left);
                }
                if (node.right) {
                    nextLevel.push(node.right);
                }
            }
    
            currentLevel = nextLevel;
        }
    
        return result;
    }
    
    // Example usage:
    // const root1 = new TreeNode(1,
    //     new TreeNode(2, null, new TreeNode(5)),
    //     new TreeNode(3, null, new TreeNode(4))
    // );
    // console.log(rightSideView(root1));  // Output: [1, 3, 4]
    
    // const root2 = new TreeNode(1, null, new TreeNode(3));
    // console.log(rightSideView(root2));  // Output: [1, 3]
    
    // const root3 = null;
    // console.log(rightSideView(root3));  // Output: []
    