// sets
// sets are like arrays with only unique values
const mySet = new Set();

// add elements to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

// get the size of the set
console.log(mySet.size);

// check if the set has a value
console.log(mySet.has(1));

// sets can only accept one argument
const mySet2 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5]);
console.log(mySet2);

// iterate over the set using for of
for (x of mySet2) {
  console.log(x);
}
// sets consider strings as one element
const mySet3 = new Set("hello");
console.log(mySet3);

mySet3.add("world");
console.log(mySet3);

// delete an element from the set
mySet3.delete("world");
console.log(mySet3);

// clear the set
mySet3.clear();

// sets are useful for removing duplicates from an array
const myArray = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5];
const mySet4 = new Set(myArray);
console.log(mySet4);

// turn the set back into an array
const myArray2 = Array.from(mySet4);
console.log(myArray2);
