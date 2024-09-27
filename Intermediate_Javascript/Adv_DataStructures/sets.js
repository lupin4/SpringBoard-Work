//Sets are a collection of unique values
//Sets are not indexed-based, so you cannot access elements using index numbers
//Sets are iterables, so you can loop through them using for...of loop or forEach() method
//Sets are dynamic, so you can add or remove elements from them
//Sets are not ordered, so you cannot access elements using index numbers
//sets can be faster than arrays because they are not ordered and they do not have duplicate values
//sets can be used to remove duplicate values from an array

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(set);

//add elements to a set
set.add(11);

console.log(set);

//delete elements from a set
set.delete(1);

console.log(set);

//check if an element exists in a set
console.log(set.has(14));
console.log(set.has(8));

//get the size of a set
console.log(set.size);

//clear a set
set.clear();

console.log(set);
