// Write a function that returns true if given string is a palindrome,
// false other wise. the function should not be case sensitive.
// Ex) INPUT: gooG , OUTPUT: true
// Ex2) INPUT: good, OUTPUT: false
// Ex3) INPUT: found7 time study Yduts emit 7Dnuof, OUTPUT: true
const solution = string => {
  // Solved with for loop
  // let half = Math.floor(string.length / 2);
  // let firstHalf = '';
  // let secondHalf = '';
  // for (let i = 0; i < half; i++) {
  //   firstHalf += string.toUpperCase().charAt(i);
  //   secondHalf += string.toUpperCase().charAt(string.length - 1 - i);
  // }
  // return firstHalf === secondHalf;
  // Solved with split & join
  return (
    string.toUpperCase() === string.toUpperCase().split('').reverse().join('')
  );
};

console.log(solution('goog'));
console.log(solution('good'));
console.log(solution('found7 time study Yduts emit 7Dnuof'));
