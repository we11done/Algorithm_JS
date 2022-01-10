// write a function that finds the longest string from a given array of strings
// Ex) INPUT: ['teacher', 'time', 'student', 'beautiful', 'good']
//     OUTPUT: 'beautiful'

const solution = array => {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let index = 0;
  array.forEach((word, i) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      index = i;
    }
  });
  return array[index];
};

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
