import { Link, Outlet } from "react-router";
import { useContext, useState } from "react";
import { fetchBooks, postBook } from "../services/api";
import * as S from "./AddBookForm.style";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router";

function AddBookForm() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    cover: "",
    rate: "",
  });
  const navigate = useNavigate();
  const { setBooks } = useContext(BookContext);
  function handleInputChange(event) {
    const { name, value } = event.target;
    const newBookData = {
      ...bookData,
      [name]: value,
    };
    setBookData(newBookData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    postBook(bookData).then(() => {
      fetchBooks().then((responseData) => {
        setBooks(responseData);
        navigate(-1);
      });
    });
  }
  return (
    <div className="addForm">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="title"
          type="text"
          value={bookData.title}
          onChange={handleInputChange}
          placeholder="Название книги"
        />
        <input
          className="input"
          name="author"
          type="text"
          value={bookData.author}
          onChange={handleInputChange}
          placeholder="Автор"
        />
        <input
          className="input"
          name="cover"
          type="text"
          value={bookData.cover}
          onChange={handleInputChange}
          placeholder="Ссылка на обложку"
        />
        <div className="buttonPosition">
          <button className="button">Добавить</button>
          <S.ButtonClose>
            <Link to="/">Закрыть</Link>
          </S.ButtonClose>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
export default AddBookForm;

// GET /books?rate_gte=4.5 (рейтинг выше 4,5)
