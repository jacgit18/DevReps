// // # A helper function that returns a set of all valid
// // # candidates for a given cell in the board

// function getCandidates(board, row, col){
//     // # For some empty cell board[row][col], what possible
//     // # characters can be placed into this cell
//     // # that aren't already placed in the same row,
//     // # column, and sub-board?
 
//     // # At the beginning, we don't have any candidates
//     let candidates = [];
    
//     // # For each character add it to the candidate list
//     // # only if there's no collision, i.e. that character 
//     // # doesn't already exist in the same row, column 
//     // # and sub-board. Notice the top-left corner of (row, col)'s 
//     // # sub-board is (row - row%3, col - col%3).
//     for(let chr = 1; chr !== 9; ++chr){
//      let collision = false;

//      for(let i = 0; i < board.length; ++i){

//       if (board[row][i] == chr || 
//         board[i][col] == chr ||
//         board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3] == chr):
//             collision = true
//             break
//     }
//     }
        
                  
//         if (!collision){
//           candidates.push(chr)

//         }
         
//     return candidates
// }

 
// function sudokuSolve(board){
//    // # For each empty cell, consider 'newCandidates', the
//     // # set of possible candidate values that can
//     // # be placed into that cell.
   
//    let row = -1 
//    let col = -1
//     candidates = null 
    
//     for (let r from 0 to 8){
//       for (let c from 0 to 8){
//         if (board[r][c] == '.'){
//           newCandidates = getCandidates(board, r, c)
//           // # Then, we want to keep the smallest
//           // # sized 'newCandidates', plus remember the
//           // # position where it was found
//           if (candidates == null OR newCandidates.size() < candidates.size()){
//             candidates = newCandidates
//             row = r 
//             col = c
//           }
             
//         }
       
//       }
//     }
      
       
 
//     // # If we have not found any empty cell, then
//     // # the whole board is filled already
//     if (candidates == null) return true
 
//     // # For each possible value that can be placed
//     // # in position (row, col), let's
//     // # place that value and then recursively query
//     // # whether the board can be solved.  If it can,
//     // # we are done. 
//     for (let val in candidates){
//       board[row][col] = val
//       if (sudokuSolve(board)) return true
//       // # The tried value val didn't work so restore  
//       // # the (row, col) cell back to '.'
//       board[row][col] = '.'

//     }
      
 
//     // # Otherwise, there is no value that can be placed
//     // # into position (row, col) to make the
//     // # board solved
//     return false

// }
 


//     let Board =  
// [[".",".",".","7",".",".","3",".","1"],["3",".",".","9",".",".",".",".","."],[".","4",".","3","1",".","2",".","."],[".","6",".","6",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".","1",".",".","8",".","4","."],[".",".","6",".","2","1",".","5","."],[".",".",".",".",".","9",".",".","8"],["8",".","5",".",".","4",".",".","."]]


  

// runTimeStart("Runtime")
// log("Edge case one", sudokuSolve(Board)) // Expected I/O: 
// //log("Edge case two", sudokuSolve("")) // Expected I/O: 
// //log("Edge case three", sudokuSolve("")) // Expected I/O: 
// runTimeEnd("Runtime")