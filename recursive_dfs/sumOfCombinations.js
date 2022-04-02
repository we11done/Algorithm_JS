// Given N integers,
// create a function that outputs
// how many of the combinations of those numbers are the multiple of any integer M.
// For example,
// if you find a combination with 5 numbers 2 4 5 8 12 and the sum of 3 combinations is a multiple of 6,
// there are 2 combinations of 4+8+12 2+4+12.
// Ex) INPUT: numbers = [2, 4, 5, 8, 12] selectedCount = 3 multipleOf = 6
//     OUTPUT: 2

const solution = (numbers, selectedCount, multipleOf) => {
  let count = 0;
  const getSumOfCombinations = (loopCount, index, prevSum) => {
    if (loopCount === selectedCount && sum % multipleOf === 0) {
      return count++;
    }
    for (let i = index; i < numbers.length; i++) {
      sum = numbers[i] + prevSum;
      getSumOfCombinations(loopCount + 1, i + 1, sum);
    }
  };
  getSumOfCombinations(0, 0, 0);
  return count;
};

let t = performance.now();
let a1 = solution([2, 4, 5, 8, 12], 3, 6);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
