
// let SimpArray = [ 
//     [3], 
//     [ 11, 2, 4 ], 
//     [ 4, 5, 6 ], 
//     [ 10, 8, -12 ] 
// ]

// nested array is basicallly  a multi dimensional array


// console.log(TheArray);
// let LeftToRight = 0;
// let RightToLeft = 0;

// let rows = SimpArray.length;
// let col = SimpArray[0].length;

// let i = 0;
// let j = 0;
// let k = 0;

// let l = SimpArray.length - 1;

// while (i < rows && j < col && k < rows && l >= 0){
//     LeftToRight += SimpArray[i][j];
//     RightToLeft += SimpArray[k][l];
//     i++;
//     j++;
//     k++;
//     l--;
// }
//   console.log(Math.abs(LeftToRight - RightToLeft));


// let SimpArray = [ 
//     [3], 
//     [ 11, 2, 4 ], 
//     [ 4, 5, 6 ], 
//     [ 10, 8, -12 ] 
// ]

let SimpArray = [ 
    [ 11, 2, 4 ], 
    [ 4, 5, 6 ], 
    [ 10, 8, -12 ] 
]

let diagDiff= (matrix) => {
    let length = matrix.length;
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < length; i++ ){
        // if(TheArray[i].length <= 1 ){
            // if(TheArray[i].length !== 1 ){

            sum1 += matrix[i][i];
            sum2 += matrix[length - 1 - i][i];        }
    // }
    console.log(Math.abs(sum1 - sum2));
}



diagDiff(SimpArray);