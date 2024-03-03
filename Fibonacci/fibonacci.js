const fibonacci = function (num) {
  let num1 = 0;
  let num2 = 1;
  let sum = num;

  console.log("Fibonacci Series:");

  if (num < 0) return num;
  if (num === 0) return 0;

  for (let i = 2; i <= num; i++) {
    console.log(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum;
};

console.log(fibonacci(4));
