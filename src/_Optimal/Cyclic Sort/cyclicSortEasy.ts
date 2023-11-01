// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’
// based on their creation sequence. This means that the object
// with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and
//  without any extra space. For simplicity, let’s assume we are passed an integer array containing
//  only the sequence numbers, though each number is actually an object.

/**
 * Input: Unorder array
 * Output: Sorted array
 *
 * while current index less then array length if
 * current index not equal to index
 *
 * next index  equals current index - 1
 *
 * then inddex  equals next index
 *
 * else iterate over array and return sorted array
 */

// using pointers sort for when you no were things are espicially for a range of numbers

// const log = (preString, arg, postString) => {
//   preString?.length ||postString?.length ||  preString?.length && postString?.length
//   ?  console.log(`${preString + arg + postString}`)
//   : false

// }

// const log = (preString="", arg, postString="") => {
//   preString?.length ||postString?.length
//   ?   console.log(`${preString + arg + postString}`)
//   : false

// }

const log = (preString = "", arg = "", postString = "") => {
  console.log(`${preString} ${arg} ${postString} `)
}

const info = (arg) => console.info(arg)
const warn = (arg) => console.warn(arg)
const error = (arg) => console.error(arg)
const table = (arg) => console.table(arg)

const cyclic_sort = function (nums) {
  let index = 0
  const ArrayLength = nums.length

  while (index < ArrayLength) {
    const currentSubarray = nums[index]
    const decrementedSubarray = currentSubarray - 1

    // if (decrementedSubarray != index){
    if (currentSubarray != nums[decrementedSubarray]) {
      // let nextIndex = decrementedSubarray;

      // nums[index] = nums[nextIndex];
      // nums[nextIndex] = x;
      // [ nums[nextIndex], nums[index]] = [currentSubarray, nums[nextIndex]]; // swap indexs
      ;[nums[decrementedSubarray], nums[index]] = [nums[index], nums[decrementedSubarray]] // swap indexs
    } else {
      ++index
    }
  }

  return nums
}

log(cyclic_sort([3, 1, 5, 4, 2]))
log(cyclic_sort([2, 6, 4, 3, 1, 5]))
log(cyclic_sort([1, 5, 6, 4, 3, 2]))
