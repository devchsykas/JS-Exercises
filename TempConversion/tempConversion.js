const convertToCelsius = function (fahrenheitTemp) {
  const fahrenheit = (fahrenheitTemp - 32) * 0.5556;
  const fahrenheitTempRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitTempRounded;
};

const convertToFahrenheit = function (celsiusTemp) {
  const celsius = celsiusTemp * 1.8 + 32;
  const celsiusTempRounded = Math.round(celsius * 10) / 10;
  return celsiusTempRounded;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
