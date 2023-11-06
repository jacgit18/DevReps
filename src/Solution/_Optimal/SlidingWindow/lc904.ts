// Problem Statement #

// Given an array of characters where each character represents a fruit tree,
//  you are given two baskets, and your goal is to put maximum number of fruits
//  in each basket. The only restriction is that each basket can have only one
//  type of fruit. You can start with any tree, but you can’t skip a tree once
//  you have started. You will pick one fruit from each tree until you cannot,
// i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

/**
 *
 * Input: array of characters where each character represents a fruit tree.
 *
 * we have two baskets and we must put the maximum number of fruit in each baskets.
 * You can start with any tree, butyou can’t skip a tree once you have started.
 * You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type
 *
 * Output: he maximum number of fruits in both baskets
 *
 * Naive Brute Force Approach
 * ---------------
 * Variables:
 *
 * */

const fruits_into_baskets = (fruits) => {
  let startPoint = 0
  let endPoint = 0
  let fruitBucket = new Map()
  let currentCount = 0
  let maxCount = 0

  while (startPoint < fruits.length && endPoint < fruits.length) {
    const fruit = fruits[endPoint]
    if (fruitBucket.has(fruit)) {
      fruitBucket.set(fruit, fruitBucket.get(fruit) + 1)
      endPoint++
      currentCount++
    } else if (fruitBucket.size < 2) {
      fruitBucket.set(fruit, 1)
      endPoint++
      currentCount++
    } else {
      const fruitToBeRemoved = fruits[startPoint]
      const count = fruitBucket.get(fruitToBeRemoved)

      if (count === 1) {
        fruitBucket.delete(fruitToBeRemoved)
      } else {
        fruitBucket.set(fruitToBeRemoved, count - 1)
      }
      currentCount--
      startPoint++
    }

    maxCount = Math.max(currentCount, maxCount)
  }

  return maxCount
}

console.log(`Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`)

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "X", "Y", "C", "A", "A", "A"])}`,
)

console.log(`Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "B", "B", "C"])}`)

/**
 *  Optimal Approach
 * -----------------
 *  Variables:
 *
 *
 */

try {
  module.exports = fruits_into_baskets
} catch (error) {}

// let windowStart = 0,
// maxLength = 0,
// fruitFrequency = {};

// try to extend the range [windowStart, windowEnd]
// for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// const rightFruit = fruits[windowEnd];
// if (!(rightFruit in fruitFrequency)) {
//   fruitFrequency[rightFruit] = 0;
// }
// fruitFrequency[rightFruit] += 1;

// shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// while (Object.keys(fruitFrequency).length > 2) {
//   const leftFruit = fruits[windowStart];
//   fruitFrequency[leftFruit] -= 1;
//   if (fruitFrequency[leftFruit] === 0) {
//     delete fruitFrequency[leftFruit];
//   }
//   windowStart += 1; // shrink the window
// }
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
