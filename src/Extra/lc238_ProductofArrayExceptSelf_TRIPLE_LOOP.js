// in the interview for this question they might want you to not divide so using 3 loops is a alternative and there may be others 

// try and apply Math method

let Thenums = [1,2,3,4];


const ProductofArray  = (nums) => {
    let MyN = nums.length;
    let Myleft = new Array(MyN);

    let Myright = new Array(MyN);
    let MyOutput = new Array(MyN);

    Myleft[0] = 1;
    // [1, 1, 2, 3]

    Myright[MyN -1] = 1;



// ...results in the same array as this
// let arr = Array(arrayLength)

// This has exactly the same effect
// let arr = []
// arr.length = arrayLength

// let arr = [42]       // Creates an array with only one element:
                     // the number 42.

// let arr = Array(42)  // Creates an array with no elements
                     // and arr.length set to 42.
                     //
                     // This is equivalent to:
// let arr = []
// arr.length = 42


   
console.log("Forward ");

for (let i = 1; i < MyN; i++){
    // if(nums[j -1] ){

    // console.log(left.push(nums[j].length * nums[j -1] ));
    // }

    // console.log(Myleft[i] *= nums[i-1]);
    Myleft[i] = nums[i-1] * Myleft[i-1];
    console.log(Myleft)
}


console.log("Backwards ");

for (let i = MyN - 2; i >= 0; i--){
    Myright[i] = nums[i+1] * Myright[i+1];
    console.log(Myright)
}


for (let i = 0; i < MyN; i++){
 
        // let Newnum = []
        // let left = nums[i - 1];
        // let right = nums[i + 1];
        
        // if (nums[i] !== left && nums[i] !== right){
        //     let sum = left * right;
        //     Newnum.push(sum);
        //     console.log(Newnum)
        // }

        MyOutput[i] = Myleft[i] * Myright[i];
      

    
}
console.log(" ");

console.log(MyOutput);

}

ProductofArray(Thenums);
