// Find the minimum number from the given array
// Ex) INPUT: 5 3 7 11 2 15 17, OUTPUT: 2

const findMinimum = array => {
  return Math.min(...array);
};

console.log(findMinimum([5, 3, 7, 11, 2, 15, 17]));
