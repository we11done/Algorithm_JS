// Toronto started the 10th-day-no-driving policy to prevent traffic
// jams. The 10th-day-no-driving policy is to restrict vehicles on the
// road if the unit digit of its plate number matches the unit digit of the current day.
// For example, if the plate number is 'XYZ 123', this vehicle is not allowed to be on the road every x3rd day.

// Write a function that takes a list of plate numbers and the day of the month to count how many vehicles should be restricted on that day.

// Ex) INPUT ["XYZ 123", "ABC 120", "DEF 444", "VEC 543"] , 13
//     OUTPUT 2

const solution = (plates, day) => {
  return plates.filter(
    plate => plate[plate.length - 1] === (day % 10).toString()
  ).length;
};

console.log(solution(['XYZ 123', 'ABC 120', 'DEF 444', 'VEC 543'], 13));
