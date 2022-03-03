// When decimal N is entered,
// write a program that converts it into binary and return it.
// use a recursive function.

const solution = num => {
  let binary = [];
  convertToBinaryRecursive(num, binary);
  return binary.join('');
};

const convertToBinaryRecursive = (num, array) => {
  if (num === 0) return;
  let remainder = num % 2;
  let quotient = parseInt(num / 2);
  array.unshift(remainder);
  return convertToBinaryRecursive(quotient, array);
};

let t = performance.now();
let a1 = solution(11);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
