// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104



export const merge = (intervals: number[][]): number[][] => {
  if (intervals.length <= 1) {
      return intervals;
  }

  // Sort intervals based on their start times
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

      // Check for overlap and merge intervals
      if (currentInterval[0] <= lastMergedInterval[1]) {
          lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
          mergedIntervals.push(currentInterval);
      }
  }

  return mergedIntervals;
}

// Example usage:
const example1 = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
console.log(example1); // Output: [[1, 6], [8, 10], [15, 18]]

const example2 = merge([[1, 4], [4, 5]]);
console.log(example2); // Output: [[1, 5]]
