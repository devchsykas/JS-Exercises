const removeFromArray = function (array, itemToRemove) {
  //Remove a single item from the array
  // return array.filter((item) => item !== itemToRemove);

  return array.filter((item) => {
    return !itemToRemove.includes(item);
  });
};

console.log(removeFromArray([1, 2, 3, 4], [3]));

console.log(removeFromArray([1, 2, 3, 4], [3, 2]));

console.log(removeFromArray([1, 2, 3, 4], [7, "tacos"]));

console.log(removeFromArray([1, 2, 3, 4], [7, 2]));

console.log(removeFromArray([1, 2, 3, 4], [1, 2, 3, 4]));

console.log(removeFromArray(["hey", 2, 3, "ho"], ["hey", 3]));

console.log(removeFromArray([1, 2, 3], ["1", 3]));

// Do not edit below this line
module.exports = removeFromArray;
