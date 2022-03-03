// When the natural number N is entered,
// write a program that returns 1 to N as an array using the recursive function.
// Ex) INPUT: 3
//     OUTPUT: 1 2 3

const solution = num => {
  const numbers = [];
  reduceNumRecursive(1, num, numbers);
  return numbers;
};

const reduceNumRecursive = (num, targetNum, array) => {
  if (num <= targetNum) {
    array.push(num++);
    return reduceNumRecursive(num, targetNum, array);
  }
};

let t = performance.now();
let a1 = solution(3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
