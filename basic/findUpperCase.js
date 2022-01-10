// Find the number of upper case letter from given string
// Ex) INPUT: CanadaLifeIsGood
//     OUTPUT: 4

const solution = str => {
  return str.split(/[A-Z]/).length - 1;
};

console.log(solution('CanadaLifeIsGood'));
