// 1 1 0 0           2
// 0 0 1 0           1
// 1 1 0 0           3
// 1 0 0 0  

// 3


const matrix = (matrix) =>{
  
    // let counter= {};
    
  let counts = {}
    
      
  for(let outerIndex = 0; outerIndex < matrix.length; outerIndex++ ){
        // console.log(matrix[0]);
        // let innerIndex = 0;
    // row scope
    // for(let i = 0; i<matrix.length; i++) {
    //   counts = matrix[i];
    // }
    
  
  
    
    for(let innerIndex = 0; innerIndex < matrix.length; innerIndex++ ){
      // console.log(matrix[outerIndex][innerIndex] === matrix[outerIndex + 1][innerIndex + 1]);
      
      const currentPosition = matrix[outerIndex][innerIndex];
    const nextRowPosition = matrix[outerIndex + 1];
    const nextColPosition = matrix[innerIndex + 1];

    console.log(nextRowPosition);
    console.log(nextColPosition);


    if (!(currentPosition in counts)) {

      counts[currentPosition] = 0; // appending array index current value to the object as a property with a intial value of 0
      // arrays are basically  at type of object where the index is like the property name and subarray is the key 
      // console.log(charFrequency)

    }
    
    counts[currentPosition] += 1;

    // console.log(counts)
   
        
        if(outerIndex + 1 === matrix.length ){
        break
        
        
        } else {
        
        if(matrix[outerIndex][innerIndex] === matrix[outerIndex + 1][innerIndex + 1] ){
          // let maxCluster = math.max()      
        }
        }
            // column scope
  
        //     counter= {
  //     row(0), col(0)
      
  //     }
          // console.log(matrix[1][0]);
  
  
  }
    
    
  
  
  }
  
  
  }
  
  
  let matrixVal = [[1,1,0,0],
                [0,0,1,0],
                [1,1,0,0],
                [1,0,0,0],
               ];
  
  console.log(matrix(matrixVal));
  // matrix(matrixVal);
  
  
  