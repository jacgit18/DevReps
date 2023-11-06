// Given two strings s and t, return true if they are equal when both are typed
// into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

/* 

Problem/Notes: # = backspace character(\b') 
' however only moves the cursor one 
position back in the console window and doesn't delete it.


I/O: two Strings // boolean values if they equal when both are typed into empty text editor

EdgeCase:{

}

Naïve-Approach:


Constraints:


Variables:


Control flow
         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:

}        switch case()



 Steps:
 1.
 2.


To Leverage & Rule out

 DataStructure&Algo :


 Functions:





 
 
*/

const backspaceCompare = (s, t) => {
  // replace # with /b
  const regexExp = new RegExp("ab\b")
  console.log(regexExp)

  // console.log(s.match(/#\b/))
  console.log(s.replace(/#\b/))

  // const regexExp = new RegExp('#\b');
  // console.log(s.match(regexExp))
}

console.log(backspaceCompare("ab#c", "ad#c")) // true

// console.log(backspaceCompare("ab##", "c#d#")); // true
// console.log(backspaceCompare("a#c", "b")); // false
// console.log("Hello, Java!".match(/\bJava\b/))
// console.log( "Breakfast at 09:00 in the room 123:456.".match( /\b\d\d:\d\d\b/ ) )// 09:00

let regex = /[a-z]/
const fill = new Array(26).fill(regex)
// console.log( fill)

// console.log(`c\bd\b`)
// console.log(`ab\b\b`)
