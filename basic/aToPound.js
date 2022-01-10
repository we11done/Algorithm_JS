// Write a function takes a string that replace all 'A' to '#'
// Ex) INPUT: 'BANANA'
//     OUTPUT: 'B#N#N#'

const solution = str => {
  return str.replace(/[A]/g, '#');
};

console.log(solution('BANANA'));
