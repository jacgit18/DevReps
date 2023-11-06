// You are given an integer array height of length n. There are n vertical lines drawn such that the
// two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains
// the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxArea = (height: number[]): number => {
  let [result, leftIndex, rightIndex] = [0, 0, height.length - 1]

  while (leftIndex < rightIndex) {
    // calculate the shortest side and the area
    let shortestSide = Math.min(height[leftIndex], height[rightIndex])
    let area = (rightIndex - leftIndex) * shortestSide

    // compare area and result to update the result
    result = Math.max(area, result)

    // update the left or right index
    if (height[leftIndex] < height[rightIndex]) leftIndex++
    else rightIndex--
  }
  return result
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
