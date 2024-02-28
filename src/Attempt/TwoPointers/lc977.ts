// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

const BruteForce = (nums: number[]): number[] => {
  return [0]
}

const numSquare = (nums: number[]): number[] => {
    // square array values in place mutation
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] = Math.pow(nums[i], 2);
  // }

  // return nums
  return nums.map(num => Math.pow(num, 2));
}



const TwoPointer = (nums: number[]): number[] => {

    // check for empty array
    if (nums.length === 0) return [];
  
    nums = numSquare(nums)

     // inplace sort array in non-decreasing order using Two-Pointer
    let left = 0;
    let right = nums.length - 1;

    // array of same size undefined values
    // const result = new Array(nums.length);
    const result = [];

    // let index = nums.length - 1;


    while (left <= right) {
        if (nums[left] > nums[right]) {
            // result[index] = nums[left];
            // --index
            result.unshift(nums[left])
            // [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        } else {
            // result[index] = nums[right];
            result.unshift(nums[right])
            // --index
            // [nums[right], nums[left]] = [nums[left], nums[right]]

            --right
        }
    }

    return result;
};


const TwoPointerAlt = (nums: number[]): number[] => {
  nums = nums.map(num => Math.pow(num, 2));

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
      if (nums[left] > nums[right]) {
          [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      right--; // Decrement right separately
  }
  return nums;
};

const NaiveImp = (nums: number[]): number[] => {
  return [0]
}

const NaiveDec = (nums: number[]): number[] => {
  return [0]
}

const Optimal = (nums: number[]): number[] => {
  return [0]
}

// Squares: 0,1,4,4,9
// Squares: 0,1,0,4,9

// console.log(`Squares: ${sortedSquares([-2, -1, 0, 2, 3])}`)
// console.log(`Squares: ${sortedSquares([-3, -1, 0, 1, 2])}`)

export const sortedSquares = {
  BruteForce,
  TwoPointer,
  TwoPointerAlt,
  NaiveImp,
  NaiveDec,
  Optimal,
}

console.log(sortedSquares.TwoPointer([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares.TwoPointer([-7,-3,2,3,11])) // [4,9,9,49,121]