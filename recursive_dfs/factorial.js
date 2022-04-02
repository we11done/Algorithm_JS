// Given an integer N, write a function that returns the factorial value of N
// Ex) INPUT: 5
//     OUTPUT: 120

const solution = number => {
  if (number === 1) return 1;
  return number * solution(number - 1);
};

let t = performance.now();
let a1 = solution(5);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
