/*  
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting                                Algorithms that can be Leveraged or ruled out as you render down problem
|
V  Break down problem into English &  Identify I/O: 
input: [2, 7, 4, 0, 9, 5, 1, 3], interger / returnning an array

add 4 element in the array that equals number s



 
 |  
V  Identify Constraints: no negative nums but duplicates 
1 ≤ arr.length ≤ 100

    
 |
V Define Naïve-Approach/Psuedocode:
    Visualize on Whiteboard 
    
    sliding window  of size 4(3 index)

|
V Convert approach into actionable steps with order in mind:
    Steps:
             > let sum 0 add subtract from that vairble as we compare total whithin range and adujust window 

|
V  Identify & Define Variables(to store reference manipulate) & Control Flow:
 
 
 | 
V Code if stuck check past steps 

|
V Identify Runtime


Identify Control flow(Break, Continue) based on defined steps 
         TestCase: {

          Pre-Condition: check if empty 

         Conditions:

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}      
*/

function findArrayQuadruplet(arr, s) {
  
    arr.sort()
    // [2, 7, 4, 0, 9, 5, 1, 3]
    // 0 1 2 3 4 5 7 9 
    
    if(arr.length < 1){
     return arr
    }
    
    let sum = 0;
    let sumResult = []
    let right = arr.length
    
    
// r = s - (a[i] + a[j])  
    // low = j+1, high = n-1
    // while(low < high){
    /*1 (low < high): a[low] + a[high] < r -> low++
    2 (low > high): a[low] + a[high] > r -> high--
    3 else return (a[i],a[j]),a[low],a[high]*/
//   }
    
    for(let left = 0; left < arr.length; ++left){
     
      
      if(arr[left + 1]){
        sum += arr[left]
        sumResult.push(arr[left])
        
      }
      
         if(arr[right + 1]){
        sum += arr[left]
        sumResult.push(arr[left])
        
      }
      
      
    }
    
    return sumResult
    
    
  }
  
  
  console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20) )
  
  
  
  
  
  
//   function findArrayQuadruplet(arr, s):
//       n = arr.length
  
//       # if there are fewer than 4 items in arr, by
//       # definition no quadruplet exists whose sum is s
//       if (n < 4):
//           return []
  
//       # sort arr in an ascending order
//       arr.sort()
  
//       for i from 0 to n - 4:
//           for j from i + 1 to n - 3:
//               # r stores the complementing sum
//               r = s - (arr[i] + arr[j])
  
//               # check for sum r in subarray arr[j+1…n-1]
//               low = j + 1, high = n - 1;
  
//               while (low < high):
//                   if (arr[low] + arr[high] < r):
//                       low++
  
//                   else if (arr[low] + arr[high] > r):
//                       high--
  
//                   # quadruplet with given sum found
//                   else:
//                       return [arr[i], arr[j], arr[low], arr[high]]
  
//       return []
  
  
  
  