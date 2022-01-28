// The new semester has begun. James was so excited to meet his new friend. There are N students in Hyunsoo's class.
// The new semesterIn order to give class ID to class students,
// the teacher told the class students to stand in a row from the shortest student on the playground.
// The teacher gives the smallest student in the front to class ID from 1 to N.
// James is taller than his friend. But James wanted to get the front number,
// so he switched his position with his friend.
// The teacher did not notice and assigned the students numbers in the order they stood.
// Write a program that outputs the number James received and the number his friend received when given height
// information standing in a row of students in the class where James and his friend switched positions.
// Ex) INPUT: [120 ,125 ,152 ,130 ,135, 135 ,143 ,127 ,160]
//     OUTPUT: [3 , 8]

const solution = array => {
  const currentLine = [...array];
  const correctLine = [...array.sort((a, b) => a - b)];
  const wrongPositions = [];
  for (let i = 0; i < array.length; i++) {
    currentLine[i] !== correctLine[i] && wrongPositions.push(i + 1);
  }
  return wrongPositions;
};

let t = performance.now();
let a1 = solution([120, 125, 152, 130, 135, 135, 143, 127, 160]);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
