// Write a code to calculate if the string is palindrome ?

function isPalindrome(text) {
  const removeString = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedString = removeString.split("").reverse().join("");
  return removeString === reversedString;
}

const inputString = "Radar ";
const result = isPalindrome(inputString);
console.log(result);
