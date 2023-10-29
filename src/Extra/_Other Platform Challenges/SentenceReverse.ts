/*  
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting                                Algorithms that can be Leveraged or ruled out as you render down problem
|
V  Break down problem into English &  Identify I/O:
array of characters that form a word  and empty spaces after except for the last index 
 
 |  
V  Identify Constraints:
    0 ≤ arr.length ≤ 100

 |
V Define Naïve-Approach/Psuedocode:
    Visualize on Whiteboard 

|
V Convert approach into actionable steps with order in mind:
    Steps: start at the end of the array itertate and decretment until current index is the empty space 
    leverage array and string methods push, pop, reverse new array 
    
    hit condition for empty space
             >

|
V  Identify & Define Variables(to store reference manipulate) & Control Flow:
 empty results array 
 
 | 
V Code if stuck check past steps 

|
V Identify Runtime


Identify Control flow(Break, Continue) based on defined steps 
         TestCase: {

          Pre-Condition: if empty 

         Conditions: hitting empty space

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}
arr = ['0', '1', '2', ' ',
        '4', '5', '6', '7', ' ',
        '8', '9']
*/


// enqueue
// function reverseWords(arr) {
//     // your code goes here
//     let result = [];
//     let space = '  ';
//     let indexStartOfWord
//     console.log(arr.length -1) //index 14 = p for practice
    //const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  //var citrus = FRUITS.slice(end); => 
    // for(let end = arr.length - 1; end >= 0; end--)
   // const array1 = ['a', 'b', 'c', 'd', 'e'];
  
    //console.log(array1.copyWithin(0, 0, 5));  target and start should be same
   // console.log(array1.copyWithin(0, 5));
   // copyWithin(target, start)
  //copyWithin(target, start, end)
  // Array ["a", "b", "c", "d", "e"]
  //Array ["a", "b", "c", "d", "e"]
  
  //   for (let end = arr.length - 1; end >= 0; --end){
      
      
  //     if(arr[end] === space ){
      
        
        
  //     }
      
  //   }
  //   return result
  // }
         
         let arr1 = [
                  'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                  'm', 'a', 'k', 'e', 's', '  ',
                  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'
                 ];
  
        //  console.log(reverseWords(arr1))

       const dequeue = (arr) => {
          const length = arr.length;
          let result = [];
          let space = '  ';
          let indexStartOfWord;
          for (let i = 0; i < length; i++) {
            result.push(arr.pop());
          }
          
          return result;
        }

// console.log(dequeue(['hello', 'world', 'have']));
// console.log(dequeue(arr1))

const reverseWords = (arr) => {
  let Res = dequeue(arr1);

  const length = Res.length;
  let result = [];
  let newArray = [];
  let space = '  ';

    for (let start = 0; start < length; ++start){
      result.push(Res[start])
      if(Res[start+1] === space ){
        newArray.push(result)
        console.log(newArray)

      //       let end = start;
            // let end = start + 1 

            // console.log(Res[end]);// at p
            
            // console.log(result);            

        
      }
      
    }
    console.log(result)
// return result;
}
reverseWords(arr1)
// console.log(reverseWords(arr1))





        //  output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
        //   'm', 'a', 'k', 'e', 's', '  ',
        //   'p', 'e', 'r', 'f', 'e', 'c', 't' ]
  
