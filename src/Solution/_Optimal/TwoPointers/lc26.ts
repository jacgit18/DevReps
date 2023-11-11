// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space;
// after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

/**
 *Input: array and key
 *Output: array length after removal of duplicates


 intialize a vairiable to stor the nextElement 

 then we need to loop over the array length then check if then check 
 the current index is not equal to the key if true then
 set the array index to the nextElement to the current index and
 add 1 to the next element and return the next element


 */
export const remove_element=(arr: number[], key: number): number =>{
  let nextElement = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== key) {
      arr[nextElement] = arr[index];
      nextElement += 1;
    }
  }

  return nextElement;
}

console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
