const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  // const left = array.slice(0, 1 + middle ) gets one more then right
  const right = array.slice(middle)
  // const right = array.slice(middle + 1)
  console.log('left:', left);
  console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



console.time("merge");
console.log(mergeSort(numbers));
console.timeEnd("merge");
