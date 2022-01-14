// You have X number of cards with natural numbers between 1 and 100. There can be several cards of the same number.
// You would like to pick three of them and record the sum of the numbers written on each card. Record all cases where you can pick three.
// Write a program that outputs the Nth largest number of recorded values.
// If the number made from the large number is 25, 25, 23, 23, 22, 20, 19... and the N = 3, then the Nth largest value is 22.
// Ex) INPUT: cards = [13 ,15 ,34 ,23 ,45 ,65 ,33 ,11 ,26 ,42], N = 3
//     OUPUT: 143

const solution = (cards, n) => {
  let sumResult = [];
  for (let i = 0; i < cards.length; i++) {
    let sum = 0;
    let otherCards = cards.filter((ele, index) => index !== i);
    for (let j = 0; j < otherCards.length; j++) {
      let anotherCards = otherCards.filter((ele, index) => index !== j);
      for (let k = 0; k < anotherCards.length; k++) {
        sum = cards[i] + otherCards[j] + anotherCards[k];
        sumResult.push(sum);
      }
    }
  }
  sumResult.sort((a, b) => b - a);
  return [...new Set([...sumResult])][n - 1];
};

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
