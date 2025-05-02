import BookCard from "./BookCard";
function BookList({ books }) {
  return (
    <div className="bookList">
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
}

export default BookList;
