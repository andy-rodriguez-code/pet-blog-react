import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Categoria from "./pages/Categoria";

import {} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/categoria/:id/*" element={<Categoria />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
