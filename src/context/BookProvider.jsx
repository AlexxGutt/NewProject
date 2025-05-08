import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { fetchBooks } from "../services/api";

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
