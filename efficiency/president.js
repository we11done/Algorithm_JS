// Candidates A, B, C, D, and E have registered as candidates for the class president.
// On the ballot, the symbols of the candidates selected by the classmates are written,
// and the teacher is presenting the symbols. After the teacher's presentation,
// write a program that prints out which candidate has become the class president.
// Let's assume that the results are out so that one class president must be elected.
// Ex) INPUT: [B, A, C, B, A, C, C, A, C, C, B, D, E, D, E]
//     OUTPUT: C

// Array solution
const solution = array => {
  let candidates = [...new Set(array)].sort();
  let voteCounts = Array(candidates.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    array[i] === 'A' && voteCounts[0]++;
    array[i] === 'B' && voteCounts[1]++;
    array[i] === 'C' && voteCounts[2]++;
    array[i] === 'D' && voteCounts[3]++;
    array[i] === 'E' && voteCounts[4]++;
  }
  return candidates[voteCounts.indexOf(Math.max(...voteCounts))];
};

// Hash Map solution
const solution2 = array => {
  let hashMap = new Map();
  let president;
  for (let i = 0; i < array.length; i++) {
    hashMap.has(array[i])
      ? hashMap.set(array[i], hashMap.get(array[i]) + 1)
      : hashMap.set(array[i], 1);
  }
  for (let [key, value] of hashMap) {
    value === Math.max(...hashMap.values()) && (president = key);
  }
  return president;
};
let testArray = [
  'B',
  'A',
  'C',
  'B',
  'A',
  'C',
  'C',
  'A',
  'C',
  'C',
  'B',
  'D',
  'E',
  'D',
  'E',
];
let t = performance.now();
let a1 = solution(testArray);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2(testArray);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
