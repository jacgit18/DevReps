/*
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()

In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, 
and each of the nine 3x3

 board contains all of the digits from 1 to 9.
 
 The board setter provides a partially completed board, 
 
well-posed board has a unique solution. 
 As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution.
 No need to return the actual numbers that make up a solution.
 
 set 
 
 sub grid 3X3 with unique nums is solution
 . represent blank spaces
 
 function should fill the blank spaces with characters such that the following rules apply:

Return

|
V IDENTIFY EDGE to Identify TEST CASES in 10 min or less

Properties of Edgecase:





Alt EdgeCase & similarities:

		


|
V Define Naïve-Approach/Psuedocode on whiteboard under 20 min or less:

List out properties of problem you have gotten so far with order in mind:

Define Variables(to store reference manipulate) & Identify CRUD:


Identify Test Case with Control Flow in mind:


|
V Code if stuck check past steps & Identify Runtime & Optimizations 15 min or less




Control flow(Break, Continue) based on defined steps & edge cases

    Simple Test case: Rules:
     ---------------------------------------------
      new customer -> 15% off
      repeat customer -> 10% off
      coupon customer -> 30% off

     num of test case = num of rules = 2^num of conditions = 2^3 = 8 rules

     n = not likely p = probably
     Identify commonalities between test case
     Follow Discrete math De-Morgan's Law
     new cus T T T T F F F F
     repeat cus T T F F T T F F
     coupon cus T F T F T F T F
     result N N P P P N N

         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}

*/

const log = (pre = "", arg = "", post = "") => {
  console.log(`${pre} ${arg} ${post} `)
}

const info = (pre = "", arg = "", post = "") => {
  console.info(`${pre} ${arg} ${post} `)
}

const table = (pre = "", arg = "", post = "") => {
  console.table(`${pre} ${arg} ${post} `)
}

const runTimeStart = (arg) => console.time(arg)
const runTimeEnd = (arg) => console.timeEnd(arg)

const sudokuSolve = (board) => {
  //log(board)

  //[row][col]

  for (let start = 0; start < board.length; ++start) {
    // log(board[0])
    let set = new Set()

    for (let c of board[0]) {
      if (c === ".") {
        break

        if (set.has(c)) {
          return false
        }
        set.add(c)
      }
    }

    table(set)
  }

  //return board
}

let Board = [
  [".", ".", ".", "7", ".", ".", "3", ".", "1"],
  ["3", ".", ".", "9", ".", ".", ".", ".", "."],
  [".", "4", ".", "3", "1", ".", "2", ".", "."],
  [".", "6", ".", "6", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", "8", ".", "4", "."],
  [".", ".", "6", ".", "2", "1", ".", "5", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "8"],
  ["8", ".", "5", ".", ".", "4", ".", ".", "."],
]

runTimeStart("Runtime")
log("Edge case one", sudokuSolve(Board)) // Expected I/O:
//log("Edge case two", sudokuSolve("")) // Expected I/O:
//log("Edge case three", sudokuSolve("")) // Expected I/O:
runTimeEnd("Runtime")
