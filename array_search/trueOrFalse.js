// There is a true or false test.
// If student get the answer squentially, then the student gets bonus marks as many as the answer streak goes.
// For example, if a student gets the 3 problems squentially, then the marks for the 3 problems would be 1 + 2 + 3 = 6,
// Given an array of boolean values (true for the right answer and false for the wrong answer),
// write a function that calculates test mark.
// Ex) INPUT: [true, false, true, true, true, false, false, true, true, false]
//     OUTPUT: 10

const solution = array => {
  let streak = 0;
  let mark = 0;
  for (let result of array) {
    result ? streak++ : (streak = 0);
    mark += streak;
  }
  return mark;
};

console.log(
  solution([true, false, true, true, true, false, false, true, true, false])
);
