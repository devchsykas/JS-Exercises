const palindromes = function (str) {
  // Flag to check if the given string is a palindrom
  let flag = true;
  // Finding the length of the string
  let len = str.length;
  // Converting the string to lowercase
  str = str.toLowerCase();
  // Initializing low index variable
  let low = 0;
  // Initializing high index variable
  let high = len - 1;
  // Running the loop until high is greater than low
  while (low < high) {
    // If the characters are not same, set the flag to false
    if (str[high] != str[low]) {
      flag = false;
      // and break from the loop
      break;
    }
    // Increment the low index variable
    low++;
    // Decrement the high index variable
    high--;
    // Check if flag is true or false
    if (flag) {
      console.log("Yes, the given string is a palindrome");
    } else {
      console.log("No, the given string is not a palindrome");
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
