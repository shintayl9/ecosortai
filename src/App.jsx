import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Hasil from "./pages/Hasil";
import History from "./pages/History";
import Article from "./pages/Article";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hasil" element={<Hasil />} />
        <Route path="/history" element={<History />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;