const treeGrower = require('../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview')
const tree = new treeGrower();

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(tree1 , tree2) {
    if (root == null) return true;
    
   
};




let leaf = tree.ArrayBinaryTreeDeserialize([1,2,3]);
let leaf2 = tree.ArrayBinaryTreeDeserialize([1,2,3]);

let leaf3 = tree.ArrayBinaryTreeDeserialize([1,2]);
let leaf4 = tree.ArrayBinaryTreeDeserialize([1,null,2]);


let leaf5 = tree.ArrayBinaryTreeDeserialize([1,2,1]);
let leaf6 = tree.ArrayBinaryTreeDeserialize([1,1,2]);

console.log(isSameTree(leaf,leaf2));
console.log(isSameTree(leaf3, leaf4));
console.log(isSameTree(leaf5,leaf6));







