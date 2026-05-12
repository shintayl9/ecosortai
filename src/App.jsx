import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SplashScreen from "./pages/SplashScreen";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Upload from "./pages/Upload";
import Loading from "./pages/Loading";
import Hasil from "./pages/Hasil";
import History from "./pages/History";

import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";

import About from "./pages/About";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

/* ===== LAYOUT ===== */

function Layout() {

  const location = useLocation();

  // ===== HIDE NAVBAR & FOOTER =====

  const hideLayout =

    location.pathname === "/" ||

    location.pathname === "/login-user" ||

    location.pathname === "/register-user" ||

    location.pathname === "/login";

  return (
    <>

      {/* ===== NAVBAR ===== */}

      {!hideLayout && <Navbar />}

      {/* ===== ROUTES ===== */}

      <Routes>

        {/* ===== SPLASH SCREEN ===== */}

        <Route
          path="/"
          element={<SplashScreen />}
        />

        {/* ===== USER ===== */}

        <Route
          path="/register-user"
          element={<RegisterUser />}
        />

        <Route
          path="/login-user"
          element={<LoginUser />}
        />

        {/* ===== ADMIN ===== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        {/* ===== MAIN WEBSITE ===== */}

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/loading"
          element={<Loading />}
        />

        <Route
          path="/hasil"
          element={<Hasil />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/article1"
          element={<Article1 />}
        />

        <Route
          path="/article2"
          element={<Article2 />}
        />

        <Route
          path="/article3"
          element={<Article3 />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      {/* ===== FOOTER ===== */}

      {!hideLayout && <Footer />}

    </>
  );
}

/* ===== APP ===== */

function App() {

  return (

    <Router>

      <Layout />

    </Router>

  );
}

export default App;