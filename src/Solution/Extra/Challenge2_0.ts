function spaceEater(food) {
  for (let consumptionStart = 0; consumptionStart < food.length; ++consumptionStart) {
    console.log(food[consumptionStart])
    if (
      food[consumptionStart][consumptionStart + 1] === "" ||
      food[consumptionStart][consumptionStart + 1] === " "
    ) {
      food[consumptionStart].splice()
    }
  }
  return
}

function solution(queries) {
  // good problem made me think
  let action = {
    1: "APPEND",
    2: "BACKSPACE",
    3: "MOVE",
  }

  let sanitized = spaceEater(queries)
  let res = []
  //  let word = queries[0].length
  // console.log(word)

  for (let i = 0; i < queries.length; ++i) {
    for (let j = 0; j < queries[i].length; ++j) {
      // remove empty space
      // queries[i].filter(function(){})
      let word = queries[j][1]
      //   console.log(word)

      // if(queries[1][j] === ' ')

      if (queries[i][0] === action[1]) {
        if (res.length < 1) {
          res.push(queries[i][1])
        } else {
          let word2 = word + queries[1][j]
          res.push(word2)
          //    word = res[j]
        }
      }

      if (queries[i][0] === action[2]) {
      }

      if (queries[i][0] === action[3]) {
      }
    }
  }

  // console.log(res)

  return res
}

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
