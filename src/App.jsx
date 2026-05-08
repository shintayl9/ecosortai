import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Upload from "./pages/Upload"
import Loading from "./pages/Loading";
import Hasil from "./pages/Hasil";
import History from "./pages/History";
import Article1 from "./pages/Article1";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/hasil" element={<Hasil />} />
        <Route path="/history" element={<History />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;