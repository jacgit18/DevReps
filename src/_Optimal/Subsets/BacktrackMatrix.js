/*
 *  Problem:  Robot Paths
 *
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of Integers (matrix)
 *  Output:   Integer
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
 */
// dont see any terminating condition 
let matrix1 = [[0,0,0],
             [0,0,0]];

let matrix2 = [[0,0,0,0],
              [0,0,0,0],
              [0,0,0,0]]

              let matrix3 = 
              [[0,0,0],
              [0,0,0],
              [0,0,0,]]


function robotPaths(matrix) {

  return traverse = (Row = 0, Col = 0) =>{
    //BC: Out of Bounds
    // matrix[0].length proably num of rows and matrix.length is column num
   
    let maxRowLength = matrix[0].length; 
    let maxColLength = matrix.length; 
    let OutofBoundsCheck = Row<0||Col<0||Row>=matrix[0].length||Col>=matrix.length;
    // const AlreadyVisitedCoordinate = (matrix[Col][Row] === 1);
    let TargetReached = Row === maxRowLength - 1 && Col === maxColLength - 1;
    
    if(OutofBoundsCheck) {

      return 0;
    }

    //BC: Already visited coordinate
      else if(matrix[Col][Row] === 1) {
      return 0;
    }

    //BC: Reached Target
    else if(TargetReached) {
      return 1;
    }

    
/** when hit recursive calls we always check right first until we hit end of row then we go out
 *  of bounds check left hit base case until we hit unvisted position and check previous position before starting with left then right, down, up
 * 
 * all uniuqe paths from left root, then right root, then down root, then up root

 * right 3 times adding 1 to currRow then we hit last index row = 3 col = 0 and try left subbing 1 fron currCol row = 2 col = 0
  from last right position 1 time then return zero since visted now were still
  at last right position so we go down at the last right adding 1 to currCol since at new position we check right again and left
  and so on while we hit base cases with updated Row and col
 *             matrix = [[x,1,1,1], Right
 *                       [0,0,0,0],
 *                       [0,0,0,0]]
 *                             
 *             matrix = [[1,1,x,1], Left
 *                       [0,0,0,0],
 *                       [0,0,0,0]]
 * 
 *             matrix = [[1,1,1,x], Down > Right(out of bounds) > Left 3
 *                       [x,x,x,1],  Right > Left > Down > Right 3 > Down
 *                       [x,0,0,0]]  Right 3 > 
 * 
 *             matrix = [[1,1,1,1], 
 *                       [0,0,0,0],
 *                       [0,0,0,0]]
 * 
 */
    //Mark coordintate as visited
    // matrix[Row][Col] = 1;
    matrix[Col][Row] = 1;
    


    //Initialize sum of all paths
    let sumPaths = 0;

    sumPaths += traverse(Row+1, Col); //right // 10 paths
    sumPaths += traverse(Row-1, Col); //left  // 9 paths
    sumPaths += traverse(Row, Col+1); //down  // 10 paths
    sumPaths += traverse(Row, Col-1); //up  // 9 paths

    //Mark coordinate as unvisited
    matrix[Col][Row] = 0;


    return sumPaths;

  }

  // return traverse(0,0);
}


let gatecall = robotPaths(matrix2);


console.log(gatecall());




