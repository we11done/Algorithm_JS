// Given N plane coordinates (x, y), write a program that sorts all coordinates in ascending order.
// The sorting criteria are first sorted by the x value, and if the x value is the same, they are sorted by the y value.
// Ex) INPUT: [[2,7],[1,3],[1,2],[2,5],[3,6]]
//     OUTPUT: [[1,2],[1,3],[2,5],[2,7],[3,6]]

const solution = coordinates => {
  return coordinates.sort(([x, y], [x2, y2]) => (x !== x2 ? x - x2 : y - y2));
};

const coordinates = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

let t = performance.now();
let a1 = solution(coordinates);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
