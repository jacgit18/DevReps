// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let PriceArray = [7, 1, 5, 3, 6, 4] // 6-1 = 5 made 5 dollar
//      -6 <-  -1 0 1 2 3 4 5

const maxProfit = (prices) => {
  let arrLen = prices.length
  let sell = 0
  let buy = Infinity
  for (let i = 0; i < arrLen - 1; i++) {
    buy = Math.min(buy, prices[i])
    sell = Math.max(sell, prices[i + 1] - buy)
  }
  return sell
}

console.log(maxProfit(PriceArray))
