// Write a program that removes all the characters existing
// between brackets ( ) from the entered string and outputs
// only the remaining characters.
// Ex) INPUT: '(A(BC)D)EF(G(H)(IJ)K)LM(N)'
//     OUTPUT: 'EFLM'

const solution = string => {
  let answer = '';
  const stack = [];
  for (let x of string) {
    x === '(' && stack.push(x);
    stack.length === 0 && (answer += x);
    x === ')' && stack.pop();
  }
  return answer;
};

let t = performance.now();
let a1 = solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
