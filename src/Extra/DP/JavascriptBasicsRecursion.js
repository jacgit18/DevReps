
    // infinite loop
    const recursionRecallMethod = () => {
        let mycondition = true;
        let nextcondition = 4;
        let otherCondition = 4;

        let doThis = console.log(`if(?) my condition ${mycondition} print this`);
        let doThat = console.log(`if(?) my condition ${nextcondition} greater than do this`);

        // regular if else
        if(mycondition){
            doThis
        }else if(nextconditiom >0 && otherCondition > 0 ){
            doThat
        }else {
           return recursionRecallMethod(); 
        }

       let mycondition1 = false;
        let nextcondition1 = 5;
        let otherCondition1 = 5;

        
        // base case with ternary operator if else
       return mycondition1 ? console.log(`if(?) my condition ${mycondition1} print this`)
        : nextcondition1 > 0 && otherCondition1 > 0 ? console.log(`if(?) my condition ${nextcondition1} greater than do this`)
        // : nextcondition > 0 ? doThat
        : recursionRecallMethod();


        


    }

recursionRecallMethod(); // Recursion is when a thing is defined in terms of itself


// for factorial recursive process might not be the best because it delays the computaion until the end and you wont get anything if you stop in the middle
const factorial = (n) => {
    return n == 1 || n == 0 ? 1
    : n * factorial(n-1);
}



console.time('recTime');

console.log(factorial(5));

console.timeEnd("recTime");


// so you do iterative process is better in this case becuase your the iterative process is computing when the stae can be described by 
// a fixed number of things. 

// the intial state is return iter(n, 1) so we enter first method and run the return iter  which send us to the nested method with the 
// terminating case which is the if statement and return acc and define new state by returning a call to iter until counter === 1

// const iterativeTime1 = (n) => {
//     const iter = (counter, acc) =>{
//         return counter === 1 ? acc : false;
        
//     }
//     return iter(counter-1, counter * acc);
//     return iter(n, 1);
// }

const iterativeTime = (n) => {
    const iter = (counter, acc) =>{
        if (counter === 1){
            return acc;
        }
        return iter(counter-1, counter * acc);

    }
    return iter(n, 1);

}

console.log('\n');
console.time('iterativeTime');

console.log(iterativeTime(5));

console.timeEnd("iterativeTime");

let count = 0;
const inception = ()=>{
    console.log(count);
    if(count >3){
        return "done"; // when condition is met which at the 4th call each call will be popped off the call stack
        // but the done will also be popped off and return undifined becuase it statys at the last call of the method
    }
    count++;
    // inception();
    return inception(); // so alway return the call so when the call is popped from the stack your value is bubbling up 
    // to the top or last call of the method on the call stack basiclly passing off the value to next call of the method 

}

inception();

// rules of recursion:

// identify base case 

// identify recursive case

// then as we reach the base case condition return the value and return the recursive call