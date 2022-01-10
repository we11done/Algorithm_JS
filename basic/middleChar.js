// write a function takes a sting and prints the middle character of the string.
// if the length of the string is even number, print middle 2 characters.
// Ex) INPUT: StuDy, OUTPUT: u
// Ex2) INPUT: CaNaDa, OUTPUT: Na

const solution = str => {
  return Math.floor(str.length) % 2 === 1
    ? str.substring(str.length / 2, str.length / 2 + 1)
    : str.substring(str.length / 2 - 1, str.length / 2 + 1);
};

console.log(solution('StuDy'));
console.log(solution('CaNaDa'));
