// !!Note: Use adjacency list
// Write a function that outputs the number of branches of all paths
// from vertex 1 to vertex 5 of given edges (Line between the vertices).
// Ex) INPUT: Edges = [[1, 3],[1, 2],[1, 4],[2, 1],[2, 3],[2, 5],[3, 4],[4, 2],[4, 5]]
//     OUTPUT: 6 , path = [[1, 2, 3, 4, 5],[1, 2, 5],[1, 3, 4, 2, 5],[1, 3, 4, 5],[1, 4, 2, 5],[1, 4, 5]]

const solution = (vertex, edges) => {
  const adjacencyList = Array.from({ length: vertex }, () => []);
  let checkers = Array.from({ length: vertex }, () => 0);

  for (let [v1, v2] of edges) {
    adjacencyList[v1 - 1].push(v2 - 1);
  }

  let count = 0;
  let path = [];
  let temp = [];
  const findRoute = (position, loopCount) => {
    if (position >= vertex - 1) return;
    if (adjacencyList[position].includes(vertex - 1)) {
      path.push([...temp, position + 1, vertex]);
      count++;
    }
    for (let i = 0; i < adjacencyList[position].length; i++) {
      if (checkers[adjacencyList[position][i]] === 0) {
        checkers[position] = 1;
        temp[loopCount] = position + 1;
        findRoute(adjacencyList[position][i], loopCount + 1);
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
