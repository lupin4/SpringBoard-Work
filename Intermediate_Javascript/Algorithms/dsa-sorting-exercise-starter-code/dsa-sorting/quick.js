/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivotIndex = start;
  let pivotValue = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, start, pivotIndex);
  return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

module.exports = {
  pivot,
  quickSort,
};