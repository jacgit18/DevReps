function iterateAndStore(data) {
    const resultArray = [];
  
    function recursiveIterator(item) {
      if (Array.isArray(item)) {
        for (const element of item) {
          recursiveIterator(element);
        }
      } else if (typeof item === 'object' && item !== null) {
        for (const key in item) {
          recursiveIterator(item[key]);
        }
      } else {
        resultArray.push(item);
      }
    }
  
    recursiveIterator(data);
    return resultArray;
  }
  
  // Example usage:
  const dataStructure = [1, [2, 3, [4, 5]], { a: 6, b: [7, 8] }];
  const valuesArray = iterateAndStore(dataStructure);
  console.log(valuesArray);


 // This code defines a function `iterateAndStore` that recursively iterates through any nested data structure