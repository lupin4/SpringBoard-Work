function sum(...nums) {
  return nums.reduce((sum, n) => sum + n);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const sumAll = (...values) => {
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
};

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
