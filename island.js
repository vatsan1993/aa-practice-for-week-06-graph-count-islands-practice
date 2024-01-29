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
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // If an index contains a 1 and has not been visited,
      if (matrix[i][j] == 1 && !visited.has([i, j].toString())) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        let stack = [[i, j]];
        // Add stringified version of current index to the visited set
        visited.add([i, j].toString());
        // While stack contains elements
        while (stack.length !== 0) {
          // Pop element from stack
          let node = stack.pop();
          let row = node[0];
          let col = node[1];
          // Get valid neighbors of current element
          let neighbors = getNeighbors(row, col, matrix);
          // Iterate over neighbors
          for (let neighbor of neighbors) {
            // If neighbor has not been visited
            if (!visited.has(neighbor.toString())) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(neighbor.toString());
            }
          }
        }
      }
    }
  }
  return count;
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
