// When parentheses are entered, output true if they are correct,
// and false if they are incorrect.
// For example, (())(), this is where the pair of parentheses are correctly
// located, but (()())) is not the correct parenthesis.
// Ex) INPUT: '(()(()))(()'
//     OUTPUT: false

// Using built-in string functions
const solution = string => {
  if (string.charAt(0) === ')') return false;
  return (
    string.split('').filter(s => s === '(').length ===
    string.split('').filter(s => s === ')').length
  );
};

// Using stacks
const solution2 = string => {
  if (string.charAt(0) === ')') return false;
  let stack = [];
  for (let x of string) {
    x === '(' ? stack.push(x) : stack.pop();
  }
  return stack.length === 0;
};

let t = performance.now();
let a1 = solution('(()(()))(()');
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2('(()(()))(()');
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
