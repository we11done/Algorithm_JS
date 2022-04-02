// One number from 1 to N is written in the top row.
// And from the second line, the value added to the top two is stored like Pascal's triangle.
// For example, if N is 4 and there are 3, 1, 2, and 4 in the top row, the following triangle is drawn.
// 3 1 2 4
//  4 3 6
//   7 9
//   16
// Write a function that finds the number in the top row when N and the sum are given.
// Ex) INPUT: n = 4, sum = 16
//     OUTPUT: [3, 1, 2, 4]

const solution = (n, sum) => {
  let answer;
  let flag = false;
  const temp = [];
  const checkers = Array.from({ length: n }, () => 0);
  const factorial = number => {
    if (number < 1) return 1;
    return number * factorial(number - 1);
  };
  const combinations = Array.from(
    Array(n),
    (_, i) => factorial(n - 1) / (factorial(n - 1 - i) * factorial(i))
  );

  const getTargetPermutation = (number, accumulator) => {
    if (flag) return;
    if (n === number && accumulator === sum) {
      answer = [...temp];
      flag = true;
    } else {
      for (let i = 0; i < n; i++) {
        if (checkers[i] === 0) {
          checkers[i] = 1;
          temp[number] = i + 1;
          getTargetPermutation(
            number + 1,
            accumulator + temp[number] * combinations[number]
          );
          checkers[i] = 0;
        }
      }
    }
  };
  getTargetPermutation(0, 0);

  return answer;
};

let t = performance.now();
let a1 = solution(4, 16);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
