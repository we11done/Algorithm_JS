// A local peak is the integer that is bigger than 4 integers(up, down, right, left) around itself.
// Find a number of local peak of given N * N 2d array.
// Note: The border of the matrix is always 0.
// INPUT:
// [[0 ,0 ,0 ,0 ,0 ,0 ,0]
// [0 ,5 ,3 ,7 ,2 ,3 ,0]
// [0 ,3 ,7 ,1 ,6 ,1 ,0]
// [0 ,7 ,2 ,5 ,3 ,4 ,0]
// [0 ,4 ,3 ,6 ,4 ,1 ,0]
// [0 ,8 ,7 ,3 ,5 ,2 ,0]
// [0 ,0 ,0 ,0 ,0 ,0 ,0]]
// OUTPUT: 10

const solution = matrix => {
  let count = 0;
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix.length - 1; j++) {
      matrix[i][j] > matrix[i - 1][j] &&
        matrix[i][j] > matrix[i + 1][j] &&
        matrix[i][j] > matrix[i][j - 1] &&
        matrix[i][j] > matrix[i][j + 1] &&
        count++;
    }
  }
  return count;
};

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 5, 3, 7, 2, 3, 0],
    [0, 3, 7, 1, 6, 1, 0],
    [0, 7, 2, 5, 3, 4, 0],
    [0, 4, 3, 6, 4, 1, 0],
    [0, 8, 7, 3, 5, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
);
