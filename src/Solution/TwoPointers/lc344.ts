// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


 const reverseStringTwoPointer = (s: string[]): string[] =>{
  const reversedArray: string[] = [...s]; // Create a shallow copy to avoid modifying the input array
    let left = 0;
    let right = reversedArray.length - 1;

    while (left < right) {
        // Swap characters at the left and right pointers
        const temp = reversedArray[left];
        reversedArray[left] = reversedArray[right];
        reversedArray[right] = temp;

        // Move pointers towards the center
        left++;
        right--;
    }

    return reversedArray;
}


const revString1 = (str: string): string => {
  const strArr: string[] = str.split("") // turn string to an array
  const revStrArr: string[] = strArr.reverse() // reverse that array
  const revStringer: string = revStrArr.join("") // turns back to string
  console.log(revStrArr)
  return revStringer
}

const revString2 = (str: string): string => {
  return str.split("").reverse().join("")
}

const revString3 = (str: string): string => {
  let final: string = ""
  for (let i: number = str.length - 1; i >= 0; i--) {
    final += str[i]
  }
  return final
}


export const revString = {
  reverseStringTwoPointer,
  revString1,
  revString2,
  revString3,
}

// console.log(revString1("hell"))
// console.log(revString2("hell"))
// console.log(revString3("hell"))

// console.log("hell")
