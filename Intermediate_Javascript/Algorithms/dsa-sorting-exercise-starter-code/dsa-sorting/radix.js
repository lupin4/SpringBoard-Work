function radixSort(arr) {
  const maxDigit = mostDigits(arr);
  for (let k = 0; k < maxDigit; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      
      // Place each number in the corresponding bucket based on the current digit
      for (let i = 0; i < arr.length; i++) {
          let digit = getDigit(arr[i], k);
          digitBuckets[digit].push(arr[i]);
      }

    // Flatten the buckets back into the array using the rest operator
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

// Helper function to get the digit at a specific place
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to determine the number of digits in the largest number
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Export all functions that are being tested
module.exports = {
  radixSort,
  getDigit,
  digitCount,
  mostDigits
};
