// Given array of test result in integer,
// Rank the test result.
// If the same result exists, they get the same rank.
// For example, if there is [92,92,92,88,87] then three 92s get 1st rank and 88 gets 4th rank and so on.
// Ex) INPUT: [87,89,92,92,100,75,85]
//     OUPUT: [5,4,2,2,1,7,6]

const solution = array => {
  let rank = Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i] < array[j] && rank[i]++;
    }
  }
  return rank;
};

console.log(solution([87, 89, 92, 92, 100, 75, 85]));
