function getNeighbors(row, col, matrix) {
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
  let result = [];
  // Check top
  if (row - 1 >= 0) {
    if (matrix[row - 1][col] === 1) {
      let up = [row - 1, col];
      result.push(up);
    }
  }
  // Check top right
  if (row - 1 >= 0 && col + 1 <= matrix[0].length - 1) {
    if (matrix[row - 1][col + 1] === 1) {
      let top_right = [row - 1, col + 1];
      result.push(top_right);
    }
  }
  // Check right
  if (col + 1 <= matrix[0].length - 1) {
    if (matrix[row][col + 1] === 1) {
      let right = [row, col + 1];
      result.push(right);
    }
  }
  // Check bottom right
  if (col + 1 <= matrix[0].length - 1 && row + 1 <= matrix.length - 1) {
    if (matrix[row + 1][col + 1] === 1) {
      let bottom_right = [row + 1, col + 1];
      result.push(bottom_right);
    }
  }
  // bottom
  if (row + 1 <= matrix.length - 1) {
    if (matrix[row + 1][col] === 1) {
      let down = [row + 1, col];
      result.push(down);
    }
  }
  // Check bottom left
  if (row + 1 <= matrix.length - 1 && col - 1 >= 0) {
    if (matrix[row + 1][col - 1] === 1) {
      let bottom_left = [row + 1, col - 1];
      result.push(bottom_left);
    }
  }
  // Check left
  if (col - 1 >= 0) {
    if (matrix[row][col - 1] === 1) {
      let left = [row, col - 1];
      result.push(left);
    }
  }
  // Check top left
  if (col - 1 >= 0 && row - 1 >= 0) {
    if (matrix[row - 1][col - 1] === 1) {
      let top_left = [row - 1, col - 1];
      result.push(top_left);
    }
  }

  // Your code here
  return result;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
  // If an index contains a 1 and has not been visited,
  // increment island count and start traversing neighbors
  // DO THE THING (increment island count by 1)
  // Initialize a stack with current index
  // Add stringified version of current index to the visited set
  // While stack contains elements
  // Pop element from stack
  // Get valid neighbors of current element
  // Iterate over neigbors
  // If neighbor has not been visited
  // Add neighbor to stack
  // Mark neighbor as visited
  // Return island count
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

let matrix1 = [
  [1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
];

// console.log(getNeighbors(1, 1, matrix1));
// [[0, 0], [0, 1], [0, 2], [1,2], [2,1], [2,2]])
