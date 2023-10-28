// Problem Statement #
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = (arr) =>{
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  let i = right;
  let num1; 
  let num2;
//   while(left < right){
    while(left <= right){

      num1 = Math.pow(arr[left], 2)
      num2 = Math.pow(arr[right], 2) 
      if(num1 > num2){
        //   arr[left] = num1
          result[i] = num1
          left++
      } else {
        //   arr[i] = num2
          result[i] = num2
          right--
      }
      i--
  }
//   return arr;
//   return arr.sort();
  return result;

}

// Squares: 0,1,4,4,9
// Squares: 0,1,0,4,9



console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

// Solution
// -----
// const n = arr.length;
// squares = Array(n).fill(0);
// let highestSquareIdx = n - 1;
// let left = 0,
//   right = n - 1;
// while (left <= right) {
//   let leftSquare = arr[left] * arr[left],
//     rightSquare = arr[right] * arr[right];
//   if (leftSquare > rightSquare) {
//     squares[highestSquareIdx] = leftSquare;
//     left += 1;
//   } else {
//     squares[highestSquareIdx] = rightSquare;
//     right -= 1;
//   }
//   highestSquareIdx -= 1;
// }

// return squares;

// -----

// Time complexity #
// The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.

// Space complexity #
// The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
