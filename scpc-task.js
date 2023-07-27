// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function makeReversedString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(makeReversedString("Hello radar"));

// // Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function positiveNumberSum(input) {
  let sum = 0;
  for (let number of input) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(positiveNumberSum([-7, 5, 15, -5, -7]));

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function findFrequentElement(input) {
  let counts = {};
  let maxCount = 0;
  let frequent;

  for (let num of input) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      frequent = num;
    }
  }

  return frequent;
}

console.log(findFrequentElement([2, 4, 4, 1, 1, 3, 9, 1]));

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbers(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

console.log(findTwoNumbers([2, 3, 9, 8, 11, 15], 26));
