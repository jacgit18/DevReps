

function insertApproachOne(intervals, newInterval) {
  let result = new Array();
  
  let i = 0;
  while(i < intervals.length && intervals[i][1] < newInterval[0]){ //intervals for far left
      result.push(intervals[i]);
      i++;
  }
  
  while( i < intervals.length && intervals[i][0] <= newInterval[1]){ //possible overlap and newInterval
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
      i++;
  }
  result.push(newInterval);
  
  while(i < intervals.length && intervals[i][0] > newInterval[1]){ //intervals for far right
      result.push(intervals[i]);
      i++;
  }
  
  return result;
}


console.log(insertApproachOne([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]
console.log(insertApproachOne([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4,8])); // [[1,2],[3,10],[12,16]]


function insertApproachTwo(intervals, newInterval) {
  let result = new Array();
  for(let i = 0; i < intervals.length; i++){
      if(newInterval[1] < intervals[i][0]){ //if the newInterval just doesnt over lap and can be added to far left
          result.push(newInterval);
          newInterval = intervals[i];    //since we already pushed the newInterval, we will make the current interval our new interval
      }else if(newInterval[0] > intervals[i][1]){ //if there is no overlap between two, and 
          result.push(intervals[i]);
      }else{
          newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
          newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      }
  }
  result.push(newInterval);
  
  return result;
};



console.log();


console.log(insertApproachTwo([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]
console.log(insertApproachTwo([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4,8])); // [[1,2],[3,10],[12,16]]

