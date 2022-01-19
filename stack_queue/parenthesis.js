// When parentheses are entered, output true if they are correct,
// and false if they are incorrect.
// For example, (())(), this is where the pair of parentheses are correctly
// located, but (()())) is not the correct parenthesis.
// Ex) INPUT: '(()(()))(()'
//     OUTPUT: false

const solution = string => {
  if (string.charAt(0) === ')') return false;
  let stack = [];
  for (let x of string) {
    if (x === '(') stack.push(x);
    else {
      if (stack.pop() === undefined) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

let t = performance.now();
let a1 = solution('(()(()))(()');
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
