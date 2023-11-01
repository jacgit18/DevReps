// Problem Statement #

// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

class Interval {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

const intervalIntersection = (firstList, secondList) => {
  const result = []
  let [intervalOneIdx, intervalTwoIdx] = [0, 0]

  while (intervalOneIdx < firstList.length && intervalTwoIdx < secondList.length) {
    const [firstIntStart, firstIntEnd] = firstList[intervalOneIdx]
    const [secondIntStart, secondIntEnd] = secondList[intervalTwoIdx]

    let firstCompare = firstIntStart >= secondIntStart && firstIntStart <= secondIntEnd
    let secondCompare = secondIntStart >= firstIntStart && secondIntStart <= firstIntEnd
    // if first list's ith and second list's jth intervals intersect, add the intersection to the result
    if (firstCompare || secondCompare) {
      result.push([Math.max(firstIntStart, secondIntStart), Math.min(firstIntEnd, secondIntEnd)])
    }
    // if first interval is ended before second interval, move to the next interval of the first list
    if (firstIntEnd < secondIntEnd) {
      ++intervalOneIdx
    } else {
      // if the second interval is ended before the first interval, move to the next interval of the second list
      ++intervalTwoIdx
    }
  }
  return result

  // return result;
}

let firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
]

let secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
]

console.log(intervalIntersection(firstList, secondList))

// Solution
// -----
function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
    a_overlaps_b =
      intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end

    // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
    b_overlaps_a =
      intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push(
        new Interval(
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end),
        ),
      )
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1
    } else {
      j += 1
    }
  }

  return result
}

let firstListOne = [
  new Interval(0, 2),
  new Interval(5, 10),
  new Interval(13, 23),
  new Interval(13, 23),
]
let secondListTwo = [
  new Interval(1, 5),
  new Interval(8, 12),
  new Interval(15, 24),
  new Interval(25, 26),
]

console.log(merge(firstListOne, secondListTwo))

// -----

// Time complexity #
// As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

// Space complexity #
// Ignoring the space needed for the result list, the algorithm runs in constant space O(1).
