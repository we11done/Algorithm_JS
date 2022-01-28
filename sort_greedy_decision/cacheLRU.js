// Cash memory is a high-speed temporary memory between
// the CPU and the main memory device (DRAM) that stores tasks to be processed
// by the CPU and uses them right away to speed up processing.
// It is so expensive and small in capacity that it should be used efficiently.
// This computer follows the LRU algorithm as the rules for using cache memory.
// The LRU algorithm stands for Least Recently Used.
// The algorithm is to remove the least recent work from the cache.
// 1) Cache Miss : If the CPU uses a new task without a cache,
//    it will be Cache miss, and all the tasks will be pushed back,
//    and the new task will be placed at the front of the cache.
// 2) Cache Hit : If the CPU uses the task while the task is in the cache,
//    it becomes Cache Hit, the rest of the task is pushed back one space,
//     and the task is placed at the front.
// Given the size of the cache, and if the CPU processes N tasks one after another,
// create a program that outputs the status of the cache memory one by one, starting with the most recently used tasks.
// Ex) INPUT: Cache Size = 5 , Tasks = [1 ,2 ,3 ,2 ,6 ,2 ,3 ,5 ,7]
//     OUTPUT: [7, 5, 3, 2, 6]

// solved with built-in functions
const solution = (cacheSize, tasks) => {
  const cacheMemory = [];
  for (let i = 0; i < tasks.length; i++) {
    if (cacheMemory.includes(tasks[i])) {
      // cache hit
      cacheMemory.splice(cacheMemory.indexOf(tasks[i]), 1);
      cacheMemory.unshift(tasks[i]);
    } else if (cacheMemory.length < cacheSize) {
      // cache miss when memory is not full
      cacheMemory.unshift(tasks[i]);
    } else {
      // cache miss when memory is full
      cacheMemory.pop();
      cacheMemory.unshift(tasks[i]);
    }
  }
  return cacheMemory;
};

// solved with insertion sort
const solution2 = (cacheSize, tasks) => {
  const cacheMemory = Array(cacheSize).fill(0);
  for (let i = 0; i < tasks.length; i++) {
    if (cacheMemory.includes(tasks[i])) {
      // cache hit
      for (let j = cacheMemory.indexOf(tasks[i]); j >= 1; j--) {
        cacheMemory[j] = cacheMemory[j - 1];
      }
    } else {
      // cache miss
      for (let j = cacheSize - 1; j >= 1; j--) {
        cacheMemory[j] = cacheMemory[j - 1];
      }
    }
    cacheMemory[0] = tasks[i];
  }
  return cacheMemory;
};

let t = performance.now();
let a1 = solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
console.log('Solution 1 took ', performance.now() - t, ' seconds');
console.log('Solution 1 answer:', a1);
let t2 = performance.now();
let a2 = solution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
console.log('Solution 2 took ', performance.now() - t2, ' seconds');
console.log('Solution 2 answer:', a2);
