// Write a program that outputs the result of the calculation given a posterior calculation equation.
// The first line is given a rear calculation equation.
// The length of the equation does not exceed 50.
// The equation consists only of numbers from 1 to 9 and operators +, -, *, and /.
// Ex) INPUT: '352+*9-'
//     OUTPUT: 12

const solution = string => {
  const split = string.split('');
  const numbers = [];
  for (let i = 0; i < split.length; i++) {
    if (Number(split[i])) {
      numbers.push(Number(split[i]));
    } else {
      let firstNum = numbers.pop();
      let secondNum = numbers.pop();
      let result =
        split[i] === '+'
          ? secondNum + firstNum
          : split[i] === '-'
          ? secondNum - firstNum
          : split[i] === '*'
          ? secondNum * firstNum
          : secondNum + firstNum;
      numbers.push(result);
    }
  }
  return numbers[0];
};

let t = performance.now();
let a1 = solution('352+*9-');
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
