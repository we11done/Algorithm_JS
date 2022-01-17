// Given two arrays of integers,
// Write a function that finds union of two arrays
// and sort them in ascending order.
// Ex) INPUT: [1 ,3 ,9 ,5 ,2] , [3 ,2 ,5 ,7 ,8]
//     OUTPUT: [2,3,5]

// My solution with built-in
const solution = (firstA, secondA) => {
  return firstA.filter(num => secondA.includes(num)).sort((a, b) => a - b);
};

// Two pointers algorithm
const solution2 = (firstA, secondA) => {
  firstA.sort((a, b) => a - b);
  secondA.sort((a, b) => a - b);
  const n = firstA.length;
  const m = secondA.length;
  let p1 = (p2 = 0);
  let answer = [];
  while (p1 < n && p2 < m) {
    if (firstA[p1] === secondA[p2]) {
      answer.push(firstA[p1++]) && p2++;
    } else {
      firstA[p1] > secondA[p2] ? p2++ : p1++;
    }
  }
  return answer;
};

let t = performance.now();
let a1 = solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
