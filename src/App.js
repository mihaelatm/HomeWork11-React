import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
