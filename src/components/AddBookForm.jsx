function AddBookForm() {
  return (
    <div className="addForm">
      <form className="form" action="">
        <input type="text" placeholder="Название книги" />
        <input type="text" placeholder="Автор" />
        <input type="text" placeholder="Ссылка на обложку" />
        <button className="button">Добавить</button>
      </form>
    </div>
  );
}
export default AddBookForm;
