import { Link, Outlet } from "react-router";
import { useState } from "react";
import { postBook } from "../services/api";
import { ButtonClose } from "./AddBookForm.style";

function AddBookForm() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    cover: "",
    rate: "",
  });
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
    postBook(bookData);
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
          <ButtonClose>
            <Link to="/">Закрыть</Link>
          </ButtonClose>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
export default AddBookForm;

// GET /books?rate_gte=4.5 (рейтинг выше 4,5)
