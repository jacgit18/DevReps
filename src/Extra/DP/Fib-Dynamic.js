//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
// function fibonacci(n) { //O(2^n)
  
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n-1) + fibonacci(n-2);
// }

// top down
function fibonacciMaster() { //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] =  fib(n - 1) + fib(n - 2);

        


        return cache[n];
      }
    }
    
  }
}

// no closure
  let cache = {};
   function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        // console.log(n);
        cache[n] =  fib(n - 1) + fib(n - 2);

        // console.trace(cache[n] = fib(n-1) + fib(n-2))
        // console.log(cache);
        // console.log(cache[n]);


        return cache[n];
      }
    }
  }




// bottom up Iterative
function fibonacciMaster2(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    answer.push(answer[i-2] + answer[i-1]);
  }
  return answer.pop();
}

// O(2^n) Exponential time
function fibonacciRecursive(n) {
  if (n < 2){
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2);
  // return console.log(fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2));

}


//  using clousure/encapulations

// console.log('Slow', fibonacci(35))
// console.log('DP', fasterFib(10));




// const fasterFib = fibonacciMaster(); // stores return since


// console.log('DP', fasterFib(6));
// console.log(fib(6))


// console.time("time two")
// console.log('DP2', fibonacciMaster2(6));
// console.timeEnd("time two")

// console.log('we did ' + calculations + ' calculations');


// this is a bottom-up dynamic programming (forward dynamic programming)
//
// f(i-1)
//      \
//       >-------> f(i)
//      /
// f(i-2)
//
function fibBottomUpDPForward(n) {
	if (n == 0) {
		return 0
	}
	if( n <= 2) {
		return 1
	}

let dp = Array(n+1).fill(0)



	dp[0] = 0
	dp[1] = 1
	for(let i = 2; i <= n; i++) {
		dp[i] = dp[i-1] + dp[i-2];
	}
	return dp[n]
}

// this is a bottom-up dynamic programming (backward dynamic programming)
//
//   -----> f(i+2)
//   |
// f(i)
//   |
//   -----> f(i+1)
//
function fibBottomUpDPBackward(n) {
	if (n == 0) {
		return 0
	}
	if( n <= 2) {
		return 1
	}


  let dp = Array(n+2).fill(0)



	dp[0] = 0
	dp[1] = 1
  
  for(let i = 1; i < n; i++) {
		dp[i+1] += dp[i] // dp[i] is already solved, use it to solve other subproblems
		dp[i+2] += dp[i]
	}
	return dp[n]
}

console.log(fibBottomUpDPForward(6));
console.log(fibBottomUpDPBackward(6));


