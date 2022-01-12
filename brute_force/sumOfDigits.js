// Write a function that returns integer that has the biggest sum of each digits
// from an array of integers. If there are integers with the same biggest sum, then
// return the bigger integer. E.g. sum of digits of 235 and 1234 are the same, then return 1234
// Ex) INPUT: [128 ,460 ,603 ,40 ,521 ,137 ,123]
//     OUTPUT: 137

const solution = array => {
  let max = Number.MIN_SAFE_INTEGER;
  let maxArr = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
      .toString()
      .split('')
      .reduce((acc, current) => Number(acc) + Number(current), 0);
    if (current > max) {
      maxArr = [];
      max = current;
      maxArr.push(array[i]);
    } else if (current === max) {
      maxArr.push(array[i]);
    }
  }
  return maxArr.length > 1 ? Math.max(...maxArr) : maxArr[0];
};

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
