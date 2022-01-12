// Given a string of upper case letter,
// Write a function If the same character appears squentially,
// write a number of the character appeared squentially on the right side of the character
// if the number of characters appeared squentially is less than two, do not write any number beside the character.
// Ex) INPUT: KKHSSSSSSSSE
//     OUPUT: K2HS7E

const solution = string => {
  let count = 1;
  let prev = string.charAt(0);
  let output = '';
  let input = string + ' ';
  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i) === prev) {
      count++;
    } else {
      count === 0 ? (output += prev) : (output += prev + count);
      prev = input.charAt(i);
      count = 0;
    }
  }
  return output;
};

console.log(solution('KKHSSSSSSSSE'));
