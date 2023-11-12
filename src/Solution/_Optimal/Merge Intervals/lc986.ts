export const intervalIntersection = (
  firstList: number[][],
  secondList: number[][]
): number[][] => {
  const result: number[][] = [];

  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    const [start1, end1] = firstList[i];
    const [start2, end2] = secondList[j];

    // Check if there is an overlap between the intervals
    if (end1 >= start2 && end2 >= start1) {
      // Calculate the intersection interval
      const start = Math.max(start1, start2);
      const end = Math.min(end1, end2);

      // Add the intersection interval to the result
      result.push([start, end]);
    }

    // Move to the next interval with the smaller end value
    if (end1 < end2) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

// Example usage:
const firstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
const secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];

const result = intervalIntersection(firstList, secondList);
console.log(result);
