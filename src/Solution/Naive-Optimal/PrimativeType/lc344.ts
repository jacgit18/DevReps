

function revString1(str) {
    let strArr = str.split("") // turn string to an array
    let revStrArr = strArr.reverse() // reverse that array
    let revStringer = revStrArr.join("") // turns back to string
    console.log(revStrArr)
  }
  
  function revString2(str) {
    return str.split("").reverse().join("")
  }
  
  // try building logic of available javascript methods
  // iterative function
  function revString3(str) {
    let final = ""
    for (let i = str.length - 1; i >= 0; i--) {
      final += str[i]
    }
    return final
  }
  
  console.log(revString3("hell"))
  
  console.log("hell")