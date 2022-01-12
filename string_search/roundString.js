// Write a function that returns true if given string is a round string,
// false other wise.
// Ex) INPUT: goog , OUTPUT: true
// Ex2) INPUT: good, OUTPUT: false

const solution = string => {
  // Solved with for loop
  // let half = Math.floor(string.length / 2);
  // let firstHalf = '';
  // let secondHalf = '';
  // for (let i = 0; i < half; i++) {
  //   firstHalf += string.charAt(i);
  //   secondHalf += string.charAt(string.length - 1 - i);
  // }
  // return firstHalf === secondHalf;
  // Solved with split & join
  return string === string.split('').reverse().join('');
};

console.log(solution('goog'));
console.log(solution('good'));
