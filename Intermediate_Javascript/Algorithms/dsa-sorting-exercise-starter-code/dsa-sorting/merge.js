function merge(arr1, arr2) {
  //create an empty array to store the results
  let results = [];
  //create two pointers to track the current index of each array
  let i = 0;
  let j = 0;
  //compare the values of the two arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // Add remaining elements from arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // Add remaining elements from arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort};