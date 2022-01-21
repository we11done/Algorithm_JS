// Several iron rods are about to be cut with a laser.
// For efficient work, the iron bars are stacked from bottom to top,
// and the laser is fired vertically from top to cut the iron bars.
// The arrangement of the iron rod and the laser satisfies the following conditions.
// • Iron bars can only be placed on iron bars that are longer than themselves.
// • If the iron rod is placed on another iron rod, it is placed to be completely included,
//   but the end points are placed so as not to overlap.
// • There is at least one laser that cuts each iron rod.
// • The laser does not overlap with either end point of any iron rod.
// 1. The laser is expressed as an adjacent pair of '(')' of the opening and closing brackets.
//    In addition, all '()' must express a laser.
// 2. The left end of the iron rod is expressed as open parenthesis '(' and the right end is closed parenthesis ')'
// The iron rod is cut into several pieces by a laser.
// Given a parenthesis representing the placement of iron bars and lasers,
// write a program to find the total number of pieces of cut iron bars.
// Ex) INPUT: '()(((()())(())()))(())' Output: 17
// Ex2) INPUT: '(((()(()()))(())()))(()())' Output: 24
const solution = string => {
  const split = string.split('');
  const stack = [];
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '(') stack.push(split[i]);
    else if (split[i - 1] + split[i] === '()') {
      stack.pop();
      count += stack.length;
    } else {
      stack.pop();
      count += 1;
    }
  }
  return count;
};

let t = performance.now();
let a1 = solution('()(((()())(())()))(())');
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Example1 answer:', a1);
let t_ = performance.now();
let a2 = solution('(((()(()()))(())()))(()())');
console.log('Solution took ', performance.now() - t_, ' seconds');
console.log('Example2 answer:', a2);
