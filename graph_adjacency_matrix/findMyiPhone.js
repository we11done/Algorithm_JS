// Bob lost his iPhone.
// Fortunately, the iPhone has a location tracker.
// Given the position of Bob and the position of the iPhone
// as coordinate points on a vertical line,
// Bob moves from the current position to the position of the iPhone in the following way.
// Bob can move forward and backward 1 if he walks and forward 5 if he runs.
// Write a function that determines how many moves Bob can make to the location of the iPhone
// Note: the vertical line starts at 1 and ends at 10000
// Ex1) INPUT: bob's location , location of the iPhone = [5,14] OUTPUT = 3 moves
// Ex2) INPUT: bob's location , location of the iPhone = [8,3] OUTPUT = 5 moves

const solution = locations => {
  const [bob, iphone] = locations;
  const queue = [];
  const visitedPoint = [];
  const distance = [];
  distance[bob] = 0;
  visitedPoint[bob] = 1;
  queue.push(bob);
  while (queue.length) {
    let currentPoint = queue.shift();
    for (let nextPoint of [
      currentPoint + 1,
      currentPoint - 1,
      currentPoint + 5,
    ]) {
      if (nextPoint === iphone) return distance[currentPoint] + 1;
      if (nextPoint > 0 && !visitedPoint[nextPoint] && nextPoint <= 10000) {
        visitedPoint[nextPoint] = 1;
        queue.push(nextPoint);
        distance[nextPoint] = distance[currentPoint] + 1;
      }
    }
  }
};

console.log('Ex1');
let t = performance.now();
let a1 = solution([5, 14]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
console.log('Ex2');
let t2 = performance.now();
let a2 = solution([8, 3]);
console.log('Solution took ', performance.now() - t2, ' seconds');
console.log('Solution answer:', a2);
