// try to apply memoization

let SimpArray = [1,2,3,4,10,11]

console.log(SimpArray);
let mysum = 0

for(let i = 0; i< SimpArray.length; i++){
    mysum += SimpArray[i] 

}
console.log(mysum)



// find out how to return just sum 
// SimpArray.forEach((item, index) => {
//     mysum += SimpArray[index] 

//     return console.log(mysum)

// }); 


