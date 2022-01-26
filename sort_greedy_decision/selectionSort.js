// When N numbers are entered,
// write a program that sorts them in ascending order and outputs them.
// Use selection sort algorithm
// Ex) INPUT: [13 ,5 ,11 ,7 ,23 ,15]
//     OUTPUT: [5, 7, 11, 13, 15, 23]

const solution = array => {
  const answer = [...array];
  for (let i = 0; i < answer.length; i++) {
    let index = i;
    for (let j = i; j < answer.length; j++) {
      answer[j] < answer[index] && (index = j);
    }
    [answer[i], answer[index]] = [answer[index], answer[i]];
  }
  return answer;
};

let t = performance.now();
let a1 = solution([13, 5, 11, 7, 23, 15]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
