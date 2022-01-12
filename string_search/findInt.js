// Write a function that extract integers from a given string.
// EX) INPUT: g0en2T0s8eSoft
//     OUTPUT: [0,2,0,8]

const solution = string => {
  return string.toLowerCase().replace(/[a-z]/g, '').split('');
};

console.log(solution('g0en2T0s8eSoft'));
