// The teacher asked the students to line up infront of him/her in a random order.
// The teacher can only see the students who are taller than the previous students lined up
// Given an array of students' height in order of the line,
// write a function that returns number of students who are visible to the teacher.
// Ex) INPUT: [130,135,148,140,145,150,150,153]
//     OUTPUT: 5

const solution = array => {
  let count = 1;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      count++;
      max = array[i];
    }
  }
  return count;
};

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
