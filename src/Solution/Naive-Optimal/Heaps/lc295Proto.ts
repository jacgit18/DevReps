// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

var MedianFinder = function () {}

MedianFinder.prototype.addNum = (num) => {
  this.a.push(num)
}

MedianFinder.prototype.findMedian = () => {
  this.a.sort((x, y) => x - y)
  let n = this.a.length
  let m = n >> 1 // 3 is 011 so it is now 01 since were right shifting and 01 equals 1
  // << this would append two zeros or something
  return n & 1 ? this.a[m] : (this.a[m - 1] + this.a[m]) / 2

  // 76543210 positions
  // 00000000 = 0
  // 00000001 = 1   1
  // 00000010 = 2  10
  // 00000011 = 3 011
  //            4 0100  4 >> 1 = 010 = 10 = 2
}

var medianOfAStream = new MedianOfAStream()
medianOfAStream.addNum(3)
medianOfAStream.addNum(1)
// console.log(`The median is: ${medianOfAStream}`);

console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.find_median()
medianOfAStream.addNum(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.find_median()

medianOfAStream.addNum(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.find_median()

// console.log(medianOfAStream)
console.log(`\n ------- Edge Cases ----------`)

/**
 *
 * Optimal Approach
 * ---------------
 * Variables:
 *
 *
 */
