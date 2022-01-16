// Given two arrays of integers sorted in ascending order,
// combine two arrays and sort them in ascending order.
// Ex) INPUT: [1 ,3 ,5] , [2 ,3 ,6 ,7 ,9]
//     OUTPUT: [1 ,2 ,3 ,3 ,5 ,6 ,7 ,9]

// Using built-in spread operator & sort
const solution = (firstA, secondA) => {
  return [...firstA, ...secondA].sort((a, b) => a - b);
};

// Using two pointers algorithm
const solution2 = (firstA, secondA) => {
  let answer = [];
  let n = firstA.length;
  let m = secondA.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    firstA[p1] < secondA[p2]
      ? answer.push(firstA[p1++])
      : answer.push(secondA[p2++]);
  }
  while (p1 < n) answer.push(firstA[p1++]);
  while (p2 < m) answer.push(secondA[p2++]);
  return answer;
};

// Result
let t = performance.now();
let a1 = solution([1, 3, 5], [2, 3, 6, 7, 9]);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2([1, 3, 5], [2, 3, 6, 7, 9]);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
