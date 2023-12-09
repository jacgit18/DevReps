let calculations = 0

// Top-down with closure
const fibonacciMaster = (): (n: number) => number =>{
  const cache: { [key: number]: number } = {}

  return function fib(n: number): number {
    calculations++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

// Bottom-up Iterative
const fibonacciMaster2 = (n: number): number =>{
  const answer: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()!
}

// Exponential time
const fibonacciRecursive = (n: number): number =>{
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// Bottom-up dynamic programming (forward)
const fibBottomUpDPForward = (n: number): number =>{
  if (n === 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }

  const dp: number[] = Array(n + 1).fill(0)

  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// Bottom-up dynamic programming (backward)
const fibBottomUpDPBackward = (n: number): number =>{
  if (n === 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }

  const dp: number[] = Array(n + 2).fill(0)

  dp[0] = 0
  dp[1] = 1

  for (let i = 1; i < n; i++) {
    dp[i + 1] += dp[i] // dp[i] is already solved, use it to solve other subproblems
    dp[i + 2] += dp[i]
  }
  return dp[n]
}

// Define the exported object
export const fibs = {
  fibonacciMaster,
  fibonacciMaster2,
  fibonacciRecursive,
  fibBottomUpDPForward,
  fibBottomUpDPBackward
}

