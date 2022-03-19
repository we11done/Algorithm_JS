// If N natural numbers of less than 10 are given in a array,
// create a function that outputs all of the methods
// in which M of them are selected and arranged in a row.
// N(3<=N<=10) M(2<=M<=N)
// Ex) INPUT: Numbers = [3, 6, 9] , Selected = 2
//     OUTPUT: [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

const solution = (numbers, select) => {
  const permutations = [];
  const checkers = Array.from({ length: numbers.length }, () => 0);
  const temp = Array.from({ length: select }, () => 0);

  const permutationRecursive = loopCount => {
    if (select === loopCount) {
      const permutation = [...temp];
      permutations.push(permutation);
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (checkers[i] === 0) {
          temp[loopCount] = numbers[i];
          checkers[i] = 1;
          permutationRecursive(loopCount + 1);
          checkers[i] = 0;
        }
      }
    }
  };

  permutationRecursive(0);
  return permutations;
};

let t = performance.now();
let a1 = solution([3, 6, 9], 2);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
