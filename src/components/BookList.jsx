import { useContext } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookContext";
function BookList() {
  const { books } = useContext(BookContext);
  return (
    <div className="bookList">
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
}

export default BookList;
