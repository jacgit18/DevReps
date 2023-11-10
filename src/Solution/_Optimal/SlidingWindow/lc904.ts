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


export const fruits_into_baskets = (fruits: string[]): number => {
  let startPoint = 0;
  let endPoint = 0;
  const fruitBucket = new Map<string, number>();
  let currentCount = 0;
  let maxCount = 0;

  while (startPoint < fruits.length && endPoint < fruits.length) {
    const fruit = fruits[endPoint];

    if (fruitBucket.has(fruit)) {
      fruitBucket.set(fruit, fruitBucket.get(fruit)! + 1);
      endPoint++;
      currentCount++;
    } else if (fruitBucket.size < 2) {
      fruitBucket.set(fruit, 1);
      endPoint++;
      currentCount++;
    } else {
      const fruitToBeRemoved = fruits[startPoint];
      const count = fruitBucket.get(fruitToBeRemoved)!;

      if (count === 1) {
        fruitBucket.delete(fruitToBeRemoved);
      } else {
        fruitBucket.set(fruitToBeRemoved, count - 1);
      }

      currentCount--;
      startPoint++;
    }

    maxCount = Math.max(currentCount, maxCount);
  }

  return maxCount;
};

console.log(`Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`)

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "X", "Y", "C", "A", "A", "A"])}`,
)

console.log(`Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "B", "B", "C"])}`)




