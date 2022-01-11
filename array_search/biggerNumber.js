// Given an array of integer, write a function that returns an array of integer
// contains integers that is bigger than previous integer
// Note: always include the first integer in the array
// Ex) INPUT: [7,3,9,5,6,12]
//     OUTPUT: [7,9,6,12]

const solution = array => {
  return array.filter((value, index, array) =>
    index === 0 ? true : value > array[index - 1]
  );
};

console.log(solution([7, 3, 9, 5, 6, 12]));
