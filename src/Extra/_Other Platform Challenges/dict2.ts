const dict = require("./dict")

// 1. 'Iterate' over the dictionary
// Keys will either be 'Key_' for outermost level
// or a letter/empty string for inner levels
// 2. If the value is an int/string, append onto output dictionary
// else if the value is a dictionary, recurse
// 3. Base case: dict empty, return
function flattenDictionary(dict) {
  let results = {}
  let currKey = ""

  function flattenUtil(dict) {
    Object.keys(dict).forEach((key) => {
      let valType = typeof dict[key] === "object"
      let propertyDataValue = dict[key]
      if (valType) {
        if (!currKey) {
          currKey += key
        } else {
          currKey += `.${key}`
        }
        flattenUtil(dict[key])
      } else {
        if (!currKey) {
          results[`${key}`] = dict[key]
        } else {
          if (!key) {
            results[`${currKey}`] = dict[key]
          } else {
            results[`${currKey}.${key}`] = dict[key]
          }
        }
      }
    })
  }

  flattenUtil(dict)
  return results
}

console.log(flattenDictionary(dict))
