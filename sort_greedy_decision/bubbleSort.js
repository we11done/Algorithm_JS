// When N numbers are entered,
// write a program that sorts them in ascending order and outputs them.
// Use bubble sort algorithm
// Ex) INPUT: [13 ,5 ,11 ,7 ,23 ,15]
//     OUTPUT: [5, 7, 11, 13, 15, 23]

const solution = array => {
  const answer = [...array];
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      answer[j] > answer[j + 1] &&
        ([answer[j], answer[j + 1]] = [answer[j + 1], answer[j]]);
    }
  }
  return answer;
};

let t = performance.now();
let a1 = solution([13, 5, 11, 7, 23, 15]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
