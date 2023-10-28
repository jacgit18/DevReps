/**
 * 
 * Input:
 * Output:
 * 
 * Naive Approach 
   ------------------------
   Vairiable:
   
*/
const myrob = () => {
    let cache={};
    return myrobDP = (nums,i) =>{
        // test cases
        if(i in cache){
            return cache[i];
        }
        else{
            // base case
             if(i<0) return 0;
             else{
                 cache[i]=Math.max(myrobDP(nums,i-2)+nums[i],myrobDP(nums,i-1));
                 return cache[i];
             }
        }
       
         
    }
}


let price = [1,2,3,1];

const myrobObj = myrob();

console.log(myrobObj(price,price.length -1))
// console.log(rob(price))

console.log(`\n ------- Edge Case -------- `);

console.log(` Case 01  ${myrobObj(price,price.length -1)}`)



/**
 * 
 * 
 * 
 * Optimal Approach 
   ------------------------
   Vairiable:
   
*/