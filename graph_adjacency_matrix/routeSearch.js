// Write a function that outputs the number of branches of all paths
// from vertex 1 to vertex 5 of given edges (Line between the vertices).
// Ex) INPUT: Edges = [[1, 3],[1, 2],[1, 4],[2, 1],[2, 3],[2, 5],[3, 4],[4, 2],[4, 5]]
//     OUTPUT: 6 , path = [[1, 2, 3, 4, 5],[1, 2, 5],[1, 3, 4, 2, 5],[1, 3, 4, 5],[1, 4, 2, 5],[1, 4, 5]]

const solution = (vertex, edges) => {
  const matrix = Array.from({ length: vertex }, () =>
    Array.from({ length: vertex }, () => 0)
  );
  let checkers = Array.from({ length: vertex }, () => 0);

  for (let [v1, v2] of edges) {
    matrix[v1 - 1][v2 - 1] = 1;
  }

  let count = 0;
  let path = [];
  let temp = [];
  const findRoute = (position, loopCount) => {
    if (position > vertex - 1) return;
    if (matrix[position][4] === 1) {
      path.push([...temp, position + 1, 5]);
      count++;
    }
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[position][i] === 1 && checkers[i] === 0) {
        checkers[position] = 1;
        temp[loopCount] = position + 1;
        findRoute(i, loopCount + 1);
        temp = [];
        checkers[position] = 0;
      }
    }
  };
  findRoute(0, 0);
  return { count, path };
};

const edges = [
  [1, 3],
  [1, 2],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

let t = performance.now();
let a1 = solution(5, edges);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
