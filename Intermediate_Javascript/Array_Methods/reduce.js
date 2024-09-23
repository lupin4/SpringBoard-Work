const nums = [20, 34, 56, 78, 90, 12, 45, 67, 89, 100, -12, -6];

// traditional way to sum the array
let total = 0;
for (const num of nums) {
  total += num;
}
console.log(total);

// traditional way of finding the minimum number in the array
let oldMin = nums[0];
for (const num of nums) {
  if (num < oldMin) {
    oldMin = num;
  }
}
console.log(oldMin);

// traditional way of counting characters in a string to make an object
const str = "lollapalooza";
let count = 0;
const charCount = {};
for (let char of str) {
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }

  count++;
}
console.log(charCount);

// using reduce to find the minimum number in the array
const min = nums.reduce((min, curr) => (curr < min ? curr : min), nums[0]);
console.log(min);

// using reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// using reduce to find the maximum number in the array
const max = nums.reduce((max, curr) => (curr > max ? curr : max), nums[0]);
console.log(max);

const charCountReduce = str.split("").reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(charCountReduce);

const voters = [
  { name: "John", age: 18, voted: true },
  { name: "Jane", age: 21, voted: true },
  { name: "Jim", age: 34, voted: true },
  { name: "Jill", age: 21, voted: true },
];

const voterResults = voters.reduce(
  (acc, curr) => {
    if (curr.age >= 18 && curr.age <= 25) {
      acc.numYoungPeople++;
    }
    if (curr.age >= 18 && curr.age <= 25 && curr.voted) {
      acc.numYoungVoters++;
    }
    return acc;
  },
  { numYoungPeople: 0, numYoungVoters: 0 }
);

console.log(voterResults);

const words = ["Hello", "world!", "This", "is", "a", "reduced","sentence."];
// reduce accepts an accumulator and a current value
// it returns a single value
// it is used to reduce the array to a single value
// it is used to calculate the sum of the array

const sentence = words.reduce((acc, curr) => `${acc} ${curr}`, "");
console.log(sentence);


// use reduce to find the average of an array
const average = nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
console.log(average);

