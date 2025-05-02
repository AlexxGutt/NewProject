import "./App.css";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <h1 className="title">Моя библиотека</h1>
      <BookList />
      <AddBookForm />
      <div className="footer">
        <p className="authorText">Все права защищены!</p>
      </div>
    </>
  );
}

export default App;
