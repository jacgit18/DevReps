function absSort(arr) {
    // find the absolute value first as we compare 
      
    // if array is empty return arr
      
      let res = [];
    //   let right = arr.length;
      
      arr.sort((left = 0, right = arr.length) =>{
       
        
        if(Math.abs(arr[left]) < Math.abs(arr[right])){
          if(arr[left] < arr[right]){
            res.push(arr[left]);
        }
        res.push(arr[right]);

      }
      res.push(arr[right]);
    
        
        
      })
        
             console.log(res)
    
     // for(let start = 0; start < )
    
    
    }
    
//  absSort([2, -7, -2, -2, 0])



let myArray = [1]

console.log(myArray?.length ? true : false)