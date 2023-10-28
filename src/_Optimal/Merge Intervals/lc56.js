// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a 
// list that has only mutually exclusive intervals.

/**
 * Input: take in a array of objects 
 * 
 * before you loop sort the values 
 * 
 * loop through array of objects and check value range and compare
 * to other index to see if ranges overlap and merge together 
 * to create a new range
 * 
 * so for the first pair check which number is the lowest and highest
 * and set them to start and end and as we iterate update the start and end
 * if the lowest and highest value change
 * 
 * whats considered overlapping
 Something like [1,4] and [4,5] are considered overlapping since 4 = 4
 *  
 * Output: return the new array with the merged range
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  //pre condition
  if(intervals.length < 2){
      return intervals;
  }
  // ?
  intervals.sort((a, b) =>{
    // a.start - b.start
    a[0] - b[0]

  });

  const mergedIntervals = [];
  
  // let start = intervals[0].start;
  // let end =intervals[0].end ;
  // let [intervalOneIdx ,intervalTwoIdx] =[ 0, 0];

  // let start, end;
  let start = intervals[0][0];


  for (i = 0; i < intervals.length; i++) {
    // const interval = intervals[i];
    // const [start, end] = firstList[i];
    let end = intervals[i][1]

    // overlapping intervals, adjust the 'end
    if (start <= end){
            end = Math.max(end, end);

    }
     // non-overlapping interval, add the previous interval and reset
     else {
            mergedIntervals.push(start, end);
            start = start;
            end = end;
          }

        }

  // add the last interval
  mergedIntervals.push(start, end);

  return mergedIntervals;
};



// merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
// console.log([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]); // array of objects
// result = "";

// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)


// let merged_intervals = merge([new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)]);
// let merged_intervals2 = merge([new Interval(1, 4), new Interval(4, 5)]);

// let merged_intervals = merge([[1,3],[2,6],[8,10],[15,18]]);



// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)


// merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)


// console.log(merged_intervals)

// Time complexity #
// The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).


const mergeArray = function(intervals) {
  if (!intervals.length) return intervals
  // console.log(intervals)
  intervals.sort((a, b) => 
  a[0] !== b[0] ? 
  a[0] - b[0] 
  : a[1] - b[1])

/**[[2,6],[1,3],[8,10],[15,18]]
 * 
 * a: [1,3] > [8,10] > [8,10] > [15,18] > [15,18]
 *      3        7      4         12         8
 * b: [2, 6] > [1,3] > [2, 6] > [2,6] >  [8,10] 
 */


  // intervals.sort((a, b) => {
  //   if(a[0] !== b[0]){
  //     a[0] - b[0]
  //   } 
  //     a[1] - b[1]
    
  
  // })
  

  var end = intervals[0]
  var res = [end]
  for (var start of intervals) {
    if (start[0] <= end[1]) {
      end[1] = Math.max(end[1], start[1])
    } else {
      res.push(start)
      end = start
    }
  }
  return res
};


let merged_intervalsArray = mergeArray([[1,3],[2,6],[8,10],[15,18]]);
// let merged_intervalsArray = mergeArray([[2,6],[1,3],[8,10],[15,18]]);

let merged_intervalsArray2 = mergeArray([[1,4],[4,5]]);

// console.log(merged_intervalsArray)
// console.log(merged_intervalsArray2)


// console.log(merged_intervals)
// console.log(merged_intervals2)



var mergeONE = function(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < intervals.length; i++) {
  
  const current = intervals[i];
  const next = intervals[i + 1];

  if (i !== intervals.length - 1 && current[1] >= next[0]) {
    current[1] = Math.max(current[1], next[1]);
    intervals.splice(i, 2, current);
    i--;
  }
}

return intervals;
  
  
};

console.log('test',mergeONE([[1,3],[2,6],[8,10],[15,18]]))
console.log('test',mergeONE([[1,4],[4,5]]))


// console.log('test2',merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log('test2',merge([[1,4],[4,5]]))
