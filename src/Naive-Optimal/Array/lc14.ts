// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
/* 

 Pseudocode: 
 iterate through sub array and compare substring characters until not equal return longest mathing substring
 
 let letterCount= {} or map
 
 for loop to array length ++ 
 
 each word are different lengths 
 
 we can check for element with shortest length 
 
 join letters
 
 convert to matrix and split words into letters check which letters overlap
 
 
 
 Steps:
 1.iterate through array
 2.iterate substring of array 
 
 
 DataStructure&Algo to Leverage & Rule out:
 set maybe object

*/

// const longestCommonPrefix = (strPre) =>{
 
//     const testCaseOne = strPre.length <= 1;
  
//       if(testCaseOne){
//           console.log("empty")
  
//         }
    
  
//        let neray = [];
  
  
//     for(let outerIndex = 0; i < strPre.length; ++i){
//          neray.push(strPre[i].split(''));
//     }
//     let stringPre;
  
  
//     for(let innerIndex = 0; j < neray.length; ++j){
//      for(let k = 0; k < neray.length; ++k){
       
//        if(neray[k][j] === neray[k][j+1] === neray[k][j+2]){
//              stringPre += neray[k][j]
//        }
//             console.log(stringPre)
  
   
//     }  
//     }  
    
    
  
    
//     return stringPre
//     }


    const longestCommonPrefix = (strs) =>{
 
        let prefix = '';
         
         for (let i = 0; i <= strs[0].length; i++) {
             const nextPrefix = strs[0].slice(0, i); // compare flower expanding slice to others string
             
             if (strs.every(str => str.slice(0, i) === nextPrefix)) {
                 prefix = nextPrefix;
             } else {
                 break;
             }
         }
         
         return prefix;
       }
  
  
  // Input: 
  let edgeCaseOne = ["flower","flow","flight"];
  let edgeCaseTwo = ["dog","racecar","car"];
  
  console.log(`Edge case one ${longestCommonPrefix(edgeCaseOne)}`)// Output: "fl"
  console.log(`Edge case two ${longestCommonPrefix(edgeCaseTwo)}`)// Output: ""
  
  
  