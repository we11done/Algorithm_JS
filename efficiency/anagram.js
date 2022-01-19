// If the two strings are in a different order of listing the alphabets, but the composition matches, the two words are called anagram.
// For example, AbaAeCe and baeACA have different alphabets in order, but if you look at their composition,
// The alphabets and their numbers match with A(2), a(1), b(1), C(1), and e(2).
// Given two words of the same length, write a program that determines whether the two words are anagram.
// Case-sensitive when discriminating anagram.
// Ex) INPUT: AbaAeCe, baeeACA
//     OUTPUT: true
// Ex2) INPUT: abaCC, Caaab
//      OUTPUT: false

// solved with built-in string & array functions
const solution = (string1, string2) => {
  return (
    string1.split('').sort().join('') === string2.split('').sort().join('')
  );
};

// solved with hashMap
const solution2 = (string1, string2) => {
  let sHashMap1 = new Map();
  let sHashMap2 = new Map();
  if (string1.length !== string2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    sHashMap1.has(string1.charAt(i))
      ? sHashMap1.set(string1.charAt(i), sHashMap1.get(string1.charAt(i)) + 1)
      : sHashMap1.set(string1.charAt(i), 1);
    sHashMap2.has(string2.charAt(i))
      ? sHashMap2.set(string2.charAt(i), sHashMap2.get(string2.charAt(i)) + 1)
      : sHashMap2.set(string2.charAt(i), 1);
  }
  for (let [key, value] of sHashMap1) {
    if (sHashMap1.get(key) !== sHashMap2.get(key)) return false;
  }
  return true;
};

let firstEx = ['AbaAeCe', 'baeeACA'];
let secondEx = ['abaCC', 'Caaab'];

console.log('First Example');
let t = performance.now();
let a1 = solution(...firstEx);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2(...firstEx);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);

console.log('Second Example');
let t_ = performance.now();
let a1_ = solution(...secondEx);
console.log('Solution 1 took ', performance.now() - t_, ' seconds');
console.log('Solution 1 answer:', a1_);
let t2_ = performance.now();
let a2_ = solution2(...secondEx);
console.log('Solution 2 took ', performance.now() - t2_, ' seconds');
console.log('Solution 2 answer:', a2_);
