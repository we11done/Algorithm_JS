// Given a set of natural numbers consisting of N elements,
// write a function if the sum of the elements of the two subsets is equal to each other when divided into two subsets,
// then return true, otherwise returns "NO".
// The two subsets divided into two are subsets of each other,
// and when the two subsets are combined, they become the original set given as input.
// For example, if [1, 3, 5, 6, 7, 10] is input, the sum subset [1, 3, 5, 7] and [6, 10] is the same.
// Ex)  INPUT: [1, 3, 5, 6, 7, 10]
//      OUTPUT: true

const solution = numbers => {
  let answer = false;
  let flag = false;
  const checkers = Array.from({ length: numbers.length }, () => 0);
  const subsetRecursive = position => {
    if (flag) return;
    if (position > numbers.length - 1) {
      let subsetSum = 0;
      let oppositeSum = 0;
      for (let i = 0; i < checkers.length; i++) {
        checkers[i] === 1
          ? (subsetSum += numbers[i])
          : (oppositeSum += numbers[i]);
      }
      if (subsetSum === oppositeSum) {
        answer = true;
        flag = true;
      }
    } else {
      checkers[position] = 1;
      subsetRecursive(position + 1);
      checkers[position] = 0;
      subsetRecursive(position + 1);
    }
  };
  subsetRecursive(0);
  return answer;
};

const solution2 = numbers => {
  let answer = false;
  let flag = false;
  const totalSum = numbers.reduce((acc, current) => acc + current, 0);
  const subsetRecursive = (position, sum) => {
    if (position === numbers.length) {
      if (flag) return;
      if (totalSum - sum === sum) {
        answer = true;
        flag = true;
      }
    } else {
      subsetRecursive(position + 1, sum + numbers[position]);
      subsetRecursive(position + 1, sum);
    }
  };
  subsetRecursive(0, 0);
  return answer;
};

let t = performance.now();
let a1 = solution([1, 3, 5, 6, 7, 10]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
let t2 = performance.now();
let a2 = solution2([1, 3, 5, 6, 7, 10]);
console.log('Solution2 took ', performance.now() - t2, ' seconds');
console.log('Solution2 answer:', a2);
