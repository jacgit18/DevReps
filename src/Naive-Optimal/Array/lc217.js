let theNum = [1, 2, 3, 1];


const containsDuplicate = (nums) => {

    // 0(1)
    const unique = new Set(nums);
    // console.log(unique) // 123 = 3
    // console.log(nums) // 0123 = 4 


    if(unique.size === nums.length) return false; // only false if no duplicates exist
    return true;



// let numbers = new Set();
// for (let num of  nums){
//     console.log(!numbers.has(num))
//         if (!numbers.has(num)){
            // adding numbers not in set from given array
//             console.log(numbers.add(num))
    
//         }
//         else {
//             return true;
//         }

// }
// return false;
}

console.log(containsDuplicate(theNum))

try {
    module.exports = containsDuplicate;
  
  } catch (error) {

  }


    