// When N integers are entered, you have to sort the entered values.
// Negative integers should be at the front and positive integers at the back.
// In addition, the order of positive and negative integers should remain unchanged.
// The number 0 is not entered.
// Ex) INPUT: [1 ,2 ,3 ,-3 ,-2 ,5 ,6 ,-6]
//     OUTPUT: [-3 ,-2 ,-6 ,1 ,2 ,3 ,5 ,6]

const solution = array => {
  const answer = [...array];
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      answer[j] > 0 &&
        0 > answer[j + 1] &&
        ([answer[j], answer[j + 1]] = [answer[j + 1], answer[j]]);
    }
  }
  return answer;
};

let t = performance.now();
let a1 = solution([1, 2, 3, -3, -2, 5, 6, -6]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
