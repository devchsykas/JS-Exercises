const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book 2",
    author: "Name 2",
  },
];

const getTheTitles = function (array) {
  return array.map((book) => book.title);
};

console.log(books);
console.log(getTheTitles(books));
