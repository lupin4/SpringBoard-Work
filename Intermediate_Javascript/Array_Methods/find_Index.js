const scores = [
  0, 0, 0, 0, 39, 42, 54, 59, 63, 67, 71, 72, 75, 80, 88, 90, 91, 95, 100,
];

//find() returns the first value that satisfies the condition
const passingGrade = scores.find((score) => score >= 60);
console.log(passingGrade);

//findIndex() returns the index of the first value that satisfies the condition
const firstIndex = scores.findIndex((score) => score >= 60);
console.log(firstIndex);
// arrayPartition() returns an array of two arrays,
// one for the values less than the pivot and one for the values greater than the pivot
// it uses findIndex() to find the index of the first value greater than the pivot
// useful for splitting an array into two for further processing
function arrayPartition(arr, pivot) {
  const pivotIndex = arr.findIndex(function (el) {
    return el > pivot;
  });
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i <= pivotIndex) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return [arr1, arr2];
}

arrayPartition(scores, 60);


function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

myFind(scores, (score) => score >= 60);

