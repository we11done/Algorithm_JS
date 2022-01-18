// Given an array of integer and a integer value M.
// Write a program that determines how many times
// the sum of successive subsequences
// in this array becomes a integer value M.
// Ex) INPUT: array = [1 ,2 ,1 ,3 ,1 ,1 ,1 ,2] , M = 6
//     OUTPUT: 3 ({2,1,3},{1,3,1,1},{3,1,1,1})

// Nested for loop: O(N^2)
const solution = (array, m) => {
  let counts = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum === m) {
        counts++;
        break;
      }
    }
  }
  return counts;
};

// Two pointers algorithm: O(N)
const solution2 = (array, m) => {
  let counts = 0;
  let leftIndex = 0;
  let rightIndex = 1;
  let sum = array[0];
  for (; rightIndex < array.length; ) {
    if (sum < m) {
      sum += array[rightIndex++];
    } else {
      if (sum === m) counts++;
      sum -= array[leftIndex++];
    }
  }
  return counts;
};

let t = performance.now();
let a1 = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
