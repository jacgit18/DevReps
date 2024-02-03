// Pairs of Songs With Total Durations Divisible by 60

// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.



// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60


// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.


// Constraints:

// 1 <= time.length <= 6 * 104
// 1 <= time[i] <= 500

// VERIFIED PASSING SOLUTION NO LOCAL TEST

const numPairsDivisibleBy60BruteForce = (time: number[]): number => {
  let count = 0;

  for (let start = 0; start < time.length; start++) {
      for (let secondStart = start + 1; secondStart < time.length; secondStart++) {
          if ((time[start] + time[secondStart]) % 60 === 0) {
              count++;
          }
      }
  }

  return count;
}



const numPairsDivisibleBy60NaiveImp = (time: number[]): number => {
  return  0
}

const numPairsDivisibleBy60NaiveDec = (time: number[]): number => {
  return  0

}

const numPairsDivisibleBy60Optimal = (time: number[]): number => {
  let count = 0;
  const remainderMap = new Map<number, number>();

  for (const duration of time) {
      const complement = (60 - (duration % 60)) % 60;

      if (remainderMap.has(complement)) {
          count += remainderMap.get(complement) || 0;
      }

      remainderMap.set(duration % 60, (remainderMap.get(duration % 60) || 0) + 1);
  }

  return count;
}


export const numPairsDivisibleBy60 = {
  numPairsDivisibleBy60BruteForce,
  numPairsDivisibleBy60NaiveImp,
  numPairsDivisibleBy60NaiveDec,
  numPairsDivisibleBy60Optimal
}


// Example usage:
const example1 = numPairsDivisibleBy60.numPairsDivisibleBy60BruteForce([30, 20, 150, 100, 40]);
console.log(example1);  // Output: 3

const example2 = numPairsDivisibleBy60.numPairsDivisibleBy60Optimal([60, 60, 60]);
console.log(example2);  // Output: 3

