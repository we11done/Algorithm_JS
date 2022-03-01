// Genie Records is planning to make a DVD of singer Sam's live video and sell it.
// A total of N songs are included in the DVD, and the order in the live should be maintained when recording on the DVD.
// In other words, in order to record songs 1 and 5 on the same DVD, all songs between 1 and 5 must also be recorded on the same DVD.
// Genie Records is not sure if DVDs will be sold, so they are trying to reduce DVDs wasted on this business as much as possible.
// After much consideration, Genie Records decided to record all videos on DVDs.
// At this time, the size (recordable length) of the DVD is minimized.
// And all DVDs must be of the same size to reduce manufacturing costs.
// Write a function that calucates the minimum size of the DVD.
// Note: Recording 1 miniute of a song takes 1 memory size of DVD
// Ex) INPUT: length of the song in miniutes = [1,2,3,4,5,6,7,8,9], number of DVD = 3
//     OUTPUT: 17

const solution = (songs, numberOfDVD) => {
  let maxSize = songs.reduce((acc, current) => acc + current, 0);
  let minSize = Math.max(...songs);
  let dvdMinSize;
  while (minSize <= maxSize) {
    let mid = parseInt((minSize + maxSize) / 2);
    let dvdCount = 1;
    let songLength = 0;
    for (let i = 0; i < songs.length; i++) {
      songLength += songs[i];
      if (songLength > mid) {
        songLength = songs[i];
        dvdCount++;
      }
    }
    if (dvdCount <= numberOfDVD) {
      dvdMinSize = mid;
      maxSize = mid - 1;
    } else {
      minSize = mid + 1;
    }
  }
  return dvdMinSize;
};

let t = performance.now();
let a1 = solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log('Solution took ', performance.now() - t, ' seconds');
console.log('Solution answer:', a1);
