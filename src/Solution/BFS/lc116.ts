// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:


// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000
 

// Follow-up:

// You may only use constant extra space.
// The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.



class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;

    constructor(val: number, left?: Node | null, right?: Node | null, next?: Node | null) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
        this.next = next || null;
    }
}

    
export const connectOne =(root: Node | null): Node | null =>{

        if (!root) {
            return null;
        }
    
        let levelStart = root;
    
        while (levelStart.left) {
            let current: Node | null = levelStart;
    
            while (current) {
                current.left!.next = current.right;
    
                if (current.next) {
                    current.right!.next = current.next.left;
                }
    
                current = current.next;
            }
    
            levelStart = levelStart.left;
        }
    
        return root;
    }
    
    // Example usage:
    // const root = new Node(1,
    //     new Node(2, new Node(4), new Node(5)),
    //     new Node(3, new Node(6), new Node(7))
    // );
    
    // connectOne(root);
    
    // // The next pointers are populated. You can access them like this:
    // console.log(root.left?.next?.val); // Output: 3
    // console.log(root.left?.left?.next?.val); // Output: 5
    