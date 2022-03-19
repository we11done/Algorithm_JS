// There are beads with numbers from 1 to N.
// Write a function that outputs array of all of the ways
// in which the beads are drawn and arranged in a row.
// Beads with same number can be selected in duplicate.
// N(3<=N<=10) M(2<=M<=N)
// INPUT: N = 3, M = 2
// OUTPUT: [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

const solution = (number, draw) => {
  const answer = [];
  const temp = Array.from({ length: draw }, () => 0);
  const drawBeadsRecursive = beadDrawn => {
    if (beadDrawn === draw) {
      const permutation = [...temp];
      answer.push(permutation);
    } else {
      for (let i = 1; i <= number; i++) {
        temp[beadDrawn] = i;
        drawBeadsRecursive(beadDrawn + 1);
      }
    }
  };
  drawBeadsRecursive(0);
  return answer;
};

let t = performance.now();
let a1 = solution(3, 2);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
