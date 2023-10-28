function traverseMatrix(arr, currRow = 0, currCol = 0){
    let columnBoundary = currCol === arr.length +1;
    if (columnBoundary) return 0;
 
    let rowBound = currRow >=  arr.length;
    if (rowBound) return 1;
   
    //rm undefined
    if(arr[currRow][currCol] !== undefined || arr[currRow][currCol] === typeof Number){
        console.log(arr[currRow][currCol]);

    }
 
    // Recursive call to traverse the matrix
    // in the Horizontal direction
    if (traverseMatrix(arr, currRow, currCol + 1) === 1) return 1;
 
  
    return traverseMatrix(arr, currRow + 1, 0);
}
 
 

let arr0 = [ [ 1, 2, 3 ] ];

let arr1 = [ [ 1, 2, 3 ],
             [ 4, 5, 6 ]];

let arr2 = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]];

let arr3 = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ],
            [ 10, 11, 12 ]];
 
traverseMatrix(arr0)
// console.log()
// traverseMatrix(arr1)
// console.log()
// traverseMatrix(arr2)
// console.log()
// traverseMatrix(arr3)

// let arr3 = [1,1,2,2,3,3,6,6,6]


// let dup = new Set();

// for (let i = 0; i <arr3.length; i++) {
//     dup.add(arr3[i])


// }


// const result = arr4
// .filter( (array) =>  array < 6 )
// .reduce( (acc, curr) =>{
//     if(!acc.has(curr < 3)){
//         acc.Set(curr, new Set())
//     }
//     acc.get(curr).add(curr)
//     return curr
// });

// console.log(result);



console.log(String.fromCharCode("a").charCodeAt(4)               
);
const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be', 0))     // true



let array = [-2, -1]
array.map( (x ) => { return Math.abs(x ** 2)});

