// We are given a list schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

// Example 1:

// Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
// Output: [[3,4]]
// Explanation:
// There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [3, 4], [10, inf].
// We discard any intervals that contain inf as they aren't finite.

// Example 2:

// Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
// Output: [[5,6],[7,9]]

// (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined.)

// Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

// Note:

// schedule and schedule[i] are lists with lengths in range [1, 50].
// 0 <= schedule[i].start < schedule[i].end <= 10^8.
// NOTE: input types have been changed on June 17, 2019. Please reset to default code definition to get new method signature.

class Interval {
  start: number
  end: number

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }
}

const employeeFreeTimeBruteForce = (schedule: Interval[][]): Interval[] => {
  return []
}

const employeeFreeTimeNaiveImp = (schedule: Interval[][]): Interval[] => {
  return []
}

const employeeFreeTimeNaiveDec = (schedule: Interval[][]): Interval[] => {
  return []
}

const employeeFreeTimeOptimal = (schedule: Interval[][]): Interval[] => {
  return []
}

// Example usage:
// const schedule1: Interval[][] = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]];
// console.log(employeeFreeTime(schedule1));

// const schedule2: Interval[][] = [[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]];
// console.log(employeeFreeTime(schedule2));

export const employeeFreeTime = {
  employeeFreeTimeBruteForce,
  employeeFreeTimeNaiveImp,
  employeeFreeTimeNaiveDec,
  employeeFreeTimeOptimal,
}
