import { Link, Outlet } from "react-router";
import BookList from "../components/BookList";
import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";
function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="title">Моя библиотека</h1>
        <Link to="/add">Добавить</Link>
        <Link to="/popular">Популярное</Link>
      </header>
      <BookList books={books} />

      <div className="footer">
        <p className="authorText">Все права защищены!</p>
      </div>
      <Outlet />
    </>
  );
}

export default HomePage;
