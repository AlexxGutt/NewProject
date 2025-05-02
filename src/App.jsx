import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import PopularPage from "./pages/Popular";
import AddBookPage from "./pages/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/add" element={<AddBookPage />} />
      </Route>
      <Route path="/popular" element={<PopularPage />} />
    </Routes>
  );
}

export default App;
