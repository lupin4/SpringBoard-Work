// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// if the callback function returns true, the element is added to the new array.
// if the callback function returns false, the element is not added to the new array.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// using set for faster lookup time
const containsVowel = (word) => {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  for (let char of word.toLowerCase()) {
    if (vowelsSet.has(char)) {
      return true;
    }
  }
  return false;
};

// using regex
// const containsVowel = (word) => /[aeiou]/i.test(word);

function myFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter(containsVowel);
console.log(result);

const result2 = myFilter(words, containsVowel);
console.log(result2);

const everyOtherWord = myFilter(words, (element, index) => index % 2 === 0);
console.log(everyOtherWord);



function removeDuplicates(array, key) {
  const seen = new Set();
  return array.filter((item) => {
    const keyValue = item[key];
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
}


