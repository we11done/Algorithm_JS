// Bob has to make a one-year class plan.
// There are mandatory courses in class. You must complete this required course, and the order is set.
// If the total subjects are A, B, C, D, E, F, and G, and if the required subjects are given as CBA,
// the required subjects are C, B, and A, and you must make a class plan in this order.
// Here, the order is that subject B should be taken after completing subject C,
// and subject A should be taken after completing subject C and B.
// If Bob makes a class plan with C, B, D, A, G, and E, it is a proper design,
// but if it is planned in the order of C, G, E, A, D, and B, it becomes a poorly designed class plan.
// The class plan is interpreted as starting the next class when the previous class is completed in that order.
// It is assumed that each subject in the class plan must be completed.
// Write a program that outputs true if Bob's N class designs are well designed and false if they are wrong.

// Solved with array.join()
const solution = (required, curriculumDesign) => {
  const array = [];
  for (let course of curriculumDesign) {
    if (required.includes(course)) array.push(course);
  }
  return required === queue.join('');
};

// Solved with queue
const solution2 = (required, curriculumDesign) => {
  const queue = required.split('');
  for (let course of curriculumDesign) {
    if (queue.includes(course) && queue.shift() !== course) {
      return false;
    }
  }
  return queue.length === 0;
};

let t = performance.now();
let a1 = solution('CBA', 'CBDAGE');
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2('CBA', 'CBDAGE');
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
