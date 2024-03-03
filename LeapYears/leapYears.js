const leapYears = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
  //   const leapYear =
  //     (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
  //     currentYear % 400 === 0;
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34492));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
