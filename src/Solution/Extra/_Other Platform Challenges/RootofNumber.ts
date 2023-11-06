function root(x, n) {
  // if (n % 2  === 0 || x % n  === 0){

  //  }

  //    if (n % 2  === 0  && Math.sqrt(x) === n ){

  //     return Math.sqrt(n)
  //   }

  if (Math.cbrt(x) === n) {
    return Math.cbrt(x)
  }

  if (n % 2 === 0 || x % n === 0 || Math.sqrt(x) === n) {
    return Math.sqrt(x)
  } else {
    return Math.cbrt(x).toFixed(3)
  }
}

console.log(root(4, 2))

console.log(root(7, 3))

console.log(root(9, 2))

console.log(root(16, 4)) // should be 2 since 2*2*2*2

console.log(root(27, 3)) // should be 3 since 3*3*3

console.log()

function rooTwo(x, n) {
  if (x == 0) {
    return 0
  }

  let lowerBound = 0
  let upperBound = Math.max(1, x)
  let approxRoot = (upperBound + lowerBound) / 2

  while (approxRoot - lowerBound >= 0.001) {
    if (Math.pow(approxRoot, n) > x) {
      upperBound = approxRoot
    } else if (Math.pow(approxRoot, n) < x) {
      lowerBound = approxRoot
    } else break

    approxRoot = (upperBound + lowerBound) / 2
  }

  return approxRoot
}

console.log(rooTwo(4, 2))
console.log(rooTwo(7, 3))
console.log(rooTwo(9, 2))
console.log(rooTwo(16, 4))
console.log(rooTwo(27, 3)) // should be 3 since 3*3*3
