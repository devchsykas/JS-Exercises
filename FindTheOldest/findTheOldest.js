const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (age) {
  return age.reduce((oldest, person) => {
    if (person.yearOfBirth > oldest.yearOfBirth) {
      return person;
    }
    return oldest;
  });
};

console.log(findTheOldest(people));


