import { books } from "../data";
import BookCard from "./BookCard";
function BookList() {
  return (
    <div className="bookList">
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
}

export default BookList;
