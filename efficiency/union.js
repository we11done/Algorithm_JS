// Given two arrays of integers,
// Write a function that finds union of two arrays
// and sort them in ascending order.
// Ex) INPUT: [1 ,3 ,9 ,5 ,2] , [3 ,2 ,5 ,7 ,8]
//     OUTPUT: [2,3,5]

const solution = (firstA, secondA) => {
  return firstA.filter(num => secondA.includes(num)).sort((a, b) => a - b);
};

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
