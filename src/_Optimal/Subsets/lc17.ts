const letterCombinations = (digits) => {
  let numberToChar = new Map()
  numberToChar.set("2", ["a", "b", "c"])
  numberToChar.set("3", ["d", "e", "f"])
  numberToChar.set("4", ["g", "h", "i"])
  numberToChar.set("5", ["j", "k", "l"])
  numberToChar.set("6", ["m", "n", "o"])
  numberToChar.set("7", ["p", "q", "r", "s"])
  numberToChar.set("8", ["t", "u", "v"])
  numberToChar.set("9", ["w", "x", "y", "z"])

  let results = []
  const dfs = function (path, startingPosition) {
    // check if reached a valid state
    if (path.length === digits.length) {
      // [a,d] ==> "ad"
      results.push(path.join(""))
      return
    }
    while (startingPosition < digits.length) {
      let mappedDigitChars = numberToChar.get(digits[startingPosition]) //a,b,c

      mappedDigitChars.forEach(function (val) {
        path.push(val)
        // increment startingPosition to move on to the next digit and avoid repition
        dfs(path, startingPosition + 1)
        path.pop()
      })
      startingPosition++
    }
  }
  if (!digits) {
    return []
  }
  dfs([], 0)

  return results
}

const letterCombinations2 = (digits) => {
  if (!digits) {
    return []
  }
  function numToString(digit) {
    switch (digit) {
      case "0":
        return " "
      case "1":
        return ""
      case "2":
        return "abc"
      case "3":
        return "def"
      case "4":
        return "ghi"
      case "5":
        return "jkl"
      case "6":
        return "mno"
      case "7":
        return "pqrs"
      case "8":
        return "tuv"
      case "9":
        return "wxyz"
    }
  }
  var numArray = digits.split("") // step 1
  var stringArray = []
  var result = []
  var str = ""
  for (var i = 0; i < numArray.length; i++) {
    // step 2
    stringArray.push(numToString(numArray[i]))
  }
  // console.log("numArray=["+numArray+"]; numArray.length="+numArray.length+"; stringArray=["+stringArray+"];");
  var backTracking = function (m, n) {
    // step 3
    if (m == n) {
      // console.log("str="+str+";");
      return result.push(str)
    } else {
      for (var i = 0; i < stringArray[m].split("").length; i++) {
        // console.log("stringArray["+m+"]["+i+"]="+stringArray[m][i]+";");
        str += "" + stringArray[m][i]
        backTracking(m + 1, n)
        str = str.substr(0, str.length - 1)
      }
    }
  }
  backTracking(0, numArray.length)
  return result
}

let digits = "23"
console.log(letterCombinations(digits))
console.log(letterCombinations2(digits))
