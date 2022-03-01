// N numbers are given as input. Sorting N numbers in ascending order, and given M, which is one of the N numbers,
// write a program that determines which position M is in with a binary search. There is no duplicate value.
// Ex) INPUT: N = [23 ,87 ,65 ,12 ,57 ,32 ,99 ,81] M = 32
//     OUTPUT: 3

const solution = (numbers, targetNumber) => {
  const sorted = numbers.sort((a, b) => a - b);
  let low = 0,
    high = numbers.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (sorted[mid] === targetNumber) {
      return mid + 1;
    } else if (sorted[mid] > targetNumber) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

let t = performance.now();
let a1 = solution([23, 87, 65, 12, 57, 32, 99, 81], 32);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
