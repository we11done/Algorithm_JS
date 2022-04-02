// There are beads with numbers from 1 to N.
// Write a function that outputs the number of methods of extracting M of these.
// Ex) INPUT: N = 4, M = 2
//     OUTPUT: 6

const solution = (N, M) => {
  const result = [];
  const temp = [];
  const getCombinations = (loopCount, number) => {
    if (loopCount === M) {
      return result.push([...temp]);
    }
    for (let i = number; i <= N; i++) {
      temp[loopCount] = i;
      getCombinations(loopCount + 1, i + 1);
    }
  };
  getCombinations(0, 1);
  return result.length;
};

let t = performance.now();
let a1 = solution(4, 2);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
