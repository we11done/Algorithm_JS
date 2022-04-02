// The formula to find the number of combinations is nCr = n! / ((n – r)! r!)
// However, write a function that returns the number of combinations using recursion
// Ex) INPUT: n = 5 , r = 3
//     OUTPUT: 10
//     INPUT: n = 33, r = 19
//     OUTPUT: 818809200

const solution = (n, r) => {
  if (r === 0 || n === r) return 1;
  return solution(n - 1, r - 1) + solution(n - 1, r);
};

let t = performance.now();
let a1 = solution(5, 3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
let t2 = performance.now();
let a2 = solution(33, 19);
console.log('Solution took ', performance.now() - t2, ' seconds');
console.log('Solution answer:', a2);
