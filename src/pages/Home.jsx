import { Link, Outlet } from "react-router";
import BookList from "../components/BookList";
import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";
import { Button } from "./Home.style";
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
        <Button>
          <Link to="/add">Добавить</Link>
        </Button>
        <Button>
          <Link to="/popular">Популярное</Link>
        </Button>
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
