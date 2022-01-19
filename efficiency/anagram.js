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
  let sHashMap = new Map();
  if (string1.length !== string2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    sHashMap.has(string1.charAt(i))
      ? sHashMap.set(string1.charAt(i), sHashMap.get(string1.charAt(i)) + 1)
      : sHashMap.set(string1.charAt(i), 1);
  }
  for (let i = 0; i < string2.length; i++) {
    if (!sHashMap.has(string2.charAt(i)) || sHashMap.get(string2.charAt(i)))
      return false;
    sHashMap.set(string2.charAt(i), sHashMap.get(string2.charAt(i)) - 1);
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
