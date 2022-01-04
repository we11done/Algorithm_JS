// Given number N, find the sum of 1 - N
// Ex) INPUT: 6, OUPUT: 21
// Ex2) INPUT: 10, OUPUT: 55

const sumOfOneToN = number => {
  // using for loop
  // let sum = 0;
  // for (let i = 1; i <= number; i++) {
  //   sum += i;
  // }
  // return sum;
  // using math formula
  return (number * (number + 1)) / 2;
};

console.log(sumOfOneToN(6));
console.log(sumOfOneToN(10));
