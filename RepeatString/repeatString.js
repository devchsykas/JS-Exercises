const repeatString = function (word, times) {
  /**
   * Using a for loop
   *
   * let output = "";
   * for (let i = 0; i < times; i++)
   * {
   *  output += word;
   * }
   * return output;
   *
   */

  //If times is positive, return the repeated string
  if (times > 0) {
    let output = word.repeat(times);
    return output;
  }
  //Else if times is zero, return an empty string if true
  else if (times === 0) {
    return "";
  }
  // Else it times is negative, return an ERROR message if true
  else {
    return "ERROR";
  }
};

console.log(repeatString("hey", 3));
console.log(repeatString("hey", 10));
console.log(repeatString("hey", 1));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));
console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
