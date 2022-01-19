// Write a program to find out the number of substrates in S that are T strings and anagram in S strings.
// Case-sensitive when discriminating anagram. The substring must be a continuous string.
// Ex) INPUT: S = 'bacaAacba', T = 'abc'
//     OUTPUT: 3 ('bac','acb','cba')

const solution = (string, word) => {
  let counts = 0;
  let window = string.substring(0, word.length);
  const sortedChar = word.split('').sort().join('');
  for (let i = word.length; i <= string.length; i++) {
    window.split('').sort().join('') === sortedChar && counts++;
    window = window.substring(1, window.length) + string.charAt(i);
  }
  return counts;
};

let t = performance.now();
let a1 = solution('bacaAacba', 'abc');
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
