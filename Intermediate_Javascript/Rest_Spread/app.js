function sum(...nums) {
  return nums.reduce((sum, n) => sum + n);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const sumAll = (...values) => {
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
};

// rest operator collects all arguments into an array

// rest operator collects the remaining arguments into an array

// rest operator is used in the function parameter list and must be the last parameter



console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// spread operator spreads the elements of an array across an argument
// spread operator is used in the function call and must be the last argument
// rest and spread use the same syntax

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(...arr);

// spread operator is used to copy the elements of an array into another array

const arr2 = [...arr];

console.log(arr2);

// spread operator is used to copy the elements of an object into another object

const obj = {
  name: "John",
  age: 20,
};

const obj2 = { ...obj };

// object literal

const obj3 = { ...obj, ...obj2 };

console.log(obj3);

// spread copy is only shallow copy so only one level deep

const obj4 = {
  name: "John",
  age: 20,
  address: {
    city: "New York",
    state: "NY",
  },
};

const obj5 = { ...obj4 };

console.log(obj5);














