// You are given an array of k linked-lists lists, each linked-list is
// sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

const mergeKLists = (lists) => {}

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ]),
)
// Output: [1,1,2,3,4,4,5,6]
console.log(mergeKLists([]))
// []
console.log(mergeKLists([[]]))
// []
