// good problem made me think
export const attempt = (queries: string[][]): string[] => {
  return [" "]
}

const queries = [
  ["APPEND", "Hey"],
  ["APPEND", " you"],
  ["APPEND", ", don't"],
  ["APPEND", " "],
  ["APPEND", "let me down"],
]

// console.log(solution(queries))

/**
 * 
 * [
  [ 'APPEND', 'Hey' ],
  [ 'APPEND', ' you' ],
  [ 'APPEND', ", don't" ],
  [ 'APPEND', ' ' ],
  [ 'APPEND', 'let me down' ]
]

["Hey", 
 "Hey you", 
 "Hey you, don't", 
 "Hey you, don't ", 
 "Hey you, don't let me down"]

switch case 
check row first index for Apppend, Move, Backspace


 store value after apppend
unshift first index value or replace with empty space 
then replace next append with stored value

and concat to the next string 
update store 
then rm append and concat again 


if num dont concat replace with previous store


iterate through first index of matrix and push to empty array 

 */
