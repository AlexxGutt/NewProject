import { useState } from "react";
import { postBook } from "../services/api";

function AddBookForm() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    cover: "",
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
        <button className="button">Добавить</button>
      </form>
    </div>
  );
}
export default AddBookForm;
