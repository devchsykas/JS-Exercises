const reverseString = function (word) {
  //Use the split() method to return a new array
  const splitWord = word.split("");
  console.log(splitWord);
  // Use the reverse method to reverse the new created array
  const reverseArray = splitWord.reverse();
  console.log(reverseArray);
  // Use the join() method to join all elements of the array into a string
  const joinArray = reverseArray.join("");
  console.log(joinArray);
  //Return the reversed string
  return joinArray;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
