// We are giving out a pencil for each student.
// Find how many dozens of pancil we need for given number of students (N < 1000)
// Ex) INPUT: 25 , OUTPUT: 3
// Ex2) INPUT 178, OUTPUT: 15

const dozenOfPencil = numberOfStudents => {
  return Math.ceil(numberOfStudents / 12);
};

console.log(dozenOfPencil(25));
console.log(dozenOfPencil(178));
