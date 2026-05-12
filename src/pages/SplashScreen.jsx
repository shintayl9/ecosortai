import {
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/SplashScreen.css";

function SplashScreen() {

  const navigate =
    useNavigate();

  useEffect(() => {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    setTimeout(() => {

      // ===== SUDAH LOGIN =====

      if (currentUser) {

        navigate("/home");

      }

      // ===== BELUM LOGIN =====

      else {

        navigate("/login-user");

      }

    }, 2500);

  }, [navigate]);

  return (

    <div className="splash-screen">

      {/* ===== BLUR ===== */}

      <div className="blur-circle blur-1"></div>

      <div className="blur-circle blur-2"></div>

      {/* ===== CONTENT ===== */}

      <div className="splash-content">

        {/* LOGO */}

        <img
          src="/logo-removebg-preview.png"
          alt="EcoSortAI"
          className="splash-logo"
        />

        {/* TITLE */}

        <h1>
          EcoSortAI
        </h1>

        <p>
          Smart Waste Detection
        </p>

        {/* LOADING */}

        <div className="loading-bar">

          <div className="loading-fill"></div>

        </div>

      </div>

    </div>

  );
}

export default SplashScreen;