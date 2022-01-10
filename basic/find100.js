// Given 9 integers, find 7 integers that sums up to 100
// If there is more than one answer, print any of them.
// Ex) Input:[20,7,23,19,10,15,25,8,13]
//     Output: 20, 7, 23, 19, 10, 8, 13

const solution = array => {
  let result = 'not found';
  let sum = array.reduce((prev, current) => prev + current, 0);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      if (sum - array[i] - array[j] === 100) {
        result = array.filter(
          element => element !== array[i] && element !== array[j]
        );
        break;
      }
    }
  }
  return result;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
