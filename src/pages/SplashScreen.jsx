import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/SplashScreen.css";

function SplashScreen() {

  const navigate =
    useNavigate();

  const [showButton, setShowButton] =
    useState(false);

  // ===== SHOW BUTTON =====

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setShowButton(true);

      }, 3000);

    return () =>
      clearTimeout(timer);

  }, []);

  // ===== HANDLE START =====

  const handleStart = () => {

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    // ===== SUDAH LOGIN =====

    if (currentUser) {

      navigate("/home");

    }

    // ===== BELUM LOGIN =====

    else {

      navigate("/login-user");

    }
  };

  return (

    <div className="splash-screen">

      {/* ===== BLUR ===== */}

      <div className="blur-circle blur-1"></div>

      <div className="blur-circle blur-2"></div>

      {/* ===== CONTENT ===== */}

      <div className="splash-content">

        {/* ===== LOGO ===== */}

        <img
          src="/logo-removebg-preview.png"
          alt="EcoSortAI"
          className="splash-logo"
        />

        {/* ===== DESCRIPTION ===== */}

        <h1 className="splash-title">

          Platform berbasis AI untuk
          klasifikasi sampah dan solusi
          pengelolaannya secara cerdas
          dan ramah lingkungan.

        </h1>

        {/* ===== SUBTEXT ===== */}

        <p className="splash-subtitle">

          Mulai langkah kecilmu untuk
          bumi yang lebih bersih bersama
          EcoSortAI 

        </p>

        {/* ===== LOADING ===== */}

        {!showButton ? (

          <div className="loading-bar">

            <div className="loading-fill"></div>

          </div>

        ) : (

          <button
            className="start-btn"
            onClick={handleStart}
          >
            Buat Akun & Mulai
          </button>

        )}

      </div>

    </div>

  );
}

export default SplashScreen;