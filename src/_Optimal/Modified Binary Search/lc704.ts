// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function 
// to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


// Applys to tree,s and Array


const search = (nums, target) =>{

    let lo = 0, hi = nums.length-1;
    // console.log(`HI ${nums.length}`)
    while (lo < hi) {
        // when even num you can set mid left lower or right upper mid
        // let mid = lo + Math.floor((hi - lo) / 2); // left/lower mid

        let mid = lo + Math.floor((hi - lo + 1) / 2); // right/lower midupper


        // identify which side of the boundary does the target belong
        if (target < nums[mid]) {
            hi = mid - 1 // index
        } else {
            lo = mid; // index
        }
    }
    return nums[lo]==target?lo:-1;
};

console.log(search([-1,0,3,5,9,12], 9)); // output index were 9 is  so 4
console.log(search([-1,0,3,5,9,12], 2)); // output no 2 so return - 1


