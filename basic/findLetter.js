// Write a function that finds occurence of given letter from a line of string
// Ex) INPUT> String Line: COMPUTERPROGRAMMING, Letter: R
//     OUPUT: 3

const solution = (stringLine, letter) => {
  let count = 0;
  for (let char of stringLine) {
    char === letter && count++;
  }
  return count;
};

console.log(solution('COMPUTERPROGRAMMING', 'R'));
