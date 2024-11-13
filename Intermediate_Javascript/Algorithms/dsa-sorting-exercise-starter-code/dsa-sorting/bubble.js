function bubbleSort(arr) {
  let count = 0; // Optional: Keep count for analysis purposes
  let swapped;

  // Outer loop for each pass
  for (let i = 0; i < arr.length; i++) {
    swapped = false;

    // Inner loop for comparison
    for (let j = 0; j < arr.length - i - 1; j++) {
      count++;

      // Swap if the current element is greater than the next
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps occurred, the array is already sorted
    if (!swapped) break;
  }

  console.log("TOTAL COUNT:", count); // Optional: Output count for analysis
  return arr;
}

module.exports = bubbleSort;
