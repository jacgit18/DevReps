
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
let SimpNum = [2,2,1];
let SimpNum2 = [4,1,2,1,2];
let SimpNum3 = [1];


// use hashset
const singleNumber = (nums) => {

    const hashTableObj = {};


    // for of use an iterable like an array and doesnt work with objects
    for (let num of nums){
        hashTableObj[num] = hashTableObj[num] + 1  || 1;

        }

        // for in focus on the index or property names of a object so the key or index for arrays of the key value pair
        for (let key in hashTableObj){
      
            if (hashTableObj[key] === 1){
                console.log(key);
            }
        }
       



    // second attempt //////////////////////////
// let currentposition = 0;
// let numbers = new Set();


    

//     for (let num of nums){
//         if (!numbers.has(num)){
//             numbers.add(num);
//             console.log(numbers)

//         }
//         else if(numbers.has(num)){
//             numbers.delete(num);
//             console.log(numbers)    
//             }

// }


    // First attempt //////////////////////////

// for (currentposition; currentposition < nums.length; currentposition++ ){

    //     if (num[currentposition] !== numbers[currentposition + 1] ){
    //         console.log(nums[currentposition]);

    //     }

    // }
  
}

    


singleNumber(SimpNum);
// console.log("");
singleNumber(SimpNum2);
// console.log("");
singleNumber(SimpNum3);