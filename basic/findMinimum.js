// Write a function that finds minimum value of given array of integer (N =< 100)
// DO NOT SORT the array
// ex) INPUT: [6,5,11]
//     OUTPUT: 5

const findMinimum = array => {
  let min = Number.MAX_VALUE;
  for (let num of array) {
    min = min > num ? num : min;
  }
  return min;
};

console.log(findMinimum([6, 5, 11]));
