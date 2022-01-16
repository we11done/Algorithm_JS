// Given an array of integer and a integer value M.
// Write a program that determines how many times
// the sum of successive subsequences
// in this array becomes a integer value M.
// Ex) INPUT: array = [1 ,2 ,1 ,3 ,1 ,1 ,1 ,2] , M = 6
//     OUTPUT: 3 ({2,1,3},{1,3,1,1},{3,1,1,1})

const solution = (array, m) => {
  let counts = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum === m) {
        counts++;
        break;
      }
    }
  }
  return counts;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
