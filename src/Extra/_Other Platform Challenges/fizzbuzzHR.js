function fizzBuzz2(n) {
  for (let i=1; i <= n; i++){
    if (i % n == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
  }

fizzBuzz2(15)

// mod ask if the number after mod goes into and if there is a remaninder
// so that 1 mod 3 which leaves a remaninder of 1