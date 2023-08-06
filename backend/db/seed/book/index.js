const books = require("./book.json");
const Book = require("../../../model/bookSchema");

const populateBooks = async () => {
  const mappedBooks = new Map();

  books.forEach(({ Book_name, Author, Cupboard_no, Availability }) => {
    const existingBooks = mappedBooks.get(Book_name)?.count || 0;

    mappedBooks.set(Book_name, {
      title: Book_name,
      author: Author,
      accessId: Access_no,
      count: (Availability === "YES") ? 1 : 0,
    });
  });

  const mutatedBooks = [];

  mappedBooks.forEach((book) => mutatedBooks.push(book));

  await Book.deleteMany({});
  await Book.insertMany(mutatedBooks);

  console.log("Books Populated");
};

module.exports = {
  populateBooks,
};
