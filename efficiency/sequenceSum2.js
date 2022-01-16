// Given an array of integer and a integer value M.
// Write a program to find out how many times
// the sum of successive subsequences in this sequence
// is less than or equal to a integer value M.
// Ex) INPUT: array = [1 ,3 ,1 ,2 ,3], M = 5
//     OUTPUT: 10 ({1},{3},{1},{2},{3},{1,3},{3,1},{1,2},{2,3},{1,3,1})

const solution = (array, m) => {
  let counts = array.filter(num => num <= m).length;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum <= m) {
        counts++;
      } else {
        break;
      }
    }
  }
  return counts;
};

console.log(solution([1, 3, 1, 2, 3], 5));
