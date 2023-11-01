const ConLoggerFuncParam = require("../../../Basics/ConLoggerFUnc.js")
const consoleItem = new ConLoggerFuncParam()

function reverseRecursiveWay(str) {
  let arrayStr = str.split("")
  let reversedArray = []
  // We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop())
      addToArray(array)
    }
    return
  }
  addToArray(arrayStr)
  return reversedArray.join("")
}

function reverseIterative(str) {
  if (!str || typeof str != "string" || str.length < 2) return str

  let backwards = []
  let totalItems = str.length - 1
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]) // this is the same result as str.split()
  }
  return backwards.join("")
}

function easyway(str) {
  //check for valid input
  return str.split("").reverse().join("")
}

const easyCleanerWay = (str) => [...str].reverse().join("")

// weird
//   function reverseStringRecursive (str) {
//     if (str === "") {
//       return "";
//     } else {
//       return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//     }
//   }

// console.log(reverseStringRecursive('yoyo master'))

function reverseNoClosureJustRec(str) {
  if (str === "") {
    return ""
  } else {
    return reverseNoClosureJustRec(str.substr(1)) + str.charAt(0)
  }
}

consoleItem.ConsoleDebuggerParamTwo(reverseIterative("yoyo master"), "first way")
consoleItem.ConsoleDebuggerParamTwo(reverseRecursiveWay("yoyo master"), "second way")

consoleItem.ConsoleDebuggerParamTwo(easyway("yoyo master"), "third way")
consoleItem.ConsoleDebuggerParamTwo(easyCleanerWay("yoyo master"), "fourth way")

console.log(reverseNoClosureJustRec("task"))
