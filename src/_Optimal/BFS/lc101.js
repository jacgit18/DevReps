const treeGrower = require('../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview')
const tree = new treeGrower();

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


// comparing pairs of subtrees
// const BT = require("../../_DataStructuresClasses/BinaryTree");
// const BinarySearchTree = require("../../_DataStructuresClasses/BinarySearchTree");

// const myBT = new BT();
// const myBST = new BinarySearchTree();

// bfs mor efficient

var isSymmetric = function(root) {
    if (root == null) return true;
    
    return subTreeSymmetryChecker(root.left, root.right);
};

function subTreeSymmetryChecker(left, right) {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty
    if (left.val !== right.val) return false; // If the values dont match up
    
	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return subTreeSymmetryChecker(left.left, right.right) &&
    subTreeSymmetryChecker(left.right, right.left);
}

// let leaf = tree.ArrayTreeDeserialize([1,2,2,3,4,4,3]);
// let leaf = tree.ArrayTreeDeserialize([1,2,2,null,3,null,3]);

let leaf = tree.ArrayBinaryTreeDeserialize([1,2,2,3,4,4,3]);
let leaf2 = tree.ArrayBinaryTreeDeserialize([1,2,2,null,3,null,3]);


console.log(isSymmetric(leaf));
console.log(isSymmetric(leaf2));


// console.log(isSymmetric([1,2,2,3,4,4,3]));

// [1,2,2,3,4,4,3]
// [1,2,2,null,3,null,3]

// ArrayBinaryTreeDeserialize















// myBT.add(1);
// myBT.add(2);
// myBT.add(2);
// myBT.add(3);
// myBT.add(4);
// myBT.add(4);
// myBT.add(3);
// console.log(myBT.isBalanced());
// console.log(myBT.inOrder());
// console.log(myBT);



// myBST.insert(1);
// myBST.insert(2);
// myBST.insert(2);
// myBST.insert(3);
// myBST.insert(4);
// myBST.insert(4);
// myBST.insert(3);
// console.log(myBST.root.right)


// var isSymmetric = function(root) {
//     if(root == null){
//         return true;
//     }
    
//     return isMirror(root.left, root.right)
    

    
// };


// let isMirror = (subtreeOne, subtreeTwo) =>{
//     if (subtreeOne === null || subtreeTwo === null) {
//         return subtreeOne === subtreeTwo;
//     }
    
//     if (subtreeOne.val !== subtreeTwo.val) {
//         return false;
//     }
    
//     return isMirror(subtreeOne.left, subtreeTwo.right) && isMirror(subtreeOne.right, subtreeTwo.left);
    
// }