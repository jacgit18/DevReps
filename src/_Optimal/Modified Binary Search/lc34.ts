// Given an array of integers nums sorted in non-decreasing order, find the starting and ending
//  position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.


// high  mid low
// let lo = 0;
// let hi = nums.length-1;
// let mid = lo + Math.floor((hi-lo+1)/2);
//     mid = Math.floor((low+high)/2);


const searchRange = (nums, target) =>{
    
};

//follows order of elements if it was in tree
console.log(searchRange([5,7,7,8,8,10], 8)) 
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))