// Write a function that outputs the number of paths that escape the grid maze.
// The starting point is the (0, 0) coordinate of the grid,
// and the escape arrival point is the (n, n) coordinate.
// In the grid array, "1" is the wall, and "0" is the passage.
// The allowed path is to move up, down, left and right.
// Ex) INPUT: maze = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ]
//    OUTPUT: 8

const solution = maze => {
  checkers = Array.from({ length: maze.length }, () =>
    Array.from({ length: maze.length }, () => 0)
  );
  let count = 0;
  path = [];
  temp = [];
  const findRoute = (col, row) => {
    if (
      col === -1 ||
      row === -1 ||
      col === maze.length ||
      row === maze.length ||
      maze[col][row] === 1 ||
      checkers[col][row] === 1
    )
      return;
    if (row === 6 && col === 6) {
      path.push([...temp, '6,6']);
      count++;
    } else {
      checkers[col][row] = 1;
      temp.push(`${col},${row}`);
      findRoute(col - 1, row);
      findRoute(col, row + 1);
      findRoute(col + 1, row);
      findRoute(col, row - 1);
      temp.pop();
      checkers[col][row] = 0;
    }
  };
  findRoute(0, 0);
  return { count, path };
};
const maze = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

let t = performance.now();
let a1 = solution(maze);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
