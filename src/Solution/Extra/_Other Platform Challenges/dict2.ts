// 1. 'Iterate' over the dictionary
// Keys will either be 'Key_' for outermost level
// or a letter/empty string for inner levels
// 2. If the value is an int/string, append onto output dictionary
// else if the value is a dictionary, recurse
// 3. Base case: dict empty, return

interface Dictionary {
  [key: string]: number | string | Dictionary
}

const dictJSON: Dictionary = require("./dict.json")

export const flattenDictionary = (inputDict: Dictionary): Dictionary => {
  let results: Dictionary = {}
  let currKey = ""

  function flattenUtil(dict: Dictionary): void {
    Object.keys(dict).forEach((key) => {
      const valType = typeof dict[key] === "object"
      const propertyDataValue = dict[key]

      if (valType) {
        if (!currKey) {
          currKey += key
        } else {
          currKey += `.${key}`
        }
        flattenUtil(dict[key] as Dictionary)
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

  flattenUtil(inputDict)
  return results
}

console.log(flattenDictionary(dictJSON))
