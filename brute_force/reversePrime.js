// Given an array of Integers,
// For each integer, reverse the digits and add it to array if it is a prime number.
// Write a function returns an array of prime number
// E.g. 32 -> reverse -> 23 = prime number, 20 -> reverse -> 2 = prime number
// Ex) INPUT: 32 55 62 20 250 370 200 30 100
//     OUTPUT: 23, 2, 73, 2, 3

const solution = array => {
  let result = [];
  for (let i of array) {
    let reversed = Number(i.toString().split('').reverse().join(''));
    if (reversed !== 1) {
      let flag = true;
      for (let j = 2; j <= Math.sqrt(reversed); j++) {
        if (reversed % j === 0) {
          flag = false;
          break;
        }
      }
      flag && result.push(reversed);
    }
  }
  return result;
};
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
