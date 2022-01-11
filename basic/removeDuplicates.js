// write a function that removes all duplicated character from given string
// Ex) INPUT: ksekkset
//     OUPUT: kset

const solution = str => {
  return [...new Set(str.split(''))].join('');
};
console.log('Answer for the first question');
console.log(solution('ksekkset'));

// write a function that removes duplicated word from given array
// Ex) INPUT: [good, time, good, great, word, student, student, word, time]
//     OUTPUT: [good, time, great, word, student]

const solution2 = array => {
  return [...new Set(array)];
};

console.log('Answer for the second question');
console.log(
  solution2([
    'good',
    'time',
    'good',
    'great',
    'word',
    'student',
    'student',
    'word',
    'time',
  ])
);
