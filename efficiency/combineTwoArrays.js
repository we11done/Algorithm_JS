// Given two arrays of integers,
// combine two arrays and sort them in ascending order.
// Ex) INPUT: [1 ,3 ,5] , [2 ,3 ,6 ,7 ,9]
//     OUTPUT: [1 ,2 ,3 ,3 ,5 ,6 ,7 ,9]

const solution = (firstA, secondA) => {
  return [...firstA, ...secondA].sort((a, b) => a - b);
};

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
