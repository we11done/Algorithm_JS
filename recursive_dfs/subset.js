// Given a postivie number N,
// write a program that returns all subsets of a set with elements from 1 to N.
// Do not include empty subsets.
// Ex) INPUT: 3
//     OUTPUT: [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]

const solution = num => {
  const subsets = [];
  const checkers = Array.from({ length: num + 1 }, () => 0);
  const subsetRecursive = value => {
    if (value === num + 1) {
      let temp = [];
      for (let i = 1; i <= num; i++) {
        if (checkers[i] === 1) temp.push(i);
      }
      temp.length > 0 && subsets.push(temp);
    } else {
      checkers[value] = 1;
      subsetRecursive(value + 1);
      checkers[value] = 0;
      subsetRecursive(value + 1);
    }
  };
  subsetRecursive(1);
  return subsets;
};

let t = performance.now();
let a1 = solution(3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
