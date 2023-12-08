// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

// Example 1:


// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 8

import { TreeNode } from "../../util/BinaryTreeMaker";


export const generateTrees = (n: number): Array<TreeNode | null> =>{
        if (n === 0) {
            return [];
        }
        
        return generateTreesHelper(1, n);
    }
    
    function generateTreesHelper(start: number, end: number): Array<TreeNode | null> {
        const result: Array<TreeNode | null> = [];
    
        if (start > end) {
            result.push(null);
            return result;
        }
    
        for (let i = start; i <= end; i++) {
            const leftSubtrees = generateTreesHelper(start, i - 1);
            const rightSubtrees = generateTreesHelper(i + 1, end);
    
            for (const leftSubtree of leftSubtrees) {
                for (const rightSubtree of rightSubtrees) {
                    const root = new TreeNode(i);
                    root.left = leftSubtree;
                    root.right = rightSubtree;
                    result.push(root);
                }
            }
        }
    
        return result;
    }
    
    // Example usage:
    // const result1 = generateTrees(3);
    // console.log(result1);
    
    // const result2 = generateTrees(1);
    // console.log(result2);
    