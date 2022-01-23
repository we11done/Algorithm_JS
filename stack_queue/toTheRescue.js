// The only daughter of a neighboring country of a kingdom, the princess,
// was taken by a monster in the forest. There are N princes in the kingdom,
// and they each say they will go save the princess.
// The king decided to decide on a prince who would go to save the princess in the following way.
// The king numbers the princes in order of age from 1 to N.
//  And let Prince 1 to Prince N sit in a circle clockwise.
// Then, from Prince 1, turn clockwise and start with 1 to shout out the number.
//  When a prince shouts K (a specific number),
// the prince is excluded from saving the princess and comes out of the circle.
// Then, starting from the next prince again from 1, shout out the number.
//  In this way, the last remaining prince can go to save the princess.
// For example, let's say there are a total of eight princes,
// and the prince who shouted 3 is excluded. At first, Prince 3 is excluded by shouting 3.
// Prince 6, 1, 5, 2, 8, and 4 are then excluded one after another,
// and Prince 7, who remains until the end, goes to save the princess.
//  Write a program that outputs the number of the prince to go to save the princess when N and K are given.
// Ex) INPUT: number of princes (N) = 8 , number = 3
//     OUTPUT: 7

const solution = (numOfPrinces, number) => {
  let queue = Array.from({ length: numOfPrinces }, (_, i) => ++i);
  let count = 0;
  while (queue.length !== 1) {
    count++;
    if (count === number) {
      queue.shift();
      count = 0;
    } else {
      queue.push(queue.shift());
    }
  }
  return queue[0];
};

let t = performance.now();
let a1 = solution(8, 3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
