const inputNumber = document.getElementById("fizzBuzzNumber");
const fizzBuzzBtn = document.getElementById("fizzBuzzBtn");
const result = document.getElementById("textResult");

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    //checks if the number is divisible by 3 and by 5
    if (i % 3 === 0 && i % 5 === 0) {
      //if it is, replace the number with FizzBuzz
      number = number.replace(i.toString(), "FizzBuzz");
    }
    //checks if the number is divisible by 3
    else if (i % 3 === 0) {
      //if it is, replace the number with Fizz
      number = number.replace(i.toString(), "Fizz");
    }
    //checks if the number is divisible by 5
    else if (i % 5 === 0) {
      //if it is, replace the number with Buzz
      number = number.replace(i.toString(), "Buzz");
    }
    //if the number is not divisible by 3 or 5, replace the number with the number
    else {
      number = number.replace(number[i], number[i]);
    }
  }
  return number;
}

fizzBuzzBtn.addEventListener("click", () => {
  const number = inputNumber.value;
  if (isNaN(number)) {
    result.textContent = "You need to enter a number!";
  } else if (number === "") {
    result.textContent = "Enter a number to procced";
  } else {
    result.textContent = `Number ${number} is ${fizzBuzz(number)}`;
  }
});
