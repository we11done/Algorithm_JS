// Given an array of integer and a integer value M.
// Write a program to find out how many times
// the sum of successive subsequences in this sequence
// is less than or equal to a integer value M.
// Ex) INPUT: array = [1 ,3 ,1 ,2 ,3], M = 5
//     OUTPUT: 10 ({1},{3},{1},{2},{3},{1,3},{3,1},{1,2},{2,3},{1,3,1})

// Nested for loop O(N^2)
const solution = (array, m) => {
  let counts = array.filter(num => num <= m).length;
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum <= m) {
        counts++;
      } else {
        break;
      }
    }
  }
  return counts;
};

// Two pointer algorithm O(N)
const solution2 = (array, m) => {
  let leftIndex = 0,
    sum = 0,
    counts = 0,
    rightIndex = 0;
  for (; rightIndex < array.length; ) {
    if (sum < m) {
      array[rightIndex] <= m && counts++;
      sum += array[rightIndex++];
    } else {
      sum -= array[leftIndex++];
    }
    if (sum <= m) counts++;
  }
  return counts;
};

let t = performance.now();
let a1 = solution([1, 3, 1, 2, 3], 5);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2([1, 3, 1, 2, 3], 5);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
