// Given N * N 2d array,
// write a function that returns the biggest sum of the line.
// The lines are all rows, columns, and 2 diagonal lines.
// Ex) INPUT: [[10, 13, 10, 12, 15]
//             [12, 39, 30, 23, 11]
//             [11, 25, 50, 53, 15]
//             [19, 27, 29, 37, 27]
//             [19, 13, 30, 13, 19]]
//      OUPUT: 155

const solution = array2D => {
  let sumOfLine = [];
  let diagonalSumL = 0;
  let diagonalSumR = 0;
  for (let i = 0; i < array2D.length; i++) {
    diagonalSumL += array2D[i][i];
    diagonalSumR += array2D[i][array2D.length - 1 - i];
    let columnSum = 0;
    let rowSum = 0;
    for (let j = 0; j < array2D.length; j++) {
      columnSum += array2D[i][j];
      rowSum += array2D[j][i];
    }
    sumOfLine.push(columnSum);
    sumOfLine.push(rowSum);
  }
  sumOfLine.push(diagonalSumL);
  sumOfLine.push(diagonalSumR);
  return Math.max(...sumOfLine);
};

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
