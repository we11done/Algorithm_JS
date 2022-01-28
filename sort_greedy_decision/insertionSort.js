// When N numbers are entered,
// write a program that sorts them in ascending order and outputs them.
// Use insertion sort algorithm
// Ex) INPUT: [11 ,7 ,5 ,6 ,10 ,9]
//     OUTPUT: [5, 6, 7, 9, 10, 11]

const solution = array => {
  const answer = [...array];
  for (let i = 1; i < answer.length; i++) {
    let temp = answer[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (answer[j] > temp) {
        answer[j + 1] = answer[j];
      } else break;
    }
    answer[j + 1] = temp;
  }
  return answer;
};

let t = performance.now();
let a1 = solution([11, 7, 5, 6, 10, 9]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
