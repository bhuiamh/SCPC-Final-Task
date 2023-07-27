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
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(first, method, second) {
  switch (method) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "-", 5));
console.log(calculator(10, "*", 5));
console.log(calculator(10, "/", 5));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function createPassword(length) {
  const passwordCharacter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordCharacter.length);
    password += passwordCharacter[randomIndex];
  }
  return password;
}

console.log(createPassword(12));

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function convertRomanToInt(roman) {
  const relation = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = relation[roman[i]];
    const next = relation[roman[i + 1]];

    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
}

console.log(convertRomanToInt("IX"));
console.log(convertRomanToInt("III"));
console.log(convertRomanToInt("XXI"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(array) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of array) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

console.log(findSecondSmallest([1, 4, 2, 7, 9, 5, 3, 6, 8]));
